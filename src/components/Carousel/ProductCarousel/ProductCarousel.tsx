import { useEffect, useState } from "react";
import axios from "axios";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import responsive from "../ResponsiveCarousel/ResponsiveCarousel";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Rating from "@mui/material/Rating";
import Box from "@mui/material/Box";

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
        <Card
          key={product.id}
          sx={{ maxWidth: 300, margin: "1rem", position: "relative" }}
        >
          <CardMedia
            component="img"
            height="140"
            image={product.image}
            alt={product.title}
            sx={{ objectFit: "contain", padding: "1rem" }}
          />
          <CardContent>
            <Typography variant="body1" noWrap>
              {product.title}
            </Typography>
            <Box display="flex" justifyContent="space-between">
              <Typography variant="body2">${product.price}</Typography>
              <Rating value={product.rating.rate} precision={0.5} readOnly />
            </Box>
          </CardContent>
        </Card>
      ))}
    </Carousel>
  );
}
