import React ,{ useState }from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import Icon from '@material-ui/core/Icon'
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import MeetingRoomOutlinedIcon from '@material-ui/icons/MeetingRoomOutlined';
import AcUnitIcon from '@material-ui/icons/AcUnit';
import WifiOffIcon from '@material-ui/icons/WifiOff';
import WifiIcon from '@material-ui/icons/Wifi';
import RoomIcon from '@material-ui/icons/Room';
import TvOutlinedIcon from '@material-ui/icons/TvOutlined';
import TvOffOutlinedIcon from '@material-ui/icons/TvOffOutlined';
import { IoWaterOutline } from 'react-icons/io5';
import HotTubIcon from '@material-ui/icons/HotTub';
import ToysIcon from '@material-ui/icons/Toys';
import LocalLaundryServiceIcon from '@material-ui/icons/LocalLaundryService';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { BiFoodMenu } from "react-icons/bi"
import FastfoodIcon from '@material-ui/icons/Fastfood';
import FreeBreakfastIcon from '@material-ui/icons/FreeBreakfast';
import { BiCctv } from "react-icons/bi";
import { GiGuards } from "react-icons/gi";
import AccessibilityIcon from '@material-ui/icons/Accessibility';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import BathtubIcon from '@material-ui/icons/Bathtub';
import { grey } from '@material-ui/core/colors';
import { IconContext } from "react-icons";

import style from './css/hover.module.css'

import CustomizedRatings from './rating_meter';

import SimpleModal from './imagemodal';
import './css/new.css';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    
  },
  paper: {
    padding: theme.spacing(1),
    height: 400,
    textAlign: 'center',
    alignItems: 'center',
    color: theme.palette.text.secondary, 
  },


  root1: {
    maxWidth: '100%',
    height: '100%',
    textAlign: 'center',

    borderLeft: 2,
    borderLeftColor: grey,
  },

  media: {
    height: 400,
  },

  media2: {
    height: 100,
  },
  media3: {
    height: 100,
   
   
  },


  root2: {
   width:150,
    height: '100%',
    textAlign: 'left',
    padding : '10px 0 0 20px',
  },


  root3: {
    maxWidth: 150,
    height: 150,
    textAlign: 'center',


    borderLeft: 2,
    borderLeftColor: grey,
  },


 
  textroot: {
    marginLeft:'2px',
    fontWeight:'bold',
    fontSize:'25px',
    display: 'inline',
  },
  textroot1: {
    marginLeft:'2px',
    fontWeight:'1rem',
    fontSize:'18px',
    display: 'inline',
    marginLeft:'10px',
    color:'#877f7f'
  },
  textroot2: {
    fontWeight:'bold',
    fontSize:'20px',
    display: 'inline',
    marginLeft:'10px',
    color:'#dea300'
  },

  textroot4: {
    fontWeight:'bold',
    fontSize:'22px',
    display: 'inline',
    marginLeft:'6px',
    marginBottom:'10px',
    color:'#dea300'
  },
  textroot5: {
    color:'#f44336',
    fontSize:'16px',
    
    marginTop:'5px',
  },
  iconroot: {
    display: 'inline',
  },

  buttonroot: {
    
    color:'green'
  },
  mystyle2 :{
    fontSize:'25px',
  },

}));

const videoo="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4";


