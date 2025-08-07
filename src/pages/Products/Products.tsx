import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import { NavLink } from 'react-router-dom';
import './Products.css';
import ProductImg from '../../assets/images/signup.png';

const Products: React.FC = () => {
  return (
    <Card
      sx={{ maxWidth: 345, margin: '2rem', position: 'relative', paddingBottom: '1rem' }}
      className="card"
    >
      <CardMedia sx={{ height: 190 }} image={ProductImg} title="green iguana" />
      
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
        <Box sx={{ color: 'white', backgroundColor: '#DB4444', padding: '5px', borderRadius: '2px' }}>
          -40%
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <NavLink to="/wishlist" style={{ color: 'black' }}>
            <FavoriteBorderIcon />
          </NavLink>
          <NavLink to="/products/productDetails" style={{ color: 'black' }}>
            <RemoveRedEyeOutlinedIcon />
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
        <Typography gutterBottom variant="h5" component="div">
          HAVIT HV-G92 Gamepad
        </Typography>
        <Box sx={{ display: 'flex', columnGap: '1rem' }}>
          <Typography variant="body2" className="text-color">
            $120
          </Typography>
          <Typography variant="body2" sx={{ color: 'gray', textDecoration: 'line-through' }}>
            $160
          </Typography>
        </Box>
      </CardContent>

      <CardActions>
        <Rating name="half-rating" defaultValue={2.5} precision={0.5} readOnly />
        <Typography variant="body2">(88)</Typography>
      </CardActions>
    </Card>
  );
};

export default Products;
