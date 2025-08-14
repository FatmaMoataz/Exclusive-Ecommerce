import { useEffect, useState } from "react";
import axios from "axios";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import responsive from "../ResponsiveCarousel/ResponsiveCarousel";
import ProductCard from "../../ProductCard/ProductCard";

export default function ProductCarousel() {
  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get("https://fakestoreapi.com/products");
        setProducts(res.data);
      } catch (error) {
        console.log("Error fetching products", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <Carousel partialVisible={true} responsive={responsive}>
      {products.map((product) => (
  <ProductCard key={product.id} product={product} />
))}
    </Carousel>
  );
}
