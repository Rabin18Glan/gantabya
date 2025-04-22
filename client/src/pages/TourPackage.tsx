import { PageWrapper } from '@/layouts'
import SectionWrapper from '@/layouts/wrappers/SectionWrapper'
import React from 'react'

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Local from '@/features/tourPackage/components/Local'
import LongTrip from '@/features/tourPackage/components/LongTrip'



function TourPackage() {
  return (
    <PageWrapper>
        <SectionWrapper>
     
     <Tabs defaultValue="local" >
   <TabsList>
   <TabsTrigger className='active:bg-accent' value="all">All</TabsTrigger>
     <TabsTrigger className='active:bg-accent' value="local">Local</TabsTrigger>
     <TabsTrigger className='focus:bg-accent' value="long-trip ">Long Trip</TabsTrigger>
   </TabsList>
   <TabsContent value="all">
    <Local />
     </TabsContent>
   <TabsContent value="local">
    <Local />
     </TabsContent>
   <TabsContent value="long-trip"><LongTrip /></TabsContent>
 </Tabs>
 
       
     </SectionWrapper>
    </PageWrapper>
  )
}

export default TourPackage