import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import './Category.css'

export default function Category(){
  return (
    <Card sx={{ margin:'2rem', textAlign:'center'}} className='category-card'>
      <CardContent>
<PhoneIphoneIcon fontSize="large"/>
        <Typography sx={{ my: 1.5 , fontWeight:'bold'}}>adjective</Typography>
      </CardContent>
    </Card>
  );
}
