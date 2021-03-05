import React from 'react'
import Welcome from './Welcome'
import CardList from './CardList'
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { makeStyles, withStyles } from '@material-ui/core/styles';
import 'antd/dist/antd.css';
import axios from 'axios'
import RecipeReviewCard from '../components/newcardroom';
import Grid from '@material-ui/core/Grid';
import Scrollroom from '../components/scrollroom';
import Scrollshop from '../components/scrollshops';
import Typography from '@material-ui/core/Typography';
import {Link} from 'react-router-dom'

axios.defaults.xsrfHeaderName = `${process.env.REACT_APP_XSRF_COOKIE}`;
axios.defaults.xsrfCookieName = `${process.env.REACT_APP_CSRF_COOKIE}`;

const useStyles = makeStyles((theme) => ({
    myclass: {
        marginLeft:'4%'
    },
  
  }));


function Home() {
    const classes = useStyles();
    const [luxrooms,setluxrooms] = React.useState([])
    const [classroom,setclassroom] = React.useState([])
    const [singleroom,setsingleroom] = React.useState([])
    const [shop,setshop] = React.useState([])

    React.useEffect(async() => {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
          };
          try{const res = await axios.get(`${process.env.REACT_APP_API_URL}/sourceaxcnfrudadv34/rooms/`,{
            params:{
             page:1,
             category: 'Deluxe room',
             ordering:'-trust_points',
    
            },
            config:config
          });
          
          setluxrooms(res.data.results);
          
          
          }
          catch{
            
          }
    },[])

    React.useEffect(async() => {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
          };
          try{const res1 = await axios.get(`${process.env.REACT_APP_API_URL}/sourceaxcnfrudadv34/rooms/`,{
            params:{
             page:1,
             category: 'Classic room',
             ordering:'-trust_points',
    
            },
            config:config
          });
          
          setclassroom(res1.data.results);
          
          }
          catch{
            
          }
    },[])

    React.useEffect(async() => {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
          };
          try{const res = await axios.get(`${process.env.REACT_APP_API_URL}/sourceaxcnfrudadv34/rooms/`,{
            params:{
             page:1,
             category: 'Single',
             ordering:'-trust_points',
    
            },
            config:config
          });
          
          setsingleroom(res.data.results);
          
          }
          catch{
            
          }
    },[])

    React.useEffect(async() => {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
          };
          try{const res = await axios.get(`${process.env.REACT_APP_API_URL}/sourceadadk2647kfs/shops/`,{
            params:{
             page:1,
             
             ordering:'-trust_points',
    
            },
            config:config
          });
          
          setshop(res.data.results);
          
          
          }
          catch{
            
          }
    },[])

    
    return (
        <div>
           
            <Welcome/>
            <br />
            

            {
                luxrooms.length>=1 ? <><div
                className={classes.myclass}
                >
                <Typography variant='h6'>
                    <Link to='/rooms/?category=Deluxe+room' style={{textDecoration:'none',color:'black'}}>Our Deluxe Rooms...</Link>
                </Typography>
                </div>
                <br />
                <Scrollroom rooms={luxrooms}/>
                
    
                <br /></> : null
            }
            
            
            {
                classroom.length>=1 ? <><div
                className={classes.myclass}
                >
                <Typography variant='h6'>
                    <Link to='/rooms/?category=Classic+room' style={{textDecoration:'none',color:'black'}}>Our Classic Rooms...</Link>
                </Typography>
                </div>
                <br />
                <Scrollroom rooms={classroom}/>
    
                <br /></> : null
            }
            

            {
                singleroom.length>=1 ? <><div
                className={classes.myclass}
                >
                <Typography variant='h6'>
                    <Link to='/rooms/?category=Single' style={{textDecoration:'none',color:'black'}}>Our Single Rooms...</Link>
                </Typography>
                </div>
                <br />
                <Scrollroom rooms={singleroom}/> <br /></> : null
            }

            {
                shop.length>=1 ? <><div
                className={classes.myclass}
                >
                <Typography variant='h6'>
                    <Link to='/shops/' style={{textDecoration:'none',color:'black'}}>Our Shops...</Link>
                </Typography>
                </div>
                <br />
                <Scrollshop rooms={shop}/> <br /></> : null
            }

            
            
                        
        </div>
    )
}

export default Home
