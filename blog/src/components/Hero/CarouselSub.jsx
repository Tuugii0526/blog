import { useEffect, useRef, useState } from "react";
import { LeftArrow } from "./LeftArrow";
import { RightArrow } from "./RightArrow";
import { CarouselCard } from "./CarouselCard";

export const CarouselSub = ({ carouselLength, slicedBlogs }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const goToPrev = () => {
    setCurrentIndex((index) =>
      index - 2 < 0 ? carouselLength - 1 : index - 2
    );
  };
  const goToNext = () => {
    setCurrentIndex((index) =>
      index + 2 > carouselLength - 1 ? 0 : index + 2
    );
  };
  useEffect(() => {
    const intervalId = setInterval(goToNext, 5000);
    return () => clearInterval(intervalId);
  }, [currentIndex]);
  return (
    <div className="w-full  h-[170px]  min-[400px]:h-[200px]  min-[480px]:h-[220px]  overflow-hidden relative">
      <div
        className="w-1/2 h-full flex  transition-transform ease-out duration-500"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        {slicedBlogs.map((blog) => (
          <CarouselCard key={blog?.id} blog={blog} />
        ))}
      </div>
      <div className="absolute inset-x-0 w-[90%] h-fit mx-auto top-[40%] flex justify-between">
        <LeftArrow indexMinus={goToPrev} />
        <RightArrow indexPlus={goToNext} />
      </div>

      <div className="absolute inset-x-0 bottom-0 w-4/5 mx-auto flex  items-center justify-center gap-3 overflow-scroll px-2 text-xs">
        {slicedBlogs.map((blog, index) => {
          return (
            <div 
              key={blog?.id}
              className={`flex-shrink-0 w-fit h-fit rounded-full bg-slate-300  ${
                index === currentIndex ? "px-2 " : "px-0.5"
              }`}
            >
              {index + 1}
            </div>
          );
        })}
      </div>
    </div>
  );
};
