export default Header
import MenuIcon from '@mui/icons-material/Menu';
import AppBar from '@mui/material/AppBar';
import Badge from '@mui/material/Badge';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { ProfileMenu } from './Menu';
import { Search } from './Search';
import { Avatar } from '@mui/material';
import ModeSwitch from './ModeSwitch';
import { useAppSelector } from '../../store/hooks';



function Header() {
  const mode = useAppSelector(state=>state.mode.mode)


  return (
    <>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar  position="static" sx={{ backgroundColor:'background.default' }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: 'none', sm: 'block' } }}
          >
         <Avatar > <img src='logo.jpeg'/></Avatar>
          </Typography>
          <Search />
    
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <IconButton size="large" aria-label="show 4 new mails" color="inherit">
              <Badge badgeContent={4} color="error">
                <MailIcon />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            >
              <Badge badgeContent={17} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <ProfileMenu />
           
          </Box>
         
        </Toolbar>
      </AppBar>
    <ModeSwitch />
     
    </Box>
  
   </>
  );
}