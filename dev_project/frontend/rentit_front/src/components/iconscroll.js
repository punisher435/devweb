import React from 'react';
import ScrollMenu from 'react-horizontal-scrolling-menu';
import { makeStyles} from '@material-ui/core/styles';
import './css/App.css';


import MeetingRoomOutlinedIcon from '@material-ui/icons/MeetingRoomOutlined';
import AcUnitIcon from '@material-ui/icons/AcUnit';
import WifiOffIcon from '@material-ui/icons/WifiOff';
import WifiIcon from '@material-ui/icons/Wifi';

import TvOutlinedIcon from '@material-ui/icons/TvOutlined';
import TvOffOutlinedIcon from '@material-ui/icons/TvOffOutlined';
import { IoWaterOutline } from 'react-icons/io5';
import HotTubIcon from '@material-ui/icons/HotTub';
import ToysIcon from '@material-ui/icons/Toys';
import LocalLaundryServiceIcon from '@material-ui/icons/LocalLaundryService';

import { BiFoodMenu } from "react-icons/bi"
import FastfoodIcon from '@material-ui/icons/Fastfood';
import FreeBreakfastIcon from '@material-ui/icons/FreeBreakfast';
import { BiCctv } from "react-icons/bi";
import { GiGuards } from "react-icons/gi";
import AccessibilityIcon from '@material-ui/icons/Accessibility';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import BathtubIcon from '@material-ui/icons/Bathtub';

import { IconContext } from "react-icons";

import KitchenIcon from '@material-ui/icons/Kitchen';
import Grid from '@material-ui/core/Grid';
import Icon from '@material-ui/core/Icon'


const useStyles = makeStyles((theme) => ({
  scrollclass:{
    
  },
}));



function Scrollroom({post}) {

  const classes = useStyles();

  const mystyle = {
    fontSize:'13px',
  }

    const MenuItem = ({post}) => {
        return (
          <div>
            <IconContext.Provider value={{ size: "1.5em",}}>
            <Grid
  container
  direction="row"
  justify="flex-start"
  alignItems="center"
  spacing = {1}
      >
{ 
post.wifi ? <Grid item md={1}><div><Icon fontSize='small'><WifiIcon /></Icon><p style={mystyle}>Wifi Facility</p></div></Grid> : <Grid item md={1}><div><WifiOffIcon /><p>no Wifi</p></div></Grid>
}

{ 
post.room_TV ?  <Grid item md={1}><div><Icon fontSize='small'><TvOutlinedIcon /></Icon><p>Room TV</p></div> </Grid> : <p></p>
}
{ 
post.house_TV ? <Grid item md={1}><div><Icon fontSize='small'><TvOutlinedIcon /></Icon><p>House TV</p></div></Grid> : <div><TvOffOutlinedIcon /><p>No TV</p></div>
}
{ 
post.room_refridgerator ?  <Grid item md={1}><div><Icon fontSize='small'><KitchenIcon /></Icon><p>Room refridgerator</p></div> </Grid> : <p></p>
}
{ 
post.house_refridgerator ? <Grid item md={1}><div><Icon fontSize='small'><KitchenIcon /></Icon><p>House refridgerator</p></div></Grid> : <div><TvOffOutlinedIcon /><p>No TV</p></div>
}
{ 
post.balcony ? <Grid item md={1}><div><Icon fontSize='small'><MeetingRoomOutlinedIcon /></Icon><p>Balcony</p></div></Grid> : <></>
}
{ 
post.separate_washroom ? <Grid item md={1}><div><Icon fontSize='small'><BathtubIcon /></Icon><p>Separate washroom</p></div></Grid> : <></>
}
{ 
post.purified_water ? <Grid item md={1}><div><IoWaterOutline /><p>Pure Water</p></div></Grid> : <></>
}
{ 
post.geyser ? <Grid item md={1}><div><HotTubIcon /><p>  Hot Water</p></div></Grid> : <></>
}
{ 
post.AC ? <Grid item md={1}><div><AcUnitIcon /><p>AC</p></div></Grid> : <></>
}
{ 
post.cooler ? <Grid item md={1}><div><ToysIcon /><p>Cooler</p></div></Grid> : <></>
}
{ 
post.laundry ? <Grid item md={1}><div><LocalLaundryServiceIcon /><p>Laundry</p></div></Grid> : <></>
}
{ 
post.iron ? <Grid item md={1}><div><WhatshotIcon /><p>Iron</p></div></Grid> : <></>
}
{ 
post.guest_allowed ? <Grid item md={1}><div><AccessibilityIcon /><p>Guest Allowed</p></div></Grid> : <></>
}
{ 
post.breakfast ? <Grid item md={1}><div><FreeBreakfastIcon /><p>Breakfast</p></div></Grid> : <></>
}
{ 
post.lunch ? <Grid item md={1}><div><FastfoodIcon /><p>lunch</p></div></Grid> : <></>
}
{ 
post.dinner ? <Grid item md={1}><div><BiFoodMenu /><p>dinner</p></div></Grid> : <></>
}
{ 
post.cctv_building ? <Grid item md={1}><div><BiCctv /><p>CCTV</p></div></Grid> : <></>
}
{ 
post.building_guard ? <Grid item md={1}><div><GiGuards /><p>Sequrity guard</p></div></Grid> : <></>
}
</Grid>
</IconContext.Provider>
        </div>
        );
      };
      
      // All items component
      // Important! add unique key

      const Menu = (posts) =>
        
        posts.map(post => {
          
          return <MenuItem post={post} key="hy"/>;
        })


    
        
        

    const Arrow = ({ text, className }) => {
        return (
          <div
            className={className}
          >{text}</div>
        );
      };

    const ArrowLeft = Arrow({ text: '<', className: 'arrow-prev' });
    const ArrowRight = Arrow({ text: '>', className: 'arrow-next' });
    const [try1,set1] = React.useState(false)
    
    const [menuItems,setitems] = React.useState()

    React.useEffect(() => {
      setitems(Menu([post]))
     
      
      
    },[post])
     
   
    
    if(post && menuItems){


      const menu = menuItems;
   
      
     
      
      
    return (
        <div className="App">
        <ScrollMenu
          data={menu}
          
          className={classes.scrollclass}
          wheel={false}
          alignCenter={false}
         
          
          
        />
      </div>
    )}
    else{
      return <></>;
    }
}

export default Scrollroom
