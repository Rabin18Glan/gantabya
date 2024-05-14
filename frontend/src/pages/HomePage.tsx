import { Box, Divider, Grid, } from '@mui/material'
import { useAppSelector } from '../store/hooks'
import { LeftMenus } from '../features/home'
import MainPage from '../features/home/components/MainPage'
import Right from '../features/home/components/Right'

function HomePage() {
  const mode = useAppSelector(state=>state.mode.mode)
  return (
  
<Grid container >
  <LeftMenus />

<MainPage />

<Right />
  
</Grid>
    
  )
}

export default HomePage