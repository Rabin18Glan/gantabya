export default Header
import AppBar from '@mui/material/AppBar';
import Badge from '@mui/material/Badge';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';

import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Avatar, useMediaQuery } from '@mui/material';

import { List } from '@mui/icons-material';
import AccountMenu from './Menu';
import ModeSwitch from './ModeSwitch';
import Navigations from './Navigations';
import { Search } from './Search';



function Header() {
  const matches = useMediaQuery('max-width:1000');


  return (
 

      <Box sx={{ flexGrow: 1,width:'100%' }}>
        <AppBar position="static" sx={{ backgroundColor: 'background.bgColor' }}>
          <Toolbar sx={{ display:'flex',alignItems:'center',justifyContent:'space-between'  }}>
            {/* <IconButton
            size="large"
            edge="start"
            color="default"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton> */}

            <Box sx={{ display: 'flex', alignItems: 'center' }}> 
               <Avatar > <img src='logo.jpeg' /></Avatar>
               <Search />

               {matches&&<IconButton><List/></IconButton>}
            </Box>
<Navigations  />

            {/* <Box sx={{ flexGrow: 1 }} /> */}
            <Box sx={{ display: {  md: 'flex' } }}>
              <IconButton size="large" aria-label="show 4 new mails" color="default">
                <Badge badgeContent={4} color="error">
                  <MailIcon />
                </Badge>
              </IconButton>
              <IconButton
                size="large"
                aria-label="show 17 new notifications"
                color="default"
              >
                <Badge badgeContent={17} color="error">
                  <NotificationsIcon />
                </Badge>
              </IconButton>
              <AccountMenu />

            </Box>

          </Toolbar>
        </AppBar>
        <ModeSwitch />

      </Box>


  );
}