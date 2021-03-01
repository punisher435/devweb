import React,{useState,useEffect} from 'react';
import ReactDOM from 'react-dom';
import { makeStyles } from '@material-ui/core/styles';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import axios from 'axios'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Eror from './eror'
import Typography from '@material-ui/core/Typography';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import DateSelect from './dateselect'
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';

axios.defaults.xsrfHeaderName = `${process.env.REACT_APP_XSRF_COOKIE}`;
axios.defaults.xsrfCookieName = `${process.env.REACT_APP_CSRF_COOKIE}`;

const validationSchema = yup.object({
  
  coupoun_code: yup
  .string('Please, provide the appropriate answer')
  .required('You must answer this '),

  off: yup
  .number().integer('please enter integer'),

  life: yup
  .number().integer('please enter integer'),

  min_price: yup
  .number().integer('please enter integer'),

  max_off_price: yup
  .number().integer('please enter integer'),
  
  
  coupon_type: yup
  .string('Please, provide the appropriate answer')
  .required('You must answer this '),

  valid_from: yup
  .string('Please, provide the appropriate answer')
  .required('You must answer this '),
   

    
});


  const useStyles = makeStyles((theme) => ({
    
  
 
    // necessary for content to be below app bar
    myclass: {
      padding:'10%'
     
  },
  bgclass: {
    backgroundColor:`${process.env.REACT_APP_BG_COLOR}`,
    padding:0,
    margin:0,

 
  },
  myclass1: {
    padding:'30px'
},
    imageclass: {
      width:'350px'
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
      },
    erorclass: {
        width:'50%',
        marginLeft:'25%',
    },
    textclass1:{
        float: 'left',
    }
  }));

