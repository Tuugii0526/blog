import { TagsIcon } from "./TagsIcon";
import { useState } from "react";
import { newImage } from "../Util/newBlog";
import Link from "next/link";
export const TrendingBlog = ({ blog }) => {
  const [hover, setHover] = useState(false);
  const [generatedImage, setGeneratedImage] = useState(newImage);
  let className;
  if (hover) {
    className = "h-fit";
  } else {
    className = "h-[35%]";
  }
  return (
    <div
      className={` w-1/3 h-full flex-shrink-0   rounded-xl shadow-lg border-solid border-[1px] border-gray-300 overflow-hidden transition duration-500 relative snap-start`}
      onPointerEnter={() => {
        setHover(true);
      }}
      onPointerLeave={() => {
        setHover(false);
      }}
    >
      <div
        className={`absolute inset-x-0 inset-y-0 w-full h-full ${
          hover ? "scale-110" : ""
        }`}
        style={{
          backgroundImage: `url(${blog?.cover_image || generatedImage})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      ></div>
      <Link href={blog?.url}>
        <div
          className={`w-full h-full relative min-[480px]:px-5 ${
            hover ? "bg-slate-900 opacity-90" : ""
          }`}
        >
          <div
            className={`${className} w-full  absolute bottom-5 flex flex-col gap-2`}
          >
            <div className="max-w-[90%] h-fit flex flex-wrap">
              <TagsIcon blog={blog} />
            </div>
            <div className="w-[90%] overflow-hidden max-[597px]:text-[8px]  min-[598px]:text-sm  font-semibold text-white t ">
              {blog?.description || "No description"}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};
