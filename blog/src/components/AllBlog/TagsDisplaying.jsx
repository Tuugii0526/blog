import { useState, useRef } from "react";
import { TagEditing } from "./TagEditing";
import { TagSelection } from "./TagSelection";
export const TagsDisplaying = ({ allTags, isAllBlog }) => {
  const [copiedAllTags, setCopiedAllTags] = useState([...allTags]);
  const dialogRef = useRef(null);
  const includedTags = JSON.parse(localStorage.getItem("includedTags"));
  if (includedTags) {
    const newIncludedTags = copiedAllTags
      .filter((tag) => tag.included)
      .map((tag) => {
        let newIncludedTag;
        let isTagExists;
        for (let i = 0; i < includedTags.length; i++) {
          if (includedTags[i]?.title === tag?.title) {
            newIncludedTag = { ...includedTags[i] };
            break;
          } else {
            if (i == includedTags.length - 1) {
              newIncludedTag = {
                title: tag.title,
                included: true,
                currentIndex: 9,
              };
            }
          }
        }
        return newIncludedTag;
      });
    localStorage.setItem("includedTags", JSON.stringify(newIncludedTags));
  } else {
    const newIncludedTags = copiedAllTags
      .filter((tag) => tag.included)
      .map((tag) => {
        return { title: tag.title, included: tag.included, currentIndex: 9 };
      });
    localStorage.setItem("includedTags", JSON.stringify(newIncludedTags));
  }
  return (
    <>
      <div className="w-full  h-fit flex flex-col justify-between relative">
        <p className="text-center min-[1230px]:text-start text-xl md:text-2xl font-bold">
          All Blog Post
        </p>
        {isAllBlog && (
          <>
            <TagSelection allTags={copiedAllTags} />
            <button
              className="w-fit ring-1 ring-[#D4A373] font-bold text-xs text-[#495057] rounded-md "
              onClick={() => {
                // setIsTagEditing(!isTagEditing)
                dialogRef.current.showModal();
              }}
            >
              Add tags
            </button>
          </>
        )}
      </div>
      <TagEditing
        setAllTags={setCopiedAllTags}
        allTags={copiedAllTags}
        ref={dialogRef}
      />
    </>
  );
};

// TagEditing({
//     setIsTagEditing,
//     setAllTags,
//     allTags,
//   })
