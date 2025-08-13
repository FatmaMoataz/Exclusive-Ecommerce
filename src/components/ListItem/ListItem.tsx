import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Box from '@mui/material/Box';
import DropDownList from './DropDownList/DropDownList';


export default function ListItem () {
  

  return (
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
<DropDownList/>


      <ListItemButton>
        <ListItemText primary="Electronics" />
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
  </Box> 
  )
}

