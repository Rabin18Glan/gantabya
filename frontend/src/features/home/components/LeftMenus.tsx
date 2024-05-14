import { PunchClockRounded } from '@mui/icons-material';
import Dns from '@mui/icons-material/Dns';
import PermMedia from '@mui/icons-material/PermMedia';
import Public from '@mui/icons-material/Public';
import { Grid, List } from '@mui/material';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

const data = [
  { icon: <PunchClockRounded sx={{ fontSize:'27px' }} />, label: 'Memories' },
  { icon: <Dns sx={{ fontSize:'27px' }}/>, label: 'Database' },
  { icon: <PermMedia sx={{ fontSize:'27px' }}/>, label: 'Storage' },
  { icon: <Public sx={{ fontSize:'27px' }}/>, label: 'Hosting' },
];


export default function CustomizedList() {

  return (
    <Grid item xs sx={{ backgroundColor: 'background.default',height:'91vh',}}>

<List sx={{ display:'flex',flexDirection:'column' }}>
{data.map((item) => (
        <ListItemButton
        
          key={item.label}
          sx={{  minHeight: 32, color: 'text.primary',padding:'10px', py:'20px'  }}
        >
          <ListItemIcon sx={{ color: 'default' }}>
            {item.icon}
          </ListItemIcon>
          <ListItemText
            primary={item.label}
            primaryTypographyProps={{ fontSize: 14, fontWeight: 'medium' }}
          />
        </ListItemButton>
      ))}



</List>

    </Grid>
  );
}