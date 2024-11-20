import { useState, useEffect } from "react";
import { BlogTemplate } from "./BlogTemplate";
import Link from "next/link";
import { useTagContext } from "./AllBlogSub";
export const BlogsDisplayingUnList = ({ tagSearchedBlogs, isAllBlog }) => {
  const currentTag = useTagContext();
  const includedTags = JSON.parse(localStorage.getItem("includedTags"));
  let currentTagObject;
  let indexForDisplaying;
  if (includedTags) {
    currentTagObject = includedTags.find((tag) => tag.title == currentTag);
    indexForDisplaying = currentTagObject?.currentIndex;
  }

  const [slicingEnd, setSlicingEnd] = useState(indexForDisplaying || 9);
  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop >
        (document.documentElement.scrollHeight / 15) * 12 &&
      slicingEnd + 1 < tagSearchedBlogs.length
    ) {
      setSlicingEnd((i) => i + 1);
      if (currentTagObject) {
        const newIncludedTags = includedTags.map((tag) => {
          if (tag.title == currentTagObject.title) {
            return { ...tag, currentIndex: slicingEnd + 1 };
          }
          return tag;
        });
        localStorage.setItem("includedTags", JSON.stringify(newIncludedTags));
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [slicingEnd]);

  return (
    <ul className="w-full h-fit grid grid-cols-2 min-[576px]:grid-cols-3 gap-x-[5%] gap-y-5">
      {tagSearchedBlogs.slice(0, slicingEnd).map((blog) => (
        <li key={blog?.id}>
          <Link href={`${blog?.url}`}>
            <BlogTemplate blog={blog} isAllBlog={isAllBlog} />
          </Link>
        </li>
      ))}
    </ul>
  );
};
