import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import DeliveryDiningRoundedIcon from '@mui/icons-material/DeliveryDiningRounded';
import HeadsetMicRoundedIcon from '@mui/icons-material/HeadsetMicRounded';
import LockClockIcon from '@mui/icons-material/LockClock';


export default function OurService() {
  return (
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
  )
}
