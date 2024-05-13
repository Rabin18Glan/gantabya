import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import PhoneIcon from '@mui/icons-material/Phone';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import { HomeMaxRounded, SlowMotionVideoRounded, TourRounded, TravelExploreRounded, VideoFileRounded } from '@mui/icons-material';
import { Tooltip } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function Navigations() {
  const [page, setPage] = React.useState(0);
  const navigate = useNavigate()

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setPage(newValue)
    switch(newValue)
    {
        case 0:
          {  navigate('/home');
            break;}

        case 1:{navigate('/explore'); break}

        case 2:{navigate('/vibes')
                  break
        }
        case 3:{navigate('/visited');break}
    }
  };

  return (
    <Tabs sx={{ justifySelf:'center' }} value={page} onChange={handleChange} aria-label="icon tabs example">
    
<Tooltip title="home" enterDelay={500} leaveDelay={200} > 
     <Tab icon={<HomeMaxRounded />}  aria-label="home" />
     </Tooltip>

     <Tooltip title="explore" enterDelay={500} leaveDelay={200} >
     <Tab icon={<TravelExploreRounded/>} aria-label="explore" />
     </Tooltip>

     <Tooltip title="watch" enterDelay={500} leaveDelay={200} >
     <Tab icon={<SlowMotionVideoRounded />} aria-label="watch" />
     </Tooltip>

     <Tooltip title="visited" enterDelay={500} leaveDelay={200} >
     
     <Tab icon={<TourRounded />} aria-label="visited" />
     </Tooltip>


    </Tabs>
  );
}