import * as React from 'react';
import type { FC } from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Box from '@mui/material/Box';
import staticSlider from '../../assets/images/slider.png';
import ScrollTop from '../../components/ScrollToTop/ScrollToTop';
import Fab from '@mui/material/Fab';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Toolbar from '@mui/material/Toolbar';
import WidgetsIcon from '@mui/icons-material/Widgets';
import Typography from '@mui/material/Typography';
import CountDownTimer from '../../components/CountDownTimer/CountDownTimer';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Products from '../Products/Products';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Category from '../../components/Category/Category';
import homePicture from '../../assets/images/home.png';
import home1 from '../../assets/images/home1.png';
import home2 from '../../assets/images/home2.png';
import home3 from '../../assets/images/home3.png';
import home4 from '../../assets/images/home4.png';
import DeliveryDiningRoundedIcon from '@mui/icons-material/DeliveryDiningRounded';
import HeadsetMicRoundedIcon from '@mui/icons-material/HeadsetMicRounded';
import LockClockIcon from '@mui/icons-material/LockClock';


interface HomeProps {
  window?: () => Window;
}

const Home: FC<HomeProps> = (props) => {
  const [openWomen, setOpenWomen] = React.useState<boolean>(true);
  const [openMen, setOpenMen] = React.useState<boolean>(false);

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 4,
      partialVisibilityGutter: 40,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      partialVisibilityGutter: 40,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      partialVisibilityGutter: 40,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <>
      <Toolbar id="back-to-top-anchor" />
{/* 1st section */}
 <Box sx={{    display: 'flex',
    flexDirection: { xs: 'column', md: 'row' },
    alignItems: 'center',
    columnGap: '2rem',
    rowGap: '2rem',
    px: '2rem',}}>
      <List
      sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper',paddingLeft:'4rem'}}
      component="nav"
      aria-labelledby="nested-list-subheader"
    >
 <ListItemButton onClick={() => setOpenWomen(!openWomen)}>
  <ListItemText primary="Woman's Fashion" />
  {openWomen ? <ExpandLess /> : <ExpandMore />}
</ListItemButton>
<Collapse in={openWomen} timeout="auto" unmountOnExit>
  <List component="div" disablePadding>
    <ListItemButton sx={{ pl: 4 }}>
      <ListItemText primary="Dresses" />
    </ListItemButton>
  </List>
</Collapse>

<ListItemButton onClick={() => setOpenMen(!openMen)}>
  <ListItemText primary="Men's Fashion" />
  {openMen ? <ExpandLess /> : <ExpandMore />}
</ListItemButton>
<Collapse in={openMen} timeout="auto" unmountOnExit>
  <List component="div" disablePadding>
    <ListItemButton sx={{ pl: 4 }}>
      <ListItemText primary="Shirts" />
    </ListItemButton>
  </List>
</Collapse>


      <ListItemButton>
        <ListItemText primary="Electronics" />
      </ListItemButton>
      <ListItemButton>
        <ListItemText primary="Home & Lifestyle" />
      </ListItemButton>
       <ListItemButton>
        <ListItemText primary="Home & Lifestyle" />
      </ListItemButton>
       <ListItemButton>
        <ListItemText primary="Medicine" />
      </ListItemButton>
      <ListItemButton>
        <ListItemText primary="Sports & Outdoor" />
      </ListItemButton>
       <ListItemButton>
        <ListItemText primary="Baby's & Toys" />
      </ListItemButton>
       <ListItemButton>
        <ListItemText primary="Groceries & Pets" />
      </ListItemButton>
             <ListItemButton>
        <ListItemText primary="Health & Beauty" />
      </ListItemButton>
    </List>
    <Box>
       <Box
    component="img"
    src={staticSlider}
    alt="static slider"
    sx={{
      width: '100%',
      maxWidth: '1000px', 
      height: 'auto',
      borderRadius: '8px', 
    }}
  />
    </Box>
  </Box> 
{/* 2nd section */}
<Box sx={{padding:'2rem'}}>
<Box sx={{color:'#DB4444', display:'flex'}}>
  <WidgetsIcon/>
  <Typography variant="h5" sx={{fontWeight:'bold'}}>Today's</Typography>
</Box>
<Box sx={{display:'flex',justifyContent:'space-between', alignItems:'center', gap:'2rem'}}>
  <Typography variant='h4' sx={{fontWeight:'bold'}}>Flash Sales</Typography>
  <CountDownTimer/>
</Box>
<Carousel partialVisible={true} responsive={responsive}>
  <div><Products/></div>
  <div><Products/></div>
  <div><Products/></div>
  <div><Products/></div>
  <div><Products/></div>
  <div><Products/></div>
</Carousel>
    <Button sx={{backgroundColor:'#DB4444', color:'white', display:'block', margin:'auto'}}>View All Products</Button>
</Box>
  <Divider variant="middle"/>
{/* 3rd section */}
<Box sx={{padding:'2rem'}}>
<Box sx={{color:'#DB4444', display:'flex'}}>
  <WidgetsIcon/>
  <Typography variant="h5" sx={{fontWeight:'bold'}}>Categories</Typography>
</Box>
  <Typography variant='h4' sx={{fontWeight:'bold'}}>Browse By Category</Typography>
<Carousel partialVisible={true} responsive={responsive}>
  <div><Category/></div>
  <div><Category/></div>
  <div><Category/></div>
  <div><Category/></div>
  <div><Category/></div>
  <div><Category/></div>
</Carousel>
</Box>
  <Divider variant="middle"/>
{/* 4th section */}
<Box sx={{padding:'2rem'}}>
<Box sx={{color:'#DB4444', display:'flex'}}>
  <WidgetsIcon/>
  <Typography variant="h5" sx={{fontWeight:'bold'}}>This month</Typography>
</Box>
<Box sx={{display:'flex',justifyContent:'space-between', alignItems:'center', gap:'2rem'}}>
  <Typography variant='h4' sx={{fontWeight:'bold'}}>Best Selling Products</Typography>
      <Button sx={{backgroundColor:'#DB4444', color:'white'}}>View All</Button>
</Box>
<Carousel partialVisible={true} responsive={responsive}>
  <div><Products/></div>
  <div><Products/></div>
  <div><Products/></div>
  <div><Products/></div>
  <div><Products/></div>
  <div><Products/></div>
</Carousel>
</Box>
{/* 5th section */}
<Box sx={{textAlign:'center', margin:'2rem'}}>
  <Box
    component="img"
    src={homePicture}
    alt="home section"
    sx={{
      width: '100%',
      maxWidth: '1000px', 
      height: 'auto',
      borderRadius: '8px', 
    }}
  />
</Box>
{/* 6th section */}
<Box sx={{padding:'2rem'}}>
<Box sx={{color:'#DB4444', display:'flex'}}>
  <WidgetsIcon/>
  <Typography variant="h5" sx={{fontWeight:'bold'}}>Our Products</Typography>
</Box>
  <Typography variant='h4' sx={{fontWeight:'bold'}}>Explore Our Products</Typography>
<Box sx={{display:'flex', flexWrap:'wrap', justifyContent:'center'}}>
  <div><Products/></div>
  <div><Products/></div>
  <div><Products/></div>
  <div><Products/></div>
  <div><Products/></div>
  <div><Products/></div>
</Box>
    <Button sx={{backgroundColor:'#DB4444', color:'white', display:'block', margin:'auto'}}>View All Products</Button>
</Box>
{/* 7th section */}
<Box sx={{ padding: '2rem' }}>
  <Box sx={{ color: '#DB4444', display: 'flex' }}>
    <WidgetsIcon />
    <Typography variant="h5" sx={{ fontWeight: 'bold' }}>Featured</Typography>
  </Box>
  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '2rem' }}>
    <Typography variant='h4' sx={{ fontWeight: 'bold' }}>New Arrival</Typography>
  </Box>

  <Box
    sx={{
      display: 'flex',
      flexDirection: { xs: 'column', md: 'row' },
      gap: '1rem',
      mt: '2rem',
    }}
  >
    <Box sx={{ flex: 1 }}>
      <Box
        component="img"
        src={home4}
        alt="new arrival"
        sx={{ width: '100%', borderRadius: '8px' }}
      />
    </Box>

    <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Box>
        <Box
          component="img"
          src={home3}
          alt="new arrival"
          sx={{ width: '100%', borderRadius: '8px' }}
        />
      </Box>
      <Box sx={{ display: 'flex', gap: '1rem', flexDirection: { xs: 'column', sm: 'row' } }}>
        <Box sx={{ flex: 1 }}>
          <Box
            component="img"
            src={home2}
            alt="new arrival"
            sx={{ width: '100%', borderRadius: '8px' }}
          />
        </Box>
        <Box sx={{ flex: 1 }}>
          <Box
            component="img"
            src={home1}
            alt="new arrival"
            sx={{ width: '100%', borderRadius: '8px' }}
          />
        </Box>
      </Box>
    </Box>
  </Box>
</Box>
{/* 8th section */}
<Box sx={{display:'flex',flexWrap:'wrap' ,justifyContent:'center', alignItems:'center', gap:'2rem', padding:'5rem'}}>
<Box sx={{textAlign:'center'}}>
  <DeliveryDiningRoundedIcon sx={{ fontSize: 40, color:'white', backgroundColor:'black',borderRadius:'50%',padding:'5px' }}/>
  <Typography variant='h5'sx={{fontWeight:'bold'}}>FREE AND FAST DELIVERY</Typography>
  <Typography sx={{color:'gray'}}>Free delivery for all orders over $140</Typography>
</Box>
<Box sx={{textAlign:'center'}}>
  <HeadsetMicRoundedIcon sx={{ fontSize: 40, color:'white', backgroundColor:'black',borderRadius:'50%',padding:'5px' }}/>
  <Typography variant='h5' sx={{fontWeight:'bold'}}>24/7 CUSTOMER SERVICE</Typography>
  <Typography sx={{color:'gray'}}>Friendly 24/7 customer support</Typography>
</Box>
<Box sx={{textAlign:'center'}}>
  <LockClockIcon sx={{ fontSize: 40, color:'white', backgroundColor:'black',borderRadius:'50%',padding:'5px' }}/>
  <Typography variant='h5' sx={{fontWeight:'bold'}}>MONEY BACK GUARANTEE</Typography>
  <Typography sx={{color:'gray'}}>We return money within 30 days</Typography>
</Box>
</Box>
      {/* Scroll to top */}
      <ScrollTop {...props}>
        <Fab size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </>
  );
};

export default Home;
