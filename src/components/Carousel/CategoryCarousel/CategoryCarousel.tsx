import Carousel from "react-multi-carousel";
import Category from "../../Category/Category";
import responsive from "../ResponsiveCarousel/ResponsiveCarousel";
import CheckroomIcon from '@mui/icons-material/Checkroom';
import DiamondIcon from '@mui/icons-material/Diamond';
import CableIcon from '@mui/icons-material/Cable';

const categories = [
  { icon: CheckroomIcon, name: "Men's Clothing" },
  { icon: DiamondIcon, name: "Jewelery" },
  { icon: CableIcon, name: "Electronics" },
  { icon: CheckroomIcon, name: "Women's Clothing" },
];

export default function CategoryCarousel() {
  return (
    <Carousel partialVisible={true} responsive={responsive}>
      {categories.map((category, index) => (
        <div key={index}>
          <Category icon={category.icon} name={category.name} />
        </div>
      ))}
    </Carousel>
  );
}
