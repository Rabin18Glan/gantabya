import { useMediaQuery } from "@mui/material";



export default function useBreakPointDetector(){

const isXs = useMediaQuery('(max-width:599px)'); // Extra small screens
const isSm = useMediaQuery('(min-width:600px)'); // Small screens
const isMd = useMediaQuery('(min-width:768px)'); // Medium screens
const isLg = useMediaQuery('(min-width:1024px)'); // Large screens
const isXl = useMediaQuery('(min-width:1280px)'); // Extra large screens


return {isXs,isMd,isSm,isLg,isXl}
}

