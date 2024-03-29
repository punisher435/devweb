import React,{ useState, useEffect} from 'react'
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Dashboarddrawer from '../hocs/layout2'
import axios from 'axios'
import Eror from '../components/eror'
import Grid from '@material-ui/core/Grid';

import {Redirect} from 'react-router-dom'
import {connect} from 'react-redux'



import SellerAnalytics from './selleranalytics'


axios.defaults.xsrfHeaderName = `${process.env.REACT_APP_XSRF_COOKIE}`;
axios.defaults.xsrfCookieName = `${process.env.REACT_APP_CSRF_COOKIE}`;





const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    
  
 
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    [theme.breakpoints.up('sm')]: {
      display: 'block',
      marginLeft:drawerWidth,
    },
  },
  erorclass:{
    width:'50%',
    marginLeft:'25%',
  },
  textclass:{
    float: 'left',
  },
  table: {
    width:'30%'
  },
  head: {
    fontSize:'20px'
  },
  row: {
    fontSize:'20px'
  },
  barclass: {
    width:'0%',
    display: 'block',
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
    
  },
  myclass: {
      
      width:'60vw'
  },
}));
  

function Analytics(props) {

    const [error,seterror] = useState(false)
    const [bookings,setbookings]  = useState([])
    const [shopbookings,setshopbookings] = useState([])
    const [apartmentbookings,setapartmentbookings] = useState([])
    const [bank,setbank] = useState()
    const [newredirect,setnewredirect] = useState(false);

    React.useEffect(() => {
      if(props.profile)
      {
        if(!props.profile.profile_completed || !props.profile.bank_completed || !props.profile.address_completed)
        {
          setnewredirect(true);
        }
        else{
          setnewredirect(false);
        }
      }
      else{
        setnewredirect(false);
      }
      console.clear();
    },[props.profile])

    


   

    React.useEffect(
        async () => {
            const config = {
                headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `JWT ${localStorage.getItem('access')}`,
                },
              };

              
                try{const res = await axios.get(`${process.env.REACT_APP_API_URL}/sourcehjbda983290whjba/room/book/`,config,config);
            
             setbookings(res.data)
              
              }
                catch{
      
                }

                try{const res1 = await axios.get(`${process.env.REACT_APP_API_URL}/sourcehdawnajk289uadhq/shop/book/`,config,config);
               
                setshopbookings(res1.data)
                 
                 }
                   catch{
         
                   }

                   try{const res2 = await axios.get(`${process.env.REACT_APP_API_URL}/sourcensinejfcdajewcn29210/apartment/book/`,config,config);
                  
                   setapartmentbookings(res2.data)
                    
                    }
                      catch{
            
                      }
                      console.clear();       
        }
    
    ,[])

    React.useEffect(async () => {

        const config = {
            headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `JWT ${localStorage.getItem('access')}`,
            },
          };
          if(props.profile){
        if(props.profile.is_seller===true){
            try{const res1 = await axios.get(`${process.env.REACT_APP_API_URL}/sourceadbahdvjs218/my_bank_details/${props.profile.id}/`,config);
          
            setbank(res1.data)
          
          
          }
            catch{
  
            }
           
          }}
          console.clear();
    },[props.profile])


    


    const classes = useStyles();

    

    if(error==true)
    {
      return <div className={classes.erorclass}><Eror error='Error' /></div>
    }
    if(newredirect==true)
    {
      return <Redirect to={{
        pathname: '/dashboard/profile',
        state: { property_id: true }
      }}/> ;
    }

    if(props.isAuthenticated===false)
    {
      return <Redirect to="/login" />;
    }

    if(props.profile && bookings && shopbookings && apartmentbookings){
    
    
    return (
        <div>
             <Dashboarddrawer/>
            <main className={classes.content}>
            <div className={classes.toolbar} />

            
            <Grid
  container
  direction="column"
  justify="center"
  alignItems="center"
>

            {
                props.profile.is_seller ? <Grid item><SellerAnalytics roombookings={bookings} bank={bank} shopbookings={shopbookings} apartmentbookings={apartmentbookings} /></Grid> 
                : null
            }
            </Grid>

            
            </main>
        </div>
    )
}
else{
  return <div></div>
}
}

const mapStateToProps = state => ({
  isAuthenticated: state.authreducers.isAuthenticated,
  profile : state.authreducers.user
});

export default connect(mapStateToProps)(Analytics)
