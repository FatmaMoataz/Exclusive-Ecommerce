import { useState } from 'react';
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  InputBase,
  Divider
} from '@mui/material';
import { styled } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink } from 'react-router-dom';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Popover from '@mui/material/Popover';
import * as React from 'react';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: '#F5F5F5',
  marginLeft: 0,
  width: '100%',
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  backgroundColor: '#F5F5F5',
  color: '#000000',
  borderRadius: '4px',
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    [theme.breakpoints.up('sm')]: {
      width: '22ch',
      '&:focus': {
        width: '25ch',
      },
    },
  },
}));


export default function Header() {
  const [drawerOpen, setDrawerOpen] = useState<boolean>(false);

  
  const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);
    const handlePopoverOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const toggleDrawer = (open: boolean) => () => {
    setDrawerOpen(open);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: '#fff', color: '#000' }}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>

          {/* Menu icon (mobile only) */}
          <IconButton
            size="large"
            edge="start"
            sx={{ display: { sm: 'block', md: 'none' }, mr: 2 }}
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>

          {/* Logo */}
          <Typography
            variant="h5"
            noWrap
            component="div"
            sx={{ fontWeight: 'bold', display: { sm: 'none', md: 'block' } }}
          >
            Exclusive
          </Typography>

          {/* NavLinks (desktop only) */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 3 }}>
            <NavLink to="/" style={({ isActive }) => ({ textDecoration: isActive ? 'underline' : 'none', color: 'inherit' })}>Home</NavLink>
            <NavLink to="/contact" style={({ isActive }) => ({ textDecoration: isActive ? 'underline' : 'none', color: 'inherit' })}>Contact</NavLink>
            <NavLink to="/about" style={({ isActive }) => ({ textDecoration: isActive ? 'underline' : 'none', color: 'inherit' })}>About</NavLink>
            <NavLink to="/signup" style={({ isActive }) => ({ textDecoration: isActive ? 'underline' : 'none', color: 'inherit' })}>Sign Up</NavLink>
          </Box>

          {/* Search and icons */}
          <Box sx={{ display: 'flex', gap: 2, alignItems: 'center', width: { xs: '60%', sm: 'auto' } }}>
            <Search sx={{ display: { xs: 'none', sm: 'block' } }}>
              <SearchIconWrapper>
                <SearchIcon style={{ color: 'black', zIndex: 1 }} />
              </SearchIconWrapper>
              <StyledInputBase placeholder="What are you looking for?" inputProps={{ 'aria-label': 'search' }} />
            </Search>
            <NavLink to="/wishlist" style={({ isActive }) => ({ color: isActive ? 'red' : 'black' })}>
              <FavoriteBorderIcon />
            </NavLink>
            <NavLink to="/cart" style={({ isActive }) => ({ color: isActive ? 'green' : 'black' })}>
              <ShoppingCartCheckoutIcon />
            </NavLink>
<Box
  onMouseEnter={handlePopoverOpen}
  onMouseLeave={handlePopoverClose}
  sx={{ display: 'inline-block' }}
>
  <NavLink to="/account">
    <AccountCircleIcon className="text-color" />
  </NavLink>
</Box>

              <Popover
        id="mouse-over-popover"
        sx={{ pointerEvents: 'none' }}
        open={open}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        onClose={handlePopoverClose}
        disableRestoreFocus
        
      >
        <NavLink to={'/account'} style={{textDecoration:'none', color:'black', paddingInline:'1rem'}}>My Account</NavLink>
        <Divider/>
        <NavLink to={'/logout'} style={{textDecoration:'none', color:'black', paddingInline:'1rem'}}>Logout</NavLink>
      </Popover>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Drawer for small screens */}
      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
        <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
          <List>
            <ListItem disablePadding>
              <ListItemButton component={NavLink} to="/">
                <ListItemText primary="Home" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton component={NavLink} to="/contact">
                <ListItemText primary="Contact" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton component={NavLink} to="/about">
                <ListItemText primary="About" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton component={NavLink} to="/signup">
                <ListItemText primary="Sign Up" />
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </Box>
  );
}
