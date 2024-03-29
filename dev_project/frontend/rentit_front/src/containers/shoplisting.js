import React, { useState, useEffect } from 'react';
/* import Pagination from '../components/Pagination'; */
import Grid from '@material-ui/core/Grid';
import axios from 'axios';
import ResponsiveDrawer from './searchlist_shops';
import Eror from '../components/eror';
import Bookcardmodel from '../components/bookcardmodel1_shop';
import {Redirect} from 'react-router-dom'

import { connect } from 'react-redux'


axios.defaults.xsrfHeaderName = `${process.env.REACT_APP_XSRF_COOKIE}`;
axios.defaults.xsrfCookieName = `${process.env.REACT_APP_CSRF_COOKIE}`;

const App = ({isAuthenticated}) => {

  
  const urlParams = new URLSearchParams(window.location.search);

  var temp1=''
  const myparam1 = urlParams.get('city')
  
  if(myparam1)
  {
    temp1=myparam1
  }

  var temp2=''
  const myparam2 = urlParams.get('state')
  
  if(myparam2)
  {
    temp2=myparam2
  }

  var temp3=''
  const myparam3 = urlParams.get('country')
  
  if(myparam3)
  {
    temp3=myparam3
  }
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(2);
  const [totalposts, settotalPosts] = useState(0);
  const [max_price, setmax_price] = useState(0);
  const [min_price, setmin_price] = useState(0);
  const [mypost,setmypost] = useState()
  const [openmycard,setmycard] = useState(false)
  const [loginpage,setloginpage] = useState(false)

  const [mapview,setmap] = useState(false);

  const [error, setError] = useState('');
  const [wishlistitems,changeitemswishlist] = useState(0)
  const [cartitems,changeitemscart] = useState(0)

  const date = new Date(Date.now())

    var x;
    var y;
    if(parseInt(date.getMonth()+1)<10)
    {
      x = `0${date.getMonth()+1}`;
    }
    if(parseInt(date.getMonth()+1)>=10)
    {
      x = `${date.getMonth()+1}`;
    }
    if(parseInt(date.getDate())<10)
    {
      y = `0${date.getDate()}`;
    }
    if(parseInt(date.getDate())>=10)
    {
      y = `${date.getDate()}`;
    }

    var temp4=`${date.getFullYear()}-${x}-${y}`
    const myparam4 = urlParams.get('booking_date')
    
    if(myparam4)
    {
      temp4=myparam4
    }

  const [filters, setfilters] = useState({
   
   
    cooler:'',
    AC:'',
    TV:'',
    power_backup:'',
    floor_filter:'',
    room_filter:'',
    washroom_filter:'',
    windows:'',

    purified_water:'',
    min_rating:'',
    cctv_building:'',
   
    building_guard:'',
    balcony_filter:'',
    separate_washroom:'',
    category:'',

    location:'',
    city:temp1,
    state:temp2,
    landmark:'',
    pincode:'',
    country:temp3,
    district:'',

    wifi:'',
    gender:'',
    discount:'',
   

    electricity:'',
    
    min_price:0,
    max_price:400000,
   
    trust_points_filter:'',
    booked:'',
    windows:'',
    bookedtill:temp4,
    search:'',
    shop_cleaning:'',
    ordering:'-trust_points',
    
  });

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const config = {
        headers: {
            'Content-Type': 'application/json'
        }
      };
      const page = currentPage
      /* const params = new URLSearchParams([page,currentPage]) */
      if(mapview===false){
      try{const res = await axios.get(`${process.env.REACT_APP_API_URL}/sourceadadk2647kfs/shops/`,{
        params:{
          shop_cleaning:filters.shop_cleaning,
          page:currentPage,
          booked:filters.booked,
          min_price:filters.min_price,
          max_price:filters.max_price,
          category:filters.category,

          room_filter:filters.room_filter,
          washroom_filter:filters.washroom_filter,
          
          bookedtill_filter:filters.bookedtill,
          min_rating:filters.min_rating,
         
          trust_points_filter:filters.trust_points_filter,
          windows_filter:filters.windows,
          building_guard:filters.building_guard,
          cctv_building:filters.cctv_building,
          discount:filters.discount,

          cooler:filters.cooler,
          AC:filters.AC,
          TV:filters.TV,
          power_backup:filters.power_backup,
          purified_water:filters.purified_water,
          balcony_filter:filters.balcony_filter,
          separate_washroom:filters.separate_washroom,
          wifi:filters.wifi,
          gender:filters.gender,
      
          floor_filter:filters.floor_filter,
          search:filters.search,
          ordering:filters.ordering,

          city1:filters.city.toUpperCase(),
          state1:filters.state.toUpperCase(),
          country1:filters.country.toUpperCase(),
          location1:filters.location.toUpperCase(),
          landmark1:filters.landmark.toUpperCase(),
          pincode1:filters.pincode,
          district1:filters.district,
          
        },
        config:config
      });

      const res2 = await axios.get(`${process.env.REACT_APP_API_URL}/sourcekasdauhnuwiqlr2/minmax_shop/1/`,{
        config:config
      });

      
      setmax_price(res2.data.max_price);
      setmin_price(res2.data.min_price);
     
      setPosts(res.data.results);
      setLoading(false);
      settotalPosts(res.data.count);
      }
      catch{
        setLoading(false);
        
      }
    }
    };
  


    fetchPosts();
    console.clear();
  }, [currentPage,filters]);


  useEffect(async () => {
    if(isAuthenticated){
    const config = {
      headers: {
              'Content-Type': 'application/json',
              'Authorization': `JWT ${localStorage.getItem('access')}`,
      },
    };
    
      try {
        await axios.put(`${process.env.REACT_APP_API_URL}/sourcesnjs03qjkda/wishlist/shops/1/`,config,config)
        .then(res1 => {
          changeitemswishlist(res1.data);
        })
        .catch(err => {
          
        })
        
        }
        catch{
        }
    }
    console.clear();
  },[isAuthenticated])

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;

  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);

  if(error!=='')
  {
    return (
      <Grid
      container
      direction="row"
      justify="center"
      alignItems="center"
      >
        <Grid item xs={5}><Eror eror={error}/></Grid>
      </Grid>
    );
  }

  if(loginpage)
  {
    return <Redirect to='/login' />
  }


 
  return (
    <div>
    <Bookcardmodel open={openmycard} change={setmycard} details={mypost} loginpage={loginpage} setloginpage={setloginpage}/>
    
      <Grid
      container
      direction="row"
      justify="center"
      alignItems="center"
      >
        <Grid item lg={12} xs={12}>
        <ResponsiveDrawer  mypost={mypost} setmypost={setmypost} openmycard={openmycard} setmycard={setmycard} mapview={mapview} setmap={setmap} setfilters={setfilters} max_price={max_price} min_price={min_price} filters={filters} posts={posts} loading={loading} paginate={paginate} postsPerPage={postsPerPage} currentPage={currentPage} totalposts={totalposts} wishlistitems={wishlistitems} cartitems={cartitems} changeitemswishlist={changeitemswishlist} changeitemscart={changeitemscart}/>
        

        {/* <Pagination
          postsPerPage={postsPerPage}
          totalPosts={posts.length}
          paginate={paginate}
        /> */}
      </Grid>
      </Grid>
      </div>
  );
      
      
};


const mapStateToProps = state => ({
  isAuthenticated: state.authreducers.isAuthenticated,
  access: state.authreducers.access
});

export default connect(mapStateToProps)(App);