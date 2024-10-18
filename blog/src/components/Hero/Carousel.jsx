import { useInitialAllBlogsContext } from '../ContextStateProvider'
import {useState} from 'react'
import { CarouselSub } from './CarouselSub';
export const Carousel = ({carouselLength}) => {
  const [topBlogs, setTopBlogs] = useState(
    useInitialAllBlogsContext({ categoryName: "top", whichOne: "blogs" })
  );
  const slicedBlogs=topBlogs.slice(0,carouselLength)
  return <CarouselSub carouselLength={carouselLength} slicedBlogs={slicedBlogs} />
 };
