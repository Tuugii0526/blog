import { Carousel } from "../Hero/Carousel";
import { Trending } from "../Hero/Trending";
import { AllBlog } from "../AllBlog/AllBlog";
import Header from "../Header/Header";
export default function HomePage() {
  return (
    <>
      <div className="w-full z-10 bg-white sticky top-0 ">
        <div className=" min-w-[240px] max-w-[1230px] mx-auto ">
          <Header />
        </div>
      </div>
      <div className="w-full z-0">
        <div className="page-class ">
          <Carousel carouselLength={10}/>
          <Trending />
          <AllBlog key={0} />
        </div>
      </div>
    </>
  );
}
