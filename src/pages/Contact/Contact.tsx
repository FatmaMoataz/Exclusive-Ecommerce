import Breadcrumbs from '@mui/material/Breadcrumbs';
import Button from '@mui/material/Button';
import { NavLink } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import { Box, Divider } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import TextField from '@mui/material/TextField';

export default function Contact() {
  return (
    <Box sx={{ margin: 3 }}>
      <Breadcrumbs
        aria-label="breadcrumb"
        sx={{
          display: { sm: 'none', md: 'flex' },
          flexWrap: 'nowrap',
          alignItems: 'flex-start',
          marginBottom: 3
        }}
      >
        <NavLink to="/" style={{ color: 'gray', textDecoration: 'none' }}>
          Home
        </NavLink>
        <NavLink to="/contact" style={{ color: 'black', textDecoration: 'none' }}>
          Contact
        </NavLink>
      </Breadcrumbs>

      <Box sx={{ display: 'flex', alignItems: 'start',justifyContent:'center', flexDirection: { xs: 'column', md: 'row' }, gap: 3 }}>
        {/* left */}
        <Box sx={{ padding: 2, boxShadow: 3, borderRadius: 1 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, marginBottom: 2 }}>
            <PhoneIcon sx={{ color: 'white', backgroundColor: '#DB4444', borderRadius: 5, padding: 1 }} />
            <Typography variant="h6">Call To Us</Typography>
          </Box>
          <Typography sx={{ marginBottom: 2 }}>We are available 24/7, 7 days a week.</Typography>
          <Typography>Phone: +8801611112222</Typography>
          <Divider variant="middle" sx={{ marginBlock: 2 }} />
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, marginBottom: 2 }}>
            <EmailIcon sx={{ color: 'white', backgroundColor: '#DB4444', borderRadius: 5, padding: 1 }} />
            <Typography variant="h6">Write To Us</Typography>
          </Box>
          <Typography sx={{ marginBottom: 2 }}>Fill out our form and we will contact you within 24 hours.</Typography>
          <Typography sx={{ marginBottom: 2 }}>Emails: customer@exclusive.com</Typography>
          <Typography sx={{ marginBottom: 2 }}>Emails: support@exclusive.com</Typography>
        </Box>

        {/* right */}
        <Box sx={{ display: 'flex' ,flexDirection: 'column', gap: 3, boxShadow: 3, padding:5, borderRadius: 1 }}>
         <Box sx={{display:'flex',gap:2}}>
          <TextField label="Your Name" variant="outlined" required />
          <TextField label="Your Email" variant="outlined" required />
          <TextField label="Your Phone" variant="outlined" required />
         </Box>
          <TextField label="Your Message" variant="outlined" fullWidth multiline rows={4} />
          <Button variant="contained" sx={{ backgroundColor: '#DB4444',marginLeft:'auto' }}>Send Message</Button>
        </Box>
      </Box>
    </Box>
  );
}
