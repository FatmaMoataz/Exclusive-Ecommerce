import { useEffect, useState } from "react";
import axios from "axios";
import {useWishlist} from "../../context/WishlistContext";
import ProductCard from "../../components/ProductCard/ProductCard";
import { Box, Button, Typography } from "@mui/material";

export default function Wishlist() {
  const { wishlist } = useWishlist();
  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
    async function fetchWishlistProducts() {
      try {
        const res = await axios.get("https://fakestoreapi.com/products");
        const filtered = res.data.filter((product: any) =>
          wishlist.includes(product.id)
        );
        setProducts(filtered);
      } catch (e) {
        console.log("Failed to fetch wishlist products", e);
      }
    }

    fetchWishlistProducts();
  }, [wishlist]);

  return (
    <Box>
      <Box sx={{display:'flex', justifyContent:'space-between', alignItems:'center', marginInline:2}}>
        <Typography variant="h4" sx={{ m: 4, fontWeight:'bold' }}>
        Wishlist 
      </Typography>
      <Button variant="outlined" sx={{border:'1px solid black', color:'black', fontWeight:'bold', paddingBlock:1, paddingInline:2}}>Move All To Bag</Button>
      </Box>
      <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
        {products.length === 0 ? (
          <Typography>No items in wishlist.</Typography>
        ) : (
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        )}
      </Box>
    </Box>
  );
}
