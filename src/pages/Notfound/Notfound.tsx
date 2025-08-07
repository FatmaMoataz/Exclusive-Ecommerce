import React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Button from '@mui/material/Button';
import { NavLink } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import type { MouseEvent } from 'react';

function handleClick(event: MouseEvent<HTMLDivElement>) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

const Notfound: React.FC = () => {
  return (
    <div
      role="presentation"
      onClick={handleClick}
      style={{ display: 'flex', justifyContent: 'center', margin: '5rem' }}
    >
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
        <NavLink to="/notfound" style={{ color: 'black', textDecoration: 'none' }}>
          404 Error
        </NavLink>
      </Breadcrumbs>

      <div style={{ textAlign: 'center' }}>
        <Typography
          variant="h1"
          noWrap
          sx={{ fontWeight: 'bold', marginTop: '2rem' }}
        >
          404 Not Found
        </Typography>

        <Typography noWrap sx={{ fontWeight: 'light', marginBlock: '1rem' }}>
          Your visited page not found. You may go home page.
        </Typography>

        <Button variant="contained" sx={{ backgroundColor: '#DB4444' }}>
          Back to home page
        </Button>
      </div>
    </div>
  );
};

export default Notfound;
