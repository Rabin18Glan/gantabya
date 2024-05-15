import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

export default function LabTabs() {
  const [value, setValue] = React.useState('1');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext   value={value}>
        <Box >
          <TabList  onChange={handleChange} aria-label="lab API tabs example">
            <Tab  sx={{fontSize:10}}  label="About" value="1" />
            
            <Tab  sx={{fontSize:10  }} label="Location" value="2" />
            <Tab  sx={{fontSize:10  }} label="Route" value="3" />
          </TabList>
        </Box>
        <TabPanel  value="1">About</TabPanel>
        <TabPanel value="2">Location</TabPanel>
        <TabPanel value="3">Route</TabPanel>
      </TabContext>
    </Box>
  );
}