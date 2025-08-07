import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export default function StaticHeader() {
  return (
    <Box sx={{ backgroundColor: 'black', color: 'white', textAlign: 'center', paddingBlock: '5px' }}>
      Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
      <Typography
        noWrap
        sx={{ fontWeight: 'bold', textDecoration: 'underline', display: 'inline', marginLeft: '1rem' }}
      >
        ShopNow
      </Typography>
    </Box>
  );
}
