import { Box, Divider, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Rating } from "@mui/material";
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import WidgetsIcon from '@mui/icons-material/Widgets';
import ProductCard from '../../../components/ProductCard/ProductCard';

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
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);


  // useEffect(() => {
  //   async function fetchProductDetails(productId: string) {
  //     try {
  //       const res = await axios.get(`https://fakestoreapi.com/products/${productId}`);
  //       setProduct(res.data);
  //     } catch (e) {
  //       console.log("Failed to load product details", e);
  //     }
  //   }

  //   if (id) {
  //     fetchProductDetails(id);
  //   }
  // }, [id]);
  useEffect(() => {
  async function fetchProductDetailsAndRelated(productId: string) {
    try {

      const res = await axios.get(`https://fakestoreapi.com/products/${productId}`);
      const productData: Product = res.data;
      setProduct(productData);

      const allProductsRes = await axios.get(`https://fakestoreapi.com/products`);
      const allProducts: Product[] = allProductsRes.data;

      const related = allProducts.filter(
        (p) => p.category === productData.category && p.id !== productData.id
      );

      setRelatedProducts(related);
    } catch (e) {
      console.log("Error fetching product or related items", e);
    }
  }

  if (id) {
    fetchProductDetailsAndRelated(id);
  }
}, [id]);


  if (!product) return <Typography>Loading...</Typography>;

  return (
    <>
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
    <Box sx={{display:'flex', columnGap:1}} className='text-color'>
      <WidgetsIcon/>
  <Typography variant="h5" sx={{fontWeight:'bold'}}>Related Items</Typography>
    </Box>
    {/* <Box
  sx={{
    display: "grid",
    gridTemplateColumns: {
      xs: "1fr",
      sm: "1fr 1fr",
      md: "1fr 1fr 1fr",
    },
    gap: 4,
    p: 4,
  }}
>
  {relatedProducts.map((item) => (
    <Box
      key={item.id}
      sx={{
        border: "1px solid #ddd",
        borderRadius: 2,
        padding: 2,
        textAlign: "center",
        boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
        transition: "transform 0.2s",
        "&:hover": {
          transform: "scale(1.02)",
        },
      }}
    >
      <img src={item.image} alt={item.title} style={{ height: 150, objectFit: "contain", marginBottom: 10 }} />
      <Typography variant="subtitle1" sx={{ fontWeight: "bold", minHeight: 60 }}>
        {item.title}
      </Typography>
      <Rating value={item.rating.rate} readOnly precision={0.5} size="small" />
      <Typography variant="h6">${item.price}</Typography>
      <Button
        variant="contained"
        color="primary"
        href={`/product/${item.id}`}
        sx={{ mt: 2, textTransform: "none" }}
      >
        View Product
      </Button>
    </Box>
  ))}
</Box> */}
<Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
  {relatedProducts.map((item) => (
    <ProductCard key={item.id} product={item} />
  ))}
</Box>
    </>
  );
}