function CouponForm (props){
    const classes = useStyles();

    const [mycoupon,setcoupon] = useState({
      coupoun_code:'',
      coupon_type:'',
      valid_from: '',
      life:1,
      coupoun_rooms:[],
      coupoun_shops:[],
      coupoun_apartments:[],    
      off:0,
      min_price:0,
      max_off_price:0,
    })

    const [edit,setedit] = useState(false)
    const [redirect,setredirect] = useState(false)
    const [error,seterror] = useState(false)
    const couponid = props.location.state.property_id;
    const [myrooms,setrooms] =useState([])
    const [myshops,setshops] =useState([])
    const [myapartments,setapartments] =useState([])
    const [loading,setloading] = useState(false)
    

   

    useEffect(
        async () => {
            const config = {
                headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `JWT ${localStorage.getItem('access')}`,
                },
              };
              
              if(props.profile)
              {
                try{const res = await axios.get(`${process.env.REACT_APP_API_URL}/sourcesfnsjfn231/mycoupons/${couponid}/`,config);
                console.log('data',res.data)
                setcoupon({
                    coupoun_code:res.data.coupoun_code,
                    coupon_type:res.data.coupon_type,
                    valid_from: res.data.valid_from,
                    life:res.data.life,
                    coupoun_rooms:res.data.coupoun_rooms,
                    coupoun_shops:res.data.coupoun_shops,
                    coupoun_apartments:res.data.coupoun_apartments,    
                    off:res.data.off,
                    min_price:res.data.min_price,
                    max_off_price:res.data.max_off_price,
                })
                setedit(true);
        
                
              
              }
                catch{

                    
      
                }

            
              
                
                 
                  try{const res1 = await axios.get(`${process.env.REACT_APP_API_URL}/sourcewdsfdaegds/my_rooms/`,config);
                
                  setrooms(res1.data)
                  console.log(res1.data)
                
                }
                  catch{
        
                  }

                  try{const res2 = await axios.get(`${process.env.REACT_APP_API_URL}/sourcekfhkt274fs/my_shops/`,config);
              
                  setshops(res2.data)
                  console.log(res2.data)
                
                }
                  catch{
        
                  }
                  try{const res3 = await axios.get(`${process.env.REACT_APP_API_URL}/sourceddnvslf54d/my_apartments/`,config);
              
                  setapartments(res3.data)
                  console.log(res3.data)
                
                }
                  catch{
        
                  }
        }
    }
    
    ,[couponid])


  

  const formik = useFormik({
    enableReinitialize:true,
    initialValues: {
        coupoun_code:mycoupon.coupoun_code,
        coupon_type:mycoupon.coupon_type,
        valid_from: mycoupon.valid_from,
        life:mycoupon.life,
        coupoun_rooms:mycoupon.coupoun_rooms,
        coupoun_shops:mycoupon.coupoun_shops,
        coupoun_apartments:mycoupon.coupoun_apartments,    
        off:mycoupon.off,
        min_price:mycoupon.min_price,
        max_off_price:mycoupon.max_off_price,
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {

      setloading(true)      
      const config = {
        headers: {
                'Content-Type': 'application/json',
                'Authorization': `JWT ${localStorage.getItem('access')}`,
        },
      };

      const body = {
          data:values
      }

      
      if(edit===false)
      {
        try{const res = await axios.post(`${process.env.REACT_APP_API_URL}/sourcesfnsjfn231/mycoupons/`,body,config);
        setloading(false)        
        setredirect(true)
        
              }
                catch{
                  setloading(false)  
                  console.log('error')
                  seterror(true)
                  
                }
      }
     
    },
  });


  useEffect(
    () => {
      if(formik.values.off!==formik.values.off){formik.setFieldValue('off',0);}
      
    
    }
  ,[formik.values.off])

  useEffect(
    () => {
      if(formik.values.min_price!==formik.values.min_price){formik.setFieldValue('min_price',0);}
      
    
    }
  ,[formik.values.min_price])

  useEffect(
    () => {
      if(formik.values.max_off_price!==formik.values.max_off_price){formik.setFieldValue('max_off_price',0);}
      
    
    }
  ,[formik.values.max_off_price])

  useEffect(
    () => {
      if(formik.values.life!==formik.values.life){formik.setFieldValue('life',0);}
      
    
    }
  ,[formik.values.life])

  if(redirect==true)
  {
    return <Redirect to='/dashboard/my_coupons' />
  }
  if(error===true)
  {

      return <div className={classes.erorclass}><Eror error={'Cannot update coupon details'}/></div>
  }

  const handleChange = (e,roomid,boolean) => {
      
      console.log('hy')
      console.log(boolean)
      console.log(formik.values.coupoun_rooms)
      console.log(typeof formik.values.coupoun_rooms)
      if(boolean)
      {
          /* formik.setFieldValue('coupoun_rooms',formik.values.coupoun_rooms.splice(formik.values.coupoun_rooms.indexOf(roomid)-1,1)) */
      }
      else{
        formik.setFieldValue('coupoun_rooms',formik.values.coupoun_rooms.concat(roomid))
      }
  }

  const handleChange1 = async (e,shopid,boolean) => {
    
    console.log('hy')
    console.log(boolean)
    
    console.log(typeof formik.values.coupoun_shops)
    if(boolean)
    {
       /*  await formik.setFieldValue('coupoun_shops',formik.values.coupoun_shops.splice(formik.values.coupoun_shops.indexOf(shopid),1)) */
    }
    else{
      await formik.setFieldValue('coupoun_shops',formik.values.coupoun_shops.concat(shopid))
    }
    console.log(formik.values.coupoun_shops)
}
const handleChange2 = (e,apartmentid,boolean) => {
    
    console.log('hy')
    console.log(boolean)
    console.log(formik.values.coupoun_apartment)
    console.log(typeof formik.values.coupoun_apartments)
    if(boolean)
    {
        /* formik.setFieldValue('coupoun_apartments',formik.values.coupoun_apartments.splice(formik.values.coupoun_apartments.indexOf(apartmentid)-1,1)) */
    }
    else{
      formik.setFieldValue('coupoun_apartments',formik.values.coupoun_apartments.concat(apartmentid))
    }
}


  return (
    <div className={classes.bgclass}>
    
    <div className={classes.myclass}>

<Backdrop className={classes.backdrop} open={loading}>
        <CircularProgress color="inherit" />
      </Backdrop>

        
        <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
        >
          <Paper elevation={5} className={classes.myclass1}>
      <form onSubmit={formik.handleSubmit}>
        
       
        <br />
        <Grid item>
        <TextField
          multiline
          rows={1}
          id="coupoun_code"
          name="coupoun_code"
          label="Coupoun Code"
          value={formik.values.coupoun_code}
          onChange={formik.handleChange}
          error={formik.touched.coupoun_code && Boolean(formik.errors.coupoun_code)}
          helperText={formik.touched.coupoun_code && formik.errors.coupoun_code}
        />
        </Grid>

        <br />
        
        
          <Grid item>
        <FormControl className={classes.formControl}>
        
            <InputLabel id="coupon_type">Coupon type</InputLabel>
            <Select
            labelId="coupon_type"
            id="coupon_type"
            value={formik.values.coupon_type}
            onChange={(e) => {formik.setFieldValue('coupon_type',e.target.value);
            }}
            error={formik.touched.coupon_type && Boolean(formik.errors.coupon_type)}
            helperText={formik.touched.coupon_type && formik.errors.coupon_type}
            >
            <MenuItem value={'discount'}>% Discount</MenuItem>
            <MenuItem value={'off_price'}>Reduce some money</MenuItem>
            </Select>
        </FormControl>
      </Grid>
   

        
        <div><br /><Grid
      container
      direction="row"
      justify="flex-start"
      alignItems="center"
      spacing={1}
    >
      
      <Grid item>
      <Typography variant="body1" color="textSecondary" className={classes.textclass}>
      Discount Amount 
        </Typography>
      </Grid>
        <Grid item>
        <TextField
          multiline
          rows={1}
          id="off"
          name="off"
          label="off"
          value={formik.values.off}
          onChange={(e) => {formik.setFieldValue('off',parseInt(e.target.value)); 
          }}
          error={formik.touched.off && Boolean(formik.errors.off)}
          helperText={formik.touched.off && formik.errors.off}
        />
        </Grid>
  </Grid></div>

  <div><br /><Grid
      container
      direction="row"
      justify="flex-start"
      alignItems="center"
      spacing={1}
    >
      
      <Grid item>
      <Typography variant="body1" color="textSecondary" className={classes.textclass}>
      Min price for discount to be applied
        </Typography>
      </Grid>
        <Grid item>
        <TextField
          multiline
          rows={1}
          id="min_price"
          name="min_price"
          label="min_price"
          value={formik.values.min_price}
          onChange={(e) => {formik.setFieldValue('min_price',parseInt(e.target.value)); 
          }}
          error={formik.touched.min_price && Boolean(formik.errors.min_price)}
          helperText={formik.touched.min_price && formik.errors.min_price}
        />
        </Grid>
  </Grid></div>

  <div><br /><Grid
      container
      direction="row"
      justify="flex-start"
      alignItems="center"
      spacing={1}
    >
      
      <Grid item>
      <Typography variant="body1" color="textSecondary" className={classes.textclass}>
      Valid from
        </Typography>
      </Grid>
        <Grid item>
        <TextField
          multiline
          rows={1}
          id="valid_from"
          name="valid_from"
          label="valid_from"
          value={formik.values.valid_from}
          error={formik.touched.valid_from && Boolean(formik.errors.valid_from)}
          helperText={formik.touched.valid_from && formik.errors.valid_from}
        />
        </Grid>
        <Grid item>
      <DateSelect value={formik.values.valid_from} setvalue={formik.setFieldValue} name={'valid_from'} />
  </Grid>
  </Grid></div>

  

  <div><br /><Grid
      container
      direction="row"
      justify="flex-start"
      alignItems="center"
      spacing={1}
    >
      
      <Grid item>
      <Typography variant="body1" color="textSecondary" className={classes.textclass}>
      Max. discount amount
        </Typography>
      </Grid>
        <Grid item>
        <TextField
          multiline
          rows={1}
          id="max_off_price"
          name="max_off_price"
          label="max_off_price"
          value={formik.values.max_off_price}
          onChange={(e) => {formik.setFieldValue('max_off_price',parseInt(e.target.value)); 
          }}
          error={formik.touched.max_off_price && Boolean(formik.errors.max_off_price)}
          helperText={formik.touched.max_off_price && formik.errors.max_off_price}
        />
        </Grid>
  </Grid></div>

        <br />



        <div><br /><Grid
      container
      direction="row"
      justify="flex-start"
      alignItems="center"
      spacing={1}
    >
      
      <Grid item>
      <Typography variant="body1" color="textSecondary" className={classes.textclass}>
      life (no. of days)
        </Typography>
      </Grid>
        <Grid item>
        <TextField
          multiline
          rows={1}
          id="life"
          name="life"
          label="life"
          value={formik.values.life}
          onChange={(e) => {formik.setFieldValue('life',parseInt(e.target.value)); 
          }}
          error={formik.touched.life && Boolean(formik.errors.life)}
          helperText={formik.touched.life && formik.errors.life}
        />
        </Grid>
        
  </Grid></div>
<br />
  <Grid item>
        <Typography variant="h6" color="textSecondary" >
      Rooms
        </Typography>
        </Grid>
          {
              myrooms.map((room) => (
                  <div>
                      <Checkbox
        checked={formik.values.coupoun_rooms.includes(room.room_id)}
        
        inputProps={{ 'aria-label': 'primary checkbox' } } className={classes.textclass1}
        onChange={e => handleChange(e,room.room_id,formik.values.coupoun_rooms.includes(room.room_id))}
      />
     <Typography variant="body1" color="textSecondary" >
      {room.room_id}
        </Typography>

                  </div>
              ))
          }

          <br />
          <Grid item>
          <Typography variant="h6" color="textSecondary" >
      Shops
        </Typography>
        </Grid>
        <br />

{
              myshops.map((shop) => (
                  <div>
                      <Checkbox
        checked={formik.values.coupoun_shops.indexOf(shop.shop_id)!==-1}
        
        inputProps={{ 'aria-label': 'primary checkbox' } } className={classes.textclass1}
        onChange={e => handleChange1(e,shop.shop_id,formik.values.coupoun_shops.indexOf(shop.shop_id)!==-1)}
      />
     <Typography variant="body1" color="textSecondary" >
      {shop.shop_id}
        </Typography>

        <br /></div>
              ))
          }

<Grid item>
          <Typography variant="h6" color="textSecondary" >
      Apartment
        </Typography>
        </Grid>
        <br />

{
              myapartments.map((apartment) => (
                  <div>
                      <Checkbox
        checked={formik.values.coupoun_apartments.includes(apartment.apartment_id)}
        
        inputProps={{ 'aria-label': 'primary checkbox' } } className={classes.textclass1}
        onChange={e => handleChange2(e,apartment.apartment_id,formik.values.coupoun_apartments.includes(apartment.apartment_id))}
      />
     <Typography variant="body1" color="textSecondary" >
      {apartment.apartment_id}
        </Typography>

        <br /></div>
              ))
          }


          
 
        <br />

        {
          edit ? null : <Button color="primary" variant="contained" fullWidth type="submit">
          Submit
        </Button>
        }
        
        
      </form>
      </Paper>
      </Grid>
    
    </div>
    </div>
  );
}



const mapStateToProps = state => ({
  isAuthenticated: state.authreducers.isAuthenticated,
  profile : state.authreducers.user
});

export default connect(mapStateToProps)(CouponForm)
