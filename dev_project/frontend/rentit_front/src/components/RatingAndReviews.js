import React from 'react';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Rating1 from '../components/Rating';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import Paper from '@material-ui/core/Paper';
import Rating from '@material-ui/lab/Rating';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

import ListItemText from '@material-ui/core/ListItemText';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';

import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';


import IconButton from '@material-ui/core/IconButton';
import SimpleModal from './imagemodal';
import Button from '@material-ui/core/Button';
import Hidden from '@material-ui/core/Hidden';


import RatingBar from '../components/RatingBar'

const useStyles = makeStyles((theme) => ({
  root: {
    height:'150px',
    border: `1px solid ${theme.palette.divider}`,
    borderRadius: theme.shape.borderRadius,
    backgroundColor: theme.palette.background.paper,
    color: theme.palette.text.secondary,
  

  },

  root1: {
    display: 'flex',
    overflow:'hidden',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
   
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
  
    flexWrap: 'nowrap',
    
  
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
    height:'100%'
  },
  title: {
    color: theme.palette.primary.light,
  },
  titleBar: {
    background:
      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
  imageclass: {
    
   
  },
  liststyle: {
    
    
  },
  buttonclass: {
    padding:0,
  },
  paperme:{
    padding:15,
    marginBottom:'5px',
  },
}));


export default function VerticalDividers({no, rating,reviews,params,setparams}) {
  const classes = useStyles();
  const [open,setopen] = React.useState(false)
  const [src,setsrc] = React.useState('')

  const handleclick1 = (e) => {

    e.preventDefault();
    if(params.page>1){
      setparams({...params,page:params.page-1})
    }
   
  }
  const handleclick2 = (e) => {
    e.preventDefault();
    
    setparams({...params,page:params.page+1})
  }

  var a = 0;
  var b =0;
  var c =0;
  var d = 0;
  var e = 0;

  var list1 = []

  reviews.map((review) =>  {
    if(review.rating==1){a=a+1;}
    else if(review.rating==2){b=b+1;}
    else if(review.rating==3){c=c+1;}
    else if(review.rating==4){d=d+1;}
    else if(review.rating==5){e=e+1;}
  })



  reviews.map((review) =>  {
    if(review.photo1)
    {
      list1.push(review.photo1);
    }
    if(review.photo2)
    {
      list1.push(review.photo2);
    }

    if(review.photo3)
    {
      list1.push(review.photo3);
    }

  })

  return (
    <div>
      <Paper className={classes.paperme} elevation={3}>

      <SimpleModal open={open} change={setopen} photo={src}/>

      

      <FormControl className={classes.formControl}>
        <br />
        <InputLabel id="demo-simple-select-label">Sort</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={params.ordering}
          onChange={e => {e.preventDefault(); setparams({...params,ordering:e.target.value});}}
        >
          <MenuItem value={'-timestamp'}>Newest first</MenuItem>
          <MenuItem value={'-rating'}>Highly rated</MenuItem>
          <MenuItem value={'rating'}>Negative first</MenuItem>
          <MenuItem value={'timestamp'}>Oldest first</MenuItem>
        </Select>
        <br />
      </FormControl>
     

      <Grid container
        direction="row"
        justify="space-around"
        alignItems="center"
        className={classes.root}>
        <Grid item>
          <Rating1  no={no} rating={Math.round(rating * 10) / 10}/>
        </Grid>

        <Divider orientation="vertical" />

        <Grid item xs={6} align="center" justify="center">
        
          <RatingBar star={5} value={e}/>
          <RatingBar star={4} value={d}/>
          <RatingBar star={3} value={c}/>
          <RatingBar star={2} value={b}/>
          <RatingBar star={1} value={a}/>

        </Grid>

        </Grid>
        
        
        
      <Hidden xsDown>
      <GridList cellHeight={300} className={classes.gridList} cols={3}>
  {list1.map((tile) => (
    <GridListTile key={tile} cols={3}>
      
      <Button className={classes.buttonclass} onClick={e => {e.preventDefault();setsrc(tile);setopen(true);}}><img src={tile}  /></Button>
    </GridListTile>
  ))}
</GridList>
</Hidden>

<Hidden smUp>
      <GridList cellHeight={200} className={classes.gridList} cols={3}>
  {list1.map((tile) => (
    <GridListTile key={tile} cols={3}>
      
      <Button className={classes.buttonclass} onClick={e => {e.preventDefault();setsrc(tile);setopen(true);}}><img src={tile}  /></Button>
    </GridListTile>
  ))}
</GridList>
</Hidden>
<br />

      <Paper elevation={0} />
      <List component="nav" aria-label="main mailbox folders">
          {
            reviews.map(
              (review) => (
                <>
                <ListItem>
                <Rating
                  name="simple-controlled"
                  value={review.rating}
                  readOnly 
                />
              </ListItem>
                <ListItem>
                  <ListItemText primary={review.reviews} />
                </ListItem>
                <Divider />
                </>
              )
            )
          }
          <ListItem>
          <IconButton onClick={e => handleclick1(e)} >
      <ArrowBackIosIcon />
      </IconButton>
          {params.page}
      <IconButton onClick={e => handleclick2(e)} >
      <ArrowForwardIosIcon />
      </IconButton>
          </ListItem>
        </List>
      

      <Paper />

    

      </Paper>
    </div>
    
  );
}
