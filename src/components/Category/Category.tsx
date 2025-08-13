import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import './Category.css';

export default function Category({ icon: Icon, name }) {
  return (
    <Card sx={{ margin: '1rem', textAlign: 'center' }} className="category-card">
      <CardContent>
        <Icon />
        <Typography sx={{ my: 1.5, fontWeight: 'bold' }}>{name}</Typography>
      </CardContent>
    </Card>
  );
}
