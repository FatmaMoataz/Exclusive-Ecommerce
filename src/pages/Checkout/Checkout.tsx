    import { Box, Breadcrumbs, Button, Divider, Input, Typography } from '@mui/material'
    import { NavLink } from 'react-router-dom'
    import Checkbox from '@mui/material/Checkbox';
    import { red } from '@mui/material/colors';
    import img1 from '../../assets/images/footer.png'
    import checkout from '../../assets/images/checkout.png'

    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

    export default function Checkout() {
        
    return (
        <div className='layout'>
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
            <NavLink to="/cart" style={{ color: 'gray', textDecoration: 'none' }}>
            Cart
            </NavLink>        
            <NavLink to="/checkout" style={{ color: 'black', textDecoration: 'none' }}>
            Checkout
            </NavLink>
        </Breadcrumbs>
        <Box sx={{display:'flex',justifyContent:'space-between',alignItems:'center', marginTop:3}}>
            {/* left */}
    <Box>
        <Typography variant='h6' sx={{marginBottom:2}}>Billing Details</Typography>
    <Box sx={{display:'flex', flexDirection:'column',rowGap:3}}>
            <Input placeholder='First Name *' required/>
        <Input placeholder='Company Name'/>
        <Input placeholder='Street Address *' required/>
        <Input placeholder='Apartment, floor, etc..(optional)'/>
        <Input placeholder='Town/City *' required/>
        <Input placeholder='Phone Number *' required/>
        <Input placeholder='Email Address *' required/>
 <Box sx={{display:'flex', alignItems:'center'}}>
           <Checkbox {...label}   sx={{
        color: red[500],
        '&.Mui-checked': {
        color: red[500],
        },
    }}/>
    <Typography>Save this information for faster check-out next time</Typography>
 </Box>
    </Box>
    </Box>
        {/* right */}
        <Box>
            <Box sx={{display:'flex', justifyContent:'space-between', gap:3}}>
<Box sx={{display:'flex', gap:1}}><img src={img1} alt="" width={'50%'} /><Typography>product name</Typography></Box>
<Typography>$650</Typography>
            </Box>
             <Box sx={{display:'flex', justifyContent:'space-between'}}>
<Box sx={{display:'flex', gap:1}}><img src={img1} alt="" width={'50%'} /><Typography>product name</Typography></Box>
<Typography>$650</Typography>
            </Box>
              <Box sx={{display:'flex', justifyContent:'space-between'}}>
<Typography>Subtotal:</Typography>
<Typography>$650</Typography>
            </Box>
            <Divider variant='middle' sx={{marginBlock:2}}/>
             <Box sx={{display:'flex', justifyContent:'space-between'}}>
<Typography>Shipping:</Typography>
<Typography>$0</Typography>
            </Box>
            <Divider variant='middle' sx={{marginBlock:2}}/>
             <Box sx={{display:'flex', justifyContent:'space-between'}}>
<Typography>Total:</Typography>
<Typography>$650</Typography>
            </Box>
<Box sx={{display:'flex', justifyContent:'space-between'}}>
        <Box sx={{display:'flex', alignItems:'center'}}>
           <Checkbox {...label} />
    <Typography>Bank</Typography>
 </Box>
 <img src={checkout} width={'30%'} alt="" />
</Box>
    <Box sx={{display:'flex', alignItems:'center'}}>
           <Checkbox {...label} />
    <Typography>Cash on Delivery</Typography>
 </Box>
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
       <Button sx={{ backgroundColor: '#DB4444', color: 'white', marginTop:2 }}>
            Place Order
          </Button>
        </Box>
        </Box>
        </div>
    )
    }
