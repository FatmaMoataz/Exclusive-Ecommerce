import {
  Typography, Box, Input, Divider, Button,
  Breadcrumbs
} from '@mui/material';
import { NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useCart } from '../../context/CartContext';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import axios from 'axios';

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
}

export default function CartTable() {
  const { cart, updateQuantity } = useCart();
  const [products, setProducts] = useState<Product[]>([]);
  useEffect(() => {
    async function fetchProducts() {
      try {
        const res = await axios.get('https://fakestoreapi.com/products');
        setProducts(res.data);
      } catch (e) {
        console.error('Failed to fetch products', e);
      }
    }
    fetchProducts();
  }, []);

  // combine cart items with product details
  const cartItems = cart.map(item => {
    const product = products.find(p => p.id === item.productId);
    return product
      ? {
          ...product,
          quantity: item.quantity,
          subtotal: item.quantity * product.price,
        }
      : null;
  }).filter(item => item !== null) as (Product & { quantity: number; subtotal: number })[];

  const total = cartItems.reduce((acc, item) => acc + item.subtotal, 0);

  return (
    <Box sx={{ margin: 5 }}>
      <Breadcrumbs
        aria-label="breadcrumb"
        sx={{
          display: { sm: 'none', md: 'flex' },
          flexWrap: 'nowrap',
          alignItems: 'flex-start',
        }}
      >
        <NavLink to="/" style={{ color: 'gray', textDecoration: 'none' }}>Home</NavLink>
        <NavLink to="/cart" style={{ color: 'black', textDecoration: 'none' }}>Cart</NavLink>
      </Breadcrumbs>

      <Box sx={{ marginBlock: 2 }}>

        <Box sx={{ boxShadow: 2, padding: 2, borderRadius: 2, marginBottom: 2 }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography variant="h6" sx={{ width: '40%' }}>Product</Typography>
            <Typography variant="h6" sx={{ width: '20%' }}>Price</Typography>
            <Typography variant="h6" sx={{ width: '20%' }}>Quantity</Typography>
            <Typography variant="h6" sx={{ width: '20%' }}>Subtotal</Typography>
          </Box>
        </Box>

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          {cartItems.map(item => (
            <Box key={item.id} sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: 2,
              borderRadius: 2,
              boxShadow: 1,
            }}>
              <Box sx={{ display: 'flex', alignItems: 'center', width: '40%' }}>
                <img src={item.image} alt={item.title} style={{ width: 80, marginRight: 16, borderRadius: 4 }} />
                <Typography>{item.title}</Typography>
              </Box>
              <Typography sx={{ width: '20%' }}>${item.price.toFixed(2)}</Typography>
              <Box sx={{ width: '20%' }}>
                <Box sx={{
                  display: 'flex',
                  alignItems: 'center',
                  border: '1px solid',
                  width: 'fit-content',
                  borderRadius: 1,
                  paddingInline: 1,
                  columnGap: 2
                }}>
                  <Typography>{item.quantity.toString().padStart(2, '0')}</Typography>
                  <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <KeyboardArrowUpIcon onClick={() => updateQuantity(item.id, item.quantity + 1)} sx={{ cursor: 'pointer' }} />
                    <KeyboardArrowDownIcon onClick={() => updateQuantity(item.id, item.quantity - 1)} sx={{ cursor: 'pointer' }} />
                  </Box>
                </Box>
              </Box>
              <Typography sx={{ width: '20%' }}>${item.subtotal.toFixed(2)}</Typography>
            </Box>
          ))}
        </Box>
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', marginBottom: 3 }}>
        <Button sx={{ border: '1px solid gray', paddingInline: 1, color: 'black' }}>Return To Shop</Button>
        <Button sx={{ border: '1px solid gray', paddingInline: 1, color: 'black' }}>Update Cart</Button>
      </Box>

      {/* Coupon + Summary */}
      <Box sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        rowGap: 2,
        flexDirection: { sm: 'column', md: 'row' }
      }}>
        <Box sx={{ display: 'flex', columnGap: 2 }}>
          <Input
            placeholder="Coupon Code"
            disableUnderline
            sx={{
              border: '1px solid #ccc',
              borderRadius: '4px',
              px: 1,
              py: 0.5,
              '&:focus-within': {
                borderColor: '#DB4444',
              },
            }}
          />
          <Button sx={{ backgroundColor: '#DB4444', color: 'white' }}>
            Apply Coupon
          </Button>
        </Box>

        <Box sx={{ border: '1px solid', width: '40%', padding: 3, borderRadius: 1 }}>
          <Typography sx={{ fontWeight: 'bold', marginBottom: 2 }}>Cart Total</Typography>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', marginBottom: 2 }}>
            <Typography>Subtotal</Typography>
            <Typography>${total.toFixed(2)}</Typography>
          </Box>
          <Divider variant='middle' />
          <Box sx={{ display: 'flex', justifyContent: 'space-between', marginBlock: 2 }}>
            <Typography>Shipping</Typography>
            <Typography>$0.00</Typography>
          </Box>
          <Divider variant='middle' />
          <Box sx={{ display: 'flex', justifyContent: 'space-between', marginBlock: 2 }}>
            <Typography>Total</Typography>
            <Typography>${total.toFixed(2)}</Typography>
          </Box>
          <NavLink to={'/checkout'} style={{textDecoration:'none'}}>
<Button sx={{ backgroundColor: '#DB4444', color: 'white', display: 'block', margin: 'auto' }}>
            Process To Checkout
          </Button> 
          </NavLink>
        </Box>
      </Box>
    </Box>
  );
}
