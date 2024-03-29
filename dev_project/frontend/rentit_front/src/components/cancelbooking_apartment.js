



import React,{ useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Dashboarddrawer from '../hocs/layout2'
import axios from 'axios'
import Eror from '../components/eror'
import Grid from '@material-ui/core/Grid';


import Button from '@material-ui/core/Button';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import {Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import Load1 from './Spinner';

import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';


axios.defaults.xsrfHeaderName = `${process.env.REACT_APP_XSRF_COOKIE}`;
axios.defaults.xsrfCookieName = `${process.env.REACT_APP_CSRF_COOKIE}`;


function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

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
}));
  

function Bookingcancel(props) {
    const bookingid = props.match.params.bookingid;
    const [error,seterror] = useState(false);
    const [redirect,setredirect] = useState(false);

    const [mybooking,setmybooking]= useState()
    const [cancelled,setcancelled]= useState(false)

    const [canceldetails,setdetails] = useState({
        reason:'No use to me',
        feedback:'',
        account_no:'',
        IFSC_code:'',
        bank_name:'',
        bank_address:'',
        account_type:'Savings',
    })

    React.useEffect(
        async () => {
            const config = {
                headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `JWT ${localStorage.getItem('access')}`,
                },
              };
              
                try{const res = await axios.get(`${process.env.REACT_APP_API_URL}/sourcensinejfcdajewcn29210/apartment/book/${bookingid}/`,config);
            
             setmybooking(res.data)
              
              }
                catch{
                  seterror(true);
                }
                console.clear();
        }
    
    ,[])

      
    const classes = useStyles();

    const [meup,setmeup] = useState(false);

    const handleCloseup = (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }
  
      setmeup(false);
    };


    const handleclick1 = async (e) => {
      e.preventDefault();

      if(canceldetails.account_no!='' && canceldetails.IFSC_code!='' && canceldetails.bank_name!='' && canceldetails.bank_address!='')
      {

      

      const config = {
        headers: {
                'Content-Type': 'application/json',
                'Authorization': `JWT ${localStorage.getItem('access')}`,
        },
      };
      const body = {
        data:canceldetails,
      }
      setcancelled(true);
      
        try{const res = await axios.delete(`${process.env.REACT_APP_API_URL}/sourcensinejfcdajewcn29210/apartment/book/${bookingid}/`,config);
        

        try{const res = await axios.patch(`${process.env.REACT_APP_API_URL}/sourcensinejfcdajewcn29210/apartment/book/${bookingid}/`,body,config);

        setcancelled(false);
        setredirect(true)
      
      }
        catch{
          setcancelled(false);
          setredirect(true)
        }

        setcancelled(false);
      
      }
        catch{
          setcancelled(false);
          seterror(true);
        }
        
      }
      else{
        setmeup(true);
      }
      console.clear();
    }
    const handleChange = (event) => {
        setdetails({...canceldetails,reason:event.target.value});
      };

      const handleChange1 = (event) => {
        setdetails({...canceldetails,account_type:event.target.value});
      };

      const handleme = e => {
        setdetails({ ...canceldetails, [e.target.name]: e.target.value });
      }


    if(error==true)
    {
      return <div className={classes.erorclass}><Eror error='Error' /></div>
    }
    if(redirect===true)
    {
        return <Redirect to='/dashboard/recentbookings'/>;
    }

    if(mybooking && props.profile){
    
    
    return (
        <div>
          {
            cancelled ? <Backdrop className={classes.backdrop} open={cancelled}>
            <CircularProgress color="inherit" />
          </Backdrop> : null
          }
            <Dashboarddrawer/>
            <main className={classes.content}>
            <div className={classes.toolbar} />

            <Snackbar open={meup} autoHideDuration={6000} onClose={handleCloseup}>
            <Alert onClose={handleCloseup} severity="info">
              You must fill all the bank details
            </Alert>
          </Snackbar>

            <div>

            <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
           >


            
              <h3>Do you want to cancel booking no .</h3>
            
            
              <h4>{mybooking.booking_id}?</h4>
            

            

            
            
            <FormControl className={classes.formControl}>
                <InputLabel id="cancellation-reason">Cancellation reason</InputLabel>
                <Select
                labelId="cancellation-reason"
                id="cancellation-reason-select"
                value={canceldetails.reason}
                onChange={handleChange}
                >
                <MenuItem value={'No use to me'}>No use to me</MenuItem>
                <MenuItem value={'Booked somewhere else'}>Booked somewhere else</MenuItem>
                </Select>
                <FormHelperText>Select your cancellation reason</FormHelperText>
            </FormControl>
           
            <br />
            
            <FormControl className={classes.formControl}>
                <InputLabel id="account_type">Account type</InputLabel>
                <Select
                labelId="account_type"
                id="account_type"
                value={canceldetails.account_type}
                onChange={handleChange1}
                >
                <MenuItem value={'Savings'}>Savings</MenuItem>
                <MenuItem value={'Current'}>Current</MenuItem>
                </Select>
                <FormHelperText>Select your cancellation reason</FormHelperText>
            </FormControl>
            
            <br />
            
            <TextField
            id="account_no"
            label="Account no"
            name="account_no"
            multiline
            rows={1}
            value = {canceldetails.account_no}
            onInput={(e) =>{handleme(e);}}
            variant="outlined"
        />
        <br />
        <TextField
            id="IFSC_code"
            label="IFSC code"
            name="IFSC_code"
            multiline
            rows={1}
            value = {canceldetails.IFSC_code}
            onInput={(e) =>{handleme(e);}}
            variant="outlined"
        />
        <br />
        <TextField
            id="bank_name"
            label="Bank name"
            name="bank_name"
            multiline
            rows={1}
            value = {canceldetails.bank_name}
            onInput={(e) =>{handleme(e);}}
            variant="outlined"
        />
        <br />
        <TextField
            id="bank_address"
            label="Branch address"
            name="bank_address"
            multiline
            rows={3}
            value = {canceldetails.bank_address}
            onInput={(e) =>{handleme(e);}}
            variant="outlined"
        />
        <br />
            <TextField
            id="feedback"
            label="Feedback"
            name="feedback"
            multiline
            rows={4}
            value = {canceldetails.feedback}
            onInput={(e) =>{handleme(e);}}
            variant="outlined"
        />

           
            <br />



            {
                mybooking.ended || mybooking.extended || props.profile.is_seller===true || mybooking.cancelled ? null : <Button variant="contained" color="secondary" onClick={(e) => {handleclick1(e);}}>
                Cancel booking
              </Button>
            }

            

            

              


            </Grid>
            </div>
            </main>
        </div>
    )
    }
    else{
      return <><Load1 laoding={true} /></>;
    }
}

const mapStateToProps = state => ({
  isAuthenticated: state.authreducers.isAuthenticated,
  profile : state.authreducers.user
});

export default connect(mapStateToProps)(Bookingcancel);


