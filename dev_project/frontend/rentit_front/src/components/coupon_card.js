import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {Link} from 'react-router-dom'
import './css/App.css';
import Grid from '@material-ui/core/Grid';
import Discount from '../discount_off.png'
import Discount1 from '../discount.png'



const useStyles = makeStyles({
  
  buttonclassnew:{
    color:'white',
  },
  root: {
   
    width: 250,
    marginBottom: 5,
    marginLeft: 20,
    marginRight: 20,
    marginTop: 5,
    boxShadow: '10px 10px 5px grey',
    
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 23,
    color: 'white',
    fontWeight: 'bold',
  },

  title1: {
    fontSize: 12,
    color: 'white',
    fontWeight: 'bold',
  },
  pos: {
    marginBottom: 5,
  },
  coupontext:{
    color: 'white',
    padding: '2px 5px 2px 5px',
  },
  imgclass:{
    width: '100%',
  },
  imgclass1:{
    width:'30vw',
    maxWidth: 50,

  },
  coupon:{
    marginBottom:10,
  }
  
});

export default function CouponCard({mycoupon}) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <div className={classes.root}>
      <div className="blockcoupon">
        <div className="couponborder">
          {
            mycoupon.coupon_type==='off_price' ? <div className={classes.imgclass1}><img src={Discount} className={classes.imgclass}/></div> : <div className={classes.imgclass1}><img src={Discount1} className={classes.imgclass}/></div>
          }

          
       
       
      <Grid
  container
  direction="column"
  justify="flex-start"
  alignItems="flex-start"
  className={classes.coupon}
>
 

  <Grid
  container
  direction="row"
  justify="center"
  alignItems="center"
  className={classes.coupon}
>

        <Typography className={classes.title} color="textSecondary">
            {
              mycoupon.coupon_type==='off_price' ? `${mycoupon.currency.slice(0,1)} ${mycoupon.off} off` : `${mycoupon.off} % Discount`
          }
        </Typography>

</Grid>
        
      
        <Grid
  container
  direction="row"
  justify="flex-start"
  alignItems="flex-start"
  
>
  <Grid item xs={2}>
        <div className="circle2" ></div></Grid>

          <Grid item xs={8}>
          <Typography variant="body2" className={classes.title1} component="p">
        Applicable from - {
              mycoupon.valid_from
          } on some specific products, 
           
        Min. price for coupon to be applicable is {mycoupon.currency} {
              mycoupon.min_price
          }
         ,
          {
            mycoupon.max_off_price ?  `Max discount will be ${mycoupon.currency} ${mycoupon.max_off_price},` 
              : null
          
          }
        
        
        Expiry on 
          
          {
              mycoupon.expiry_date
          }
      
        
          </Typography>
          </Grid>


        <Grid item xs={2}>
        <Grid
  container
  direction="row"
  justify="flex-end"
  alignItems="flex-start"
  
>
        <div className="circle3"></div></Grid></Grid>
        </Grid>
        
        </Grid>
        

       
        


       

        <Grid
  container
  direction="row"
  justify="center"
  alignItems="center"
  className={classes.coupon}
  
>
  <div className="titlecoupon">
<Typography variant="h5" component="h2" className={classes.coupontext}>
        {mycoupon.coupoun_code}
        </Typography>
        </div>
        

</Grid>

       
      
        
        
        
        
       
          
       
        
    
      
      
      <Link to={{
    pathname: `/dashboard/my_coupons/edit`,
    state: { property_id: mycoupon.coupoun_code}
  }} style={{textDecoration:'none'}}><Button size="small" className={classes.buttonclassnew}>
          Edit
        </Button></Link>
        <Link to={{
    pathname: `/dashboard/my_coupons/delete`,
    state: { property_id:mycoupon.coupoun_code,url:'sourcesfnsjfn231/mycoupons' ,url1:'my_coupons' }
  }} style={{textDecoration:'none'}}><Button size="small" className={classes.buttonclassnew}>
          Delete
        </Button></Link>
        </div>



        </div>
    </div>
  );
}