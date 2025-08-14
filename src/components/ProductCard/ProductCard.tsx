import React from 'react';
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Rating,
  Box,
} from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import { NavLink } from 'react-router-dom';
import './ProductCard.css';

interface ProductCardProps {
  product: {
    id: number;
    title: string;
    price: number;
    image: string;
    rating: {
      rate: number;
      count: number;
    };
  };
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <Card
      key={product.id}
      sx={{ maxWidth: 345, margin: '2rem', position: 'relative', paddingBottom: '1rem' }}
      className="card"
    >
      <CardMedia
        component="img"
        image={product.image}
        alt={product.title}
        sx={{
          width: '100%',
          aspectRatio: '1 / 1.2',
          objectFit: 'contain',
          backgroundColor: '#f9f9f9',
        }}
      />

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          position: 'absolute',
          top: 0,
          right: 0,
          left: 0,
          padding: '1rem',
        }}
      >
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <FavoriteBorderIcon sx={{ backgroundColor: 'white', borderRadius: '50%' }} />
          <NavLink to={`/products/productDetails/${product.id}`} style={{ color: 'black' }}>
            <RemoveRedEyeOutlinedIcon sx={{ backgroundColor: 'white', borderRadius: '50%' }} />
          </NavLink>
        </Box>
      </Box>

      <Button
        sx={{ backgroundColor: 'black', color: 'white', position: 'absolute', right: 0, left: 0, opacity: 0 }}
        className="add-to-cart-btn translateY-50"
      >
        Add to Cart
      </Button>

      <CardContent sx={{ position: 'relative' }}>
        <Typography gutterBottom variant="h6" component="div" noWrap>
          {product.title}
        </Typography>
        <Box sx={{ display: 'flex', columnGap: '1rem' }}>
          <Typography variant="body2" className="text-color">
            ${product.price}
          </Typography>
          <Typography variant="body2" sx={{ color: 'gray', textDecoration: 'line-through' }}>
            ${(product.price * 1.2).toFixed(2)}
          </Typography>
        </Box>
      </CardContent>

      <CardActions>
        <Rating name="half-rating" defaultValue={product.rating?.rate || 0} precision={0.5} readOnly />
        <Typography variant="body2">({product.rating?.count || 0})</Typography>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
