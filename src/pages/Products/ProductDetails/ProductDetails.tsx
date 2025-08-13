import { Box, Divider, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Rating } from "@mui/material";
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

export default function ProductDetails() {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    async function fetchProductDetails(productId: string) {
      try {
        const res = await axios.get(`https://fakestoreapi.com/products/${productId}`);
        setProduct(res.data);
      } catch (e) {
        console.log("Failed to load product details", e);
      }
    }

    if (id) {
      fetchProductDetails(id);
    }
  }, [id]);

  if (!product) return <Typography>Loading...</Typography>;

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems:'center',
        flexDirection: { sm: "column", md: "row" },
        gap: 4,
        p: 4

      }}
    >
      <img src={product.image} alt={product.title} style={{ maxWidth: 400 }} />
      <Box>
        <Typography variant="h5" sx={{fontWeight:'bold'}}>{product.title}</Typography>
        <Box sx={{display:'flex'}}>
          <Rating value={product.rating.rate} precision={0.5} readOnly />
          <Typography sx={{color:'gray'}}>({product.rating.count} Review)</Typography>
        </Box>
        <Typography variant="h6">${product.price}</Typography>
        <Typography>{product.description}</Typography>
      <Divider variant="middle" sx={{marginBlock:3}}/>
      <Box sx={{display:'flex', justifyContent:'flex-end', alignItems:'center', gap:3}}>
<ButtonGroup
  variant="outlined"
  aria-label="Basic button group"
  sx={{
    borderColor: 'gray',
    '& .MuiButton-outlined': {
      borderColor: 'gray',
      color: 'black',
      fontSize: 20,
      '&:hover': {
        borderColor: 'gray',
      },
    },
  }}
>
  <Button>-</Button>
  <Button sx={{paddingInline:4}}>2</Button>
  <Button
    variant="contained" 
    sx={{
      color: 'white',
      backgroundColor: '#DB4444',
      fontSize: 20,
      border: '1px solid gray',
      '&:hover': {
        backgroundColor: '#c63c3c',
        border: '1px solid gray',
      },
    }}
  >
    +
  </Button>
</ButtonGroup>
<Button sx={{color:'white', backgroundColor:'#DB4444', paddingInline:5, paddingBlock:1.5}}>Buy Now</Button>
<FavoriteBorderIcon sx={{border:'1px solid gray', borderRadius:1, padding:1}}/>
      </Box>
      </Box>

    </Box>
  );
}
