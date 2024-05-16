import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { KeyboardDoubleArrowDownRounded, KeyboardDoubleArrowUpRounded } from '@mui/icons-material';
import { Fab, IconButton } from '@mui/material';

export default function PostDetails() {
  const [value, setValue] = React.useState('1');
  const [expand,setexpand] = React.useState(false);
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', typography: 'body1',backgroundColor:'#062104' }}>
      <TabContext   value={value}>
        <Box >
          <TabList  onChange={handleChange} aria-label="lab API tabs example">
            <Tab  sx={{fontSize:10}}  label="About" value="1" />
            
            <Tab  sx={{fontSize:10  }} label="Location" value="2" />
            <Tab  sx={{fontSize:10  }} label="Route" value="3" />
          </TabList>
        </Box>
        <TabPanel  value="1">About</TabPanel>
        <TabPanel value="2">
        <iframe className='rounded-lg'  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d33606.03245141824!2d84.97387145243835!3d27.43336391470977!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb4bc6ac85ca79%3A0x1a42b9a33d4220d1!2sHotel%20Smarak!5e1!3m2!1sen!2snp!4v1715854458613!5m2!1sen!2snp" width={'100%'} height={expand?'600':'100'} style={{border:'0' }}  loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe></TabPanel>
        <TabPanel value="3">Route</TabPanel>
      </TabContext>
      <Fab  sx={{ backgroundColor:'transparent',height:'50px',width:'50px' ,position:'relative',top:'0px'}} onClick={()=>setexpand(!expand)}>{expand?<KeyboardDoubleArrowUpRounded sx={{ fontSize:20 }} color='primary'/>:<KeyboardDoubleArrowDownRounded sx={{ fontSize:20 }} color='primary'/>}</Fab>
    </Box>
  );
}