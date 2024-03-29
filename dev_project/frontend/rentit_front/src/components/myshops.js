import React,{ useState} from 'react'
import {withStyles,makeStyles } from '@material-ui/core/styles';
import Dashboarddrawer from '../hocs/layout2'
import axios from 'axios'
import Eror from '../components/eror'
import Grid from '@material-ui/core/Grid';


import {Redirect} from 'react-router-dom'
import {connect} from 'react-redux'


import ShopCard from './shop_card'
import SpeedDial from '@material-ui/lab/SpeedDial';
import SpeedDialIcon from '@material-ui/lab/SpeedDialIcon';
import SpeedDialAction from '@material-ui/lab/SpeedDialAction';

import CreateOutlinedIcon from '@material-ui/icons/CreateOutlined';
import Load1 from './Spinner';

axios.defaults.xsrfHeaderName = `${process.env.REACT_APP_XSRF_COOKIE}`;
axios.defaults.xsrfCookieName = `${process.env.REACT_APP_CSRF_COOKIE}`;




const drawerWidth = 240;

const StyledFabField = withStyles((theme) => ({
  root: {
    position: 'absolute',
    color:`${process.env.REACT_APP_COLOR}`,
    
    '& .MuiFab-primary':{
      backgroundColor:`${process.env.REACT_APP_COLOR}`,
    },
    '& .MuiSpeedDial-directionUp, &.MuiSpeedDial-directionLeft': {
      bottom: theme.spacing(2),
      right: theme.spacing(2),
      color:`${process.env.REACT_APP_COLOR}`,
    },
    '& .MuiSpeedDial-directionDown, &.MuiSpeedDial-directionRight': {
      top: theme.spacing(2),
      left: theme.spacing(2),
      color:`${process.env.REACT_APP_COLOR}`,
    },
  }
}))(SpeedDial);

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
 

  },
  speedDial: {
    position: 'absolute',
    '&.MuiSpeedDial-directionUp, &.MuiSpeedDial-directionLeft': {
      bottom: theme.spacing(2),
      right: theme.spacing(2),
    },
    '&.MuiSpeedDial-directionDown, &.MuiSpeedDial-directionRight': {
      top: theme.spacing(2),
      left: theme.spacing(2),
    },
  },
  exampleWrapper: {
    position: 'relative',
    marginTop: theme.spacing(3),
    height: 100,
  },
}));
  

function Myshops(props) {

    const [error,seterror] = useState(false)
    const [myshops,setshops] = useState()

    const [hidden, setHidden] = React.useState(false);
    const [open, setOpen] = React.useState(false);
    const [direction, setDirection] = React.useState('up');
    const [redirect, setRedirect] = React.useState(false)

    const actions = [
   
      { icon: <CreateOutlinedIcon />, name: 'Add a room' },
    ];
  
   

    React.useEffect(
        async () => {
            const config = {
                headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `JWT ${localStorage.getItem('access')}`,
                },
              };
              
              if(props.isAuthenticated)
              {
                try{const res = await axios.get(`${process.env.REACT_APP_API_URL}/sourcekfhkt274fs/my_shops/`,config);
              
                setshops(res.data)
               
              
              }
                catch{
      
                }
                
              
        }
        console.clear();
    }
    
    ,[props.isAuthenticated])

    const handleClose = () => {
      setOpen(false);
    };
  
    const handleOpen = () => {
      setOpen(true);
    };
    const handleredirect = () => {
      setRedirect(true);
    };



    const classes = useStyles();

    if(props.isAuthenticated===false)
    {
      return <Redirect to="/login" />;
    }

    

    if(error==true)
    {
      return <div className={classes.erorclass}><Eror error='Error' /></div>
    }

    if(redirect)
    {
      return <Redirect  to={{
        pathname: `/dashboard/my_shops/edit`,
        state: { property_id: null }
      }} style={{textDecoration:'none'}} />
    }

    if(props.isAuthenticated && myshops){
    
    
    return (
        <div>
             <Dashboarddrawer/>
            <main className={classes.content}>
            <div className={classes.toolbar} />

          
            <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            className={classes.myclass}
            spacing={3}
            >

            {
                myshops.map(shop =>
                    {
                        return <Grid item><ShopCard myshop={shop} /></Grid>;
                    })
            }
           
            </Grid>

            <div className={classes.exampleWrapper}>
        <StyledFabField
          ariaLabel="SpeedDial example"
          className={classes.speedDial}
          hidden={hidden}
          icon={<SpeedDialIcon />}
          onClose={handleClose}
          onOpen={handleOpen}
          open={open}
          direction={direction}
        >
          {actions.map((action) => (
            <SpeedDialAction
              key={action.name}
              icon={action.icon}
              tooltipTitle={action.name}
              onClick={handleredirect}
            />
          ))}
        </StyledFabField>
      </div>
            
            

            
            </main>
        </div>
    )
}
else{
  return <div><Load1 loading={true} /></div>
}
}

const mapStateToProps = state => ({
  isAuthenticated: state.authreducers.isAuthenticated,
  profile : state.authreducers.user
});

export default connect(mapStateToProps)(Myshops)
