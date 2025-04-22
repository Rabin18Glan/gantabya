// import { MyLocation } from '@mui/icons-material';
import Map from '@/components/[feature]/Map/Map';
import MyMap from '@/components/common/other/MyMap';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React from 'react';

type Loc={
  name:string
}
const Travel: React.FC = () => {
return (
<div className='h-screen w-[100vw]'>
<Map />
</div>

)
};

export default Travel;
