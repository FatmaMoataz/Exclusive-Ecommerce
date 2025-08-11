import Carousel from "react-multi-carousel";
import Category from "../../Category/Category";
import responsive from "../ResponsiveCarousel/ResponsiveCarousel";

export default function CategoryCarousel() {
return (
    <Carousel partialVisible={true} responsive={responsive}>
  <div><Category/></div>
  <div><Category/></div>
  <div><Category/></div>
  <div><Category/></div>
  <div><Category/></div>
  <div><Category/></div>
</Carousel>
)
}