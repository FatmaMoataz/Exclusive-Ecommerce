import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import footer from '../../assets/images/footer.png';

export default function Footer() {
  return (
    <Box
      sx={{
        display: 'flex',
        backgroundColor: 'black',
        justifyContent: 'center',
        alignItems: 'flex-start',
        flexWrap: 'wrap',
        color: 'white',
        padding: '1rem',
        gap: '2rem',
      }}
    >
      {/* 1st col */}
      <Box>
        <Typography variant="h5" noWrap sx={{ fontWeight: 'bold', mb: '10px' }}>
          Exclusive
        </Typography>
        <Typography variant="h6" noWrap sx={{ fontWeight: 'bold', mb: '10px' }}>
          Subscribe
        </Typography>
        <Typography noWrap sx={{ mb: '10px' }}>
          Get 10% off your first order
        </Typography>
        <Box sx={{ position: 'relative' }}>
          <InputBase
            placeholder="Enter your email"
            inputProps={{ 'aria-label': 'email' }}
            sx={{
              mt: '10px',
              border: '1px solid',
              borderRadius: '4px',
              paddingBlock: '5px',
              paddingLeft: '10px',
              color: '#FAFAFA',
              borderColor: 'white',
            }}
          />
          <ArrowForwardIosIcon
            sx={{
              position: 'absolute',
              right: '0',
              left: '100px',
              bottom: '10px',
              translate: '50px',
            }}
          />
        </Box>
      </Box>

      {/* 2nd col */}
      <Box>
        <Typography variant="h6" noWrap sx={{ fontWeight: 'bold', mb: '10px' }}>
          Support
        </Typography>
        <Typography noWrap sx={{ mb: '10px' }}>
          111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.
        </Typography>
        <Typography noWrap sx={{ mb: '10px' }}>
          exclusive@gmail.com
        </Typography>
        <Typography noWrap sx={{ mb: '10px' }}>
          +88015-88888-9999
        </Typography>
      </Box>

      {/* 3rd col */}
      <Box>
        <Typography variant="h6" noWrap sx={{ fontWeight: 'bold', mb: '10px' }}>
          Account
        </Typography>
        <Typography noWrap sx={{ mb: '10px' }}>
          My Account
        </Typography>
        <Typography noWrap sx={{ mb: '10px' }}>
          Login / Register
        </Typography>
        <Typography noWrap sx={{ mb: '10px' }}>
          Cart
        </Typography>
        <Typography noWrap sx={{ mb: '10px' }}>
          Wishlist
        </Typography>
        <Typography noWrap sx={{ mb: '10px' }}>
          Shop
        </Typography>
      </Box>

      {/* 4th col */}
      <Box>
        <Typography variant="h6" noWrap sx={{ fontWeight: 'bold', mb: '10px' }}>
          Quick Link
        </Typography>
        <Typography noWrap sx={{ mb: '10px' }}>
          Privacy Policy
        </Typography>
        <Typography noWrap sx={{ mb: '10px' }}>
          Terms Of Use
        </Typography>
        <Typography noWrap sx={{ mb: '10px' }}>
          FAQ
        </Typography>
        <Typography noWrap sx={{ mb: '10px' }}>
          Contact
        </Typography>
      </Box>

      {/* 5th col */}
      <Box>
        <Typography variant="h6" noWrap sx={{ fontWeight: 'bold', mb: '10px' }}>
          Download App
        </Typography>
        <Typography noWrap sx={{ mb: '5px', color: 'gray' }}>
          Save $3 with App New User Only
        </Typography>
        <img src={footer} alt="download the app" />
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
          <FacebookRoundedIcon />
          <InstagramIcon />
          <LinkedInIcon />
        </Box>
      </Box>
    </Box>
  );
}
