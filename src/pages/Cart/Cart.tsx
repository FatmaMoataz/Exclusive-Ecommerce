import {
  Typography, Box,
  Input,
  Divider
} from '@mui/material';
import img1 from '../../assets/images/footer.png';
import img2 from '../../assets/images/home.png';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Button from '@mui/material/Button';
import { NavLink } from 'react-router-dom';

export default function CartTable() {
  const cartItems = [
    {
      id: 1,
      name: 'LCD Monitor',
      price: 650,
      quantity: 1,
      image: img1,
    },
    {
      id: 2,
      name: 'H1 Gamepad',
      price: 550,
      quantity: 2,
      image: img2,
    },
  ];

  return (
    <Box sx={{margin:5}}>
         <Breadcrumbs
        aria-label="breadcrumb"
        sx={{
          display: { sm: 'none', md: 'flex' },
          flexWrap: 'nowrap',
          alignItems: 'flex-start',
        }}
      >
        <NavLink to="/" style={{ color: 'gray', textDecoration: 'none' }}>
          Home
        </NavLink>
        <NavLink to="/cart" style={{ color: 'black', textDecoration: 'none' }}>
          Cart
        </NavLink>
      </Breadcrumbs>
      <Box sx={{marginBlock:2}}>
      {/* Header Box */}
      <Box sx={{
        boxShadow:2,
        padding: 2,
        borderRadius: 2,
        marginBottom: 2,
      }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography variant="h6" sx={{ width: '40%' }}>Product</Typography>
          <Typography variant="h6" sx={{ width: '20%' }}>Price</Typography>
          <Typography variant="h6" sx={{ width: '20%' }}>Quantity</Typography>
          <Typography variant="h6" sx={{ width: '20%' }}>Subtotal</Typography>
        </Box>
      </Box>

      {/* Table Rows Box */}
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
      }}>
        {cartItems.map((item) => (
          <Box key={item.id} sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: 2,
            borderRadius: 2,
            boxShadow: 1,
          }}>
            <Box sx={{ display: 'flex', alignItems: 'center', width: '40%' }}>
              <img src={item.image} alt={item.name} style={{ width: 80, marginRight: 16, borderRadius: 4 }} />
              <Typography>{item.name}</Typography>
            </Box>
            <Typography sx={{ width: '20%' }}>${item.price}</Typography>
            <Box sx={{ width: '20%' }}>
              <Box sx={{display:'flex', alignItems:'center', border:'1px solid', width:'fit-content', borderRadius:1, paddingInline:1, columnGap:2}}>
                <Typography>01</Typography>
                <Box sx={{display:'flex', flexDirection:'column'}}><KeyboardArrowUpIcon/>
                <KeyboardArrowDownIcon/></Box>
              </Box>
            </Box>
            <Typography sx={{ width: '20%' }}>${item.price * item.quantity}</Typography>
          </Box>
        ))}
      </Box>
    </Box>
    <Box sx={{display:'flex', justifyContent:'space-between', marginBottom:3}}>
<Button sx={{border:'1px solid gray', paddingInline:1, color:'black'}}>Return To Shop</Button>
<Button sx={{border:'1px solid gray', paddingInline:1, color:'black'}}>Update Cart</Button>
    </Box>
     <Box sx={{display:'flex',justifyContent:'space-between', alignItems:'flex-start',rowGap:2,flexDirection:{sm:'column',md:'row'}}}>
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
<Box sx={{border:'1px solid', width:'40%', padding:3, borderRadius:1}}>
  <Typography sx={{fontWeight:'bold', marginBottom:2}}>Cart Total</Typography>
  <Box sx={{display:'flex', justifyContent:'space-between', marginBottom:2}}>
    <Typography>Subtotal</Typography>
    <Typography>$550</Typography>
  </Box>
      <Divider variant='middle'/>
      <Box sx={{display:'flex', justifyContent:'space-between', marginBlock:2}}>
    <Typography>Shipping</Typography>
    <Typography>$550</Typography>
  </Box>
      <Divider variant='middle'/>
        <Box sx={{display:'flex', justifyContent:'space-between', marginBlock:2}}>
    <Typography>Total</Typography>
    <Typography>$550</Typography>
  </Box>
  <Button sx={{ backgroundColor: '#DB4444', color: 'white',display:'block' ,margin:'auto' }}>Process To Checkout</Button>
</Box>
    </Box>
    </Box>
  );
}
