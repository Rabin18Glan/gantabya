import { IMapStyles } from "@/types/map.type";
import { MapStyle } from "@maptiler/sdk";




export const MAPSTYLES:IMapStyles[] = [
    {
        name:"Default",
        default:"b9cf393b-e1bb-4c6e-8328-d745e1d49cd6",
        image:"/maps/default.png"

    },
    {
        name:"Satellite",
        default:MapStyle.SATELLITE,
        image:"/maps/satellite.png",
      

    },
    {
        name:"Hybrid",
        default:MapStyle.HYBRID,
        image:"/maps/hybrid.png"
    },
    {
        name:"Basic",
        default:MapStyle.BASIC,
        light:MapStyle.BASIC.LIGHT,
        dark:MapStyle.BASIC.DARK,
        image:"/maps/basic.png"
    },
    
    {
        name:"Toner",
        default:MapStyle.TONER,
        lines:MapStyle.TONER.LINES,
        lite:MapStyle.TONER.LITE,
        background:MapStyle.TONER.BACKGROUND,
        image:"/maps/toner.png"
    },
    {
        name:"Out Door",
        default:MapStyle.OUTDOOR,
        dark:MapStyle.OUTDOOR.DARK,
        image:"/maps/outdoor.png"
    },
    {
        name:"Topo",
        default:MapStyle.TOPO,
        
        image:"/maps/topo.png"
    },
    {
        name:"Open Street",
        default:MapStyle.OPENSTREETMAP,
        image:"/maps/openstreet.png"
    },
    {
        name:"Bright",
        default:MapStyle.BRIGHT,
        light:MapStyle.BRIGHT.LIGHT,
        dark:MapStyle.BRIGHT.DARK,
        pastel:MapStyle.BRIGHT.PASTEL,

        image:"/maps/bright.png"
    },
    {
        name:"Backdrop",
        default:MapStyle.BACKDROP,
        light:MapStyle.BACKDROP.LIGHT,
        dark:MapStyle.BACKDROP.DARK,
        image:"/maps/backdrop.png",
      
    },
   

    {
        name:"DataViz",
        default:MapStyle.DATAVIZ,
     
        light:MapStyle.DATAVIZ.LIGHT,
        dark:MapStyle.DATAVIZ.DARK,
        image:"/maps/dataViz.png"
    },
  
    {
        name:"Ocean",
        default:MapStyle.OCEAN,
        image:"/maps/ocean.png"
    },
   
   
    {
        name:"Streets",
        default:MapStyle.STREETS,
        light:MapStyle.STREETS.LIGHT,
        night:MapStyle.STREETS.NIGHT,
        pastel:MapStyle.STREETS.PASTEL,
        dark:MapStyle.STREETS.DARK,
        
        image:"/maps/street.png"
    },
  
    {
        name:"Voyager",
        default:MapStyle.VOYAGER,
        image:"/maps/voyager.png"
    },
    {
        name:"Winter",
        default:MapStyle.WINTER,
        image:"/maps/winter.png"
    },
]