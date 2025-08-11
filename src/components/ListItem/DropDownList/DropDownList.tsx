import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import * as React from 'react';


export default function DropDownList () {
  
  const [openWomen, setOpenWomen] = React.useState<boolean>(true);
  const [openMen, setOpenMen] = React.useState<boolean>(false);

  return (
<>
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
 
</>
  )
}