export default function NestedGrid({post}) {
  const classes = useStyles();

  function MediaCard() {
    const [photos,changephotos] = useState({
      d:"https://www.thespruce.com/thmb/0mCrVrlgAOLHm03zxtJxMd8RIwQ=/2048x1365/filters:fill(auto,1)/put-together-a-perfect-guest-room-1976987-hero-223e3e8f697e4b13b62ad4fe898d492d.jpg",
      e:"https://images.unsplash.com/photo-1567767292278-a4f21aa2d36e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8bGl2aW5nJTIwcm9vbXxlbnwwfHwwfHw%3D&w=1000&q=80",
      c:"https://assets.architecturaldigest.in/photos/60084dd6cce5700439e12bf7/16:9/w_2560%2Cc_limit/modern-living-room-decor-1366x768.jpg",
      b:"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/vibrant-rooms-8-1548883440.jpg",
      a:"https://media.designcafe.com/wp-content/uploads/2021/06/21172006/girls-study-room-design-ideas.jpg",
      f:"https://miro.medium.com/max/1000/1*hWsO4b8NUBfDp_BGUq_VvQ.jpeg",
      g:"http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    })
    const [open,changeopen] = useState(false)
  
    return (
      <Grid
  container
  direction="col"
  justify="center"
  alignItems="center"
  spacing = {1}
  className="zoomtemp1"
>

<SimpleModal open={open} change={changeopen} photo={photos.a}/>

<Grid item xs={12}>

{
  photos.a===videoo ? <Card className={classes.root1}>
  <CardActionArea>
    <CardMedia
      component="video"
      controls
      autoPlay
      className={`${classes.media}`}
      src={photos.a}
      title="Contemplative Reptile"
    
    />
  </CardActionArea>
</Card> : <Card className={classes.root1}>
        <CardActionArea>
          <CardMedia
            className={`${classes.media} ${style.pcimg1}`}
            image={photos.a}
            title="Contemplative Reptile"
            onClick={() => {changeopen(true);}}
          />
        </CardActionArea>
    </Card>
}


</Grid>



<Grid item xs={12}>
<Grid
  container
  direction="col"
  justify="center"
  spacing = {1}
>
    
<Grid item xs={2}>
{
  photos.b===videoo ? <Card>
  <CardActionArea>
    <CardMedia
      className={`${classes.media3}`}
      component="video"
      autoPlay
      src={photos.b}
      title="Contemplative Reptile"
      onClick={
        () => {
          const temp=photos.a;
          changephotos({
            ...photos,
            a:photos.b,
            b:temp,
          })
        }
      }
    />
  </CardActionArea>
</Card> : <Card>
        <CardActionArea>
          <CardMedia
            className={`${classes.media2} ${style.pcimg2}`}
           
          
            image={photos.b}
            title="Contemplative Reptile"
            onClick={
              () => {
                const temp=photos.a;
                changephotos({
                  ...photos,
                  a:photos.b,
                  b:temp,
                })
              }
            }
          />
        </CardActionArea>
      </Card>
}
</Grid>


<Grid item xs={2}>
{
  photos.c===videoo ? <Card>
  <CardActionArea>
    <CardMedia
      className={`${classes.media3}`}
      component="video"
      autoPlay
      src={photos.c}
      title="Contemplative Reptile"
      onClick={
        () => {
          const temp=photos.a;
          changephotos({
            ...photos,
            a:photos.c,
            c:temp,
          })
        }
      }
    />
  </CardActionArea>
</Card> : <Card>
        <CardActionArea>
          <CardMedia
            className={`${classes.media2} ${style.pcimg2}`}
           
          
            image={photos.c}
            title="Contemplative Reptile"
            onClick={
              () => {
                const temp=photos.a;
                changephotos({
                  ...photos,
                  a:photos.c,
                  c:temp,
                })
              }
            }
          />
        </CardActionArea>
      </Card>
}
</Grid>
<Grid item xs={2}>
{
  photos.d===videoo ? <Card>
  <CardActionArea>
    <CardMedia
      className={`${classes.media3}`}
      component="video"
      autoPlay
      src={photos.d}
      title="Contemplative Reptile"
      onClick={
        () => {
          const temp=photos.a;
          changephotos({
            ...photos,
            a:photos.d,
            d:temp,
          })
        }
      }
    />
  </CardActionArea>
</Card> : <Card>
        <CardActionArea>
          <CardMedia
            className={`${classes.media2} ${style.pcimg2}`}
           
          
            image={photos.d}
            title="Contemplative Reptile"
            onClick={
              () => {
                const temp=photos.a;
                changephotos({
                  ...photos,
                  a:photos.d,
                  d:temp,
                })
              }
            }
          />
        </CardActionArea>
      </Card>
}
</Grid>
<Grid item xs={2}>
{
  photos.e===videoo ? <Card>
  <CardActionArea>
    <CardMedia
      className={`${classes.media3}`}
      component="video"
      autoPlay
      src={photos.e}
      title="Contemplative Reptile"
      onClick={
        () => {
          const temp=photos.a;
          changephotos({
            ...photos,
            a:photos.e,
            e:temp,
          })
        }
      }
    />
  </CardActionArea>
</Card> : <Card>
        <CardActionArea>
          <CardMedia
            className={`${classes.media2} ${style.pcimg2}`}
           
          
            image={photos.e}
            title="Contemplative Reptile"
            onClick={
              () => {
                const temp=photos.a;
                changephotos({
                  ...photos,
                  a:photos.e,
                  e:temp,
                })
              }
            }
          />
        </CardActionArea>
      </Card>
}
</Grid>



<Grid item xs={2}>
{
  photos.f===videoo ? <Card>
  <CardActionArea>
    <CardMedia
      className={`${classes.media3}`}
      component="video"
      autoPlay
      src={photos.f}
      title="Contemplative Reptile"
      onClick={
        () => {
          const temp=photos.a;
          changephotos({
            ...photos,
            a:photos.f,
            f:temp,
          })
        }
      }
    />
  </CardActionArea>
</Card> : <Card>
        <CardActionArea>
          <CardMedia
            className={`${classes.media2} ${style.pcimg2}`}
           
          
            image={photos.f}
            title="Contemplative Reptile"
            onClick={
              () => {
                const temp=photos.a;
                changephotos({
                  ...photos,
                  a:photos.f,
                  f:temp,
                })
              }
            }
          />
        </CardActionArea>
      </Card>
}
</Grid>


<Grid item xs={2}>
{
  photos.g===videoo ? <Card>
  <CardActionArea>
    <CardMedia
      className={`${classes.media3}`}
      component="video"
      autoPlay
      src={photos.g}
      title="Contemplative Reptile"
      onClick={
        () => {
          const temp=photos.a;
          changephotos({
            ...photos,
            a:photos.g,
            g:temp,
          })
        }
      }
    />
  </CardActionArea>
</Card> : <Card>
        <CardActionArea>
          <CardMedia
            className={`${classes.media2} ${style.pcimg2}`}
           
          
            image={photos.g}
            title="Contemplative Reptile"
            onClick={
              () => {
                const temp=photos.a;
                changephotos({
                  ...photos,
                  a:photos.g,
                  g:temp,
                })
              }
            }
          />
        </CardActionArea>
      </Card>
}
</Grid>


</Grid>

</Grid>
</Grid>

    );
  }

  function NameCard(){
    const mystyle = {
      fontSize:'13px',
    }
    
    const mystyle3 = {
      display: 'inline',
    }
    
    const y=post.owner_discount+post.company_discount;
    return (
      <Card className={classes.root2} raised={true}>
        <Grid
        container
        direction="row"
        justify="flex-start"
        alignItems="flex-start"
        >
        <Grid item md={10}>
        <Typography variant="h4" component="h3" className={classes.mystyle2}>
          {post.title}
        </Typography>
        </Grid>
        <Grid item md={1}>
        { 
        post.wishlist ? <Grid item md={1}><Icon color='error' className={classes.iconroot}><FavoriteIcon /></Icon></Grid> : <Grid item md={1}><Icon color='error' className={classes.iconroot}><FavoriteBorderOutlinedIcon /></Icon></Grid>
        }
        </Grid>
        <Grid item md={1}>
        { 
        post.cart ? <Grid item md={1}><Icon className={classes.iconroot}><ShoppingCartIcon /></Icon></Grid> : <Grid item md={1}><Icon className={classes.iconroot}><ShoppingCartOutlinedIcon /></Icon></Grid>
        }
        </Grid>
        </Grid>
        <Typography variant="h4" component="h3" className={classes.textroot4}>
          {post.category}
        </Typography>
        <Typography variant="body1" component="h2">
        <Icon color="error"><RoomIcon /></Icon>
          {post.location},{post.city},{post.state}
        </Typography>
        <Typography variant="body2" component="h2">
            -   near {post.landmark}
        </Typography>
        <CustomizedRatings rating={post.avg_rating}/>
        <Typography variant="body2" component="h6">
            Room of {post.capacity} people
        </Typography>
        <div style={mystyle}>
        <Grid
        container
        direction="row"
        justify="flex-start"
        alignItems="flex-start"
        >
        <IconContext.Provider value={{ size: "1.5em",}}>
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
        </IconContext.Provider>
        </Grid>
        <Grid
        container
        direction="row"
        justify="flex-start"
        alignItems="flex-start"
        >
    
        <Grid item md={8}>
          <Typography color='error' variant='h6' className={classes.textroot}>
          {post.currency}{post.final_price}
          </Typography>
          <Typography variant='h6' className={classes.textroot1}>
          <s>{post.currency}{post.final_price}</s>
          </Typography>
          <Typography variant='h6' className={classes.textroot2}>
            {y}% off
          </Typography>
        </Grid>
        <Grid item md={1}>
          { 
          post.booked ? <></> :<p className={classes.textroot5}>Hurry! </p>
        }
        </Grid>
        <Grid item md={3}>
          { 
          post.booked ? <Button variant="outlined" color="secondary">
          Not Avaiable
        </Button> :<Button variant="contained" color="secondary">
            Book Now
        </Button>
        }
        
          
        </Grid> 


        </Grid>
        </div>
        
      </Card>
    );
  }


  function FormRow() {
    return (
      <React.Fragment>
          <Grid container justify="center">
            <Grid item xs={9}>
            <MediaCard/>
            </Grid>
          </Grid>
      </React.Fragment>
    );
  }

  return (
    <div className={classes.root}>
        <Grid container item xs={12}>
          <FormRow />
        </Grid>
        
    </div>
  );
}

