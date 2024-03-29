import React ,{ useState }from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';

import CardMedia from '@material-ui/core/CardMedia';

import { grey } from '@material-ui/core/colors';


import style from './css/hover.module.css'



import SimpleModal from './imagemodal';

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
  margin1:{
    padding:1,
  },


  root1: {
    width: '100%',
   
    textAlign: 'center',

    borderLeft: 2,
    borderLeftColor: grey,
  },

  root2: {
   width:200,
    height: '100%',
    textAlign: 'left',
    padding : '10px 0 0 20px',
  },


  root3: {
    maxWidth: 200,
    height: 150,
    textAlign: 'center',


    borderLeft: 2,
    borderLeftColor: grey,
  },


  media: {
    height: 500,
    width:'100vw',
    [theme.breakpoints.up('sm')]: {
      width:'100vw',
      heigth:550,
    },
  },

  media2: {
    height: 90,
   
    [theme.breakpoints.up('sm')]: {
      height: 110,
     
    },
  },

  media3: {
    height: 90,
   
   
    [theme.breakpoints.up('sm')]: {
      height: 110,
     
      
    },
   
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
  im1:{
    
  },

  buttonroot: {
    
    color:'green'
  },
  mystyle2 :{
    fontSize:'25px',
  },
  grid1:{
    marginTop:'1%',
    width:'100vw',
   
  }

}));

const videoo="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4";


export default function Mobileimages({post}) {
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
  className="zoomtemp"
>

<SimpleModal open={open} change={changeopen} photo={photos.a}/>

<Grid>

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




<Grid
  container
  direction="row"
  justify="center"
 
>
    
<Grid item xs={2}  className={classes.margin1}>
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


<Grid item xs={2}  className={classes.margin1}>
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
<Grid item xs={2}  className={classes.margin1}>
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

<Grid item xs={2} className={classes.margin1}>
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



<Grid item xs={2} className={classes.margin1}>
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


<Grid item xs={2} className={classes.margin1}>
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

