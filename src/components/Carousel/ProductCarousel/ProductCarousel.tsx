import Products from "../../../pages/Products/Products";
import responsive from "../ResponsiveCarousel/ResponsiveCarousel";
import Carousel from "react-multi-carousel";

export default function ProductCarousel() {
    return (
    <Carousel partialVisible={true} responsive={responsive}>
  <div><Products/></div>
  <div><Products/></div>
  <div><Products/></div>
  <div><Products/></div>
  <div><Products/></div>
  <div><Products/></div>
</Carousel>
    )
}