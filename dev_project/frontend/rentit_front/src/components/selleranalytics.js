import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import BarChart from './barchart';

import  {useMediaQuery} from '@material-ui/core';
import PieChart from './piechart';
import Multicolor_chart from './multicolor_chart';
import PieChart2 from './piechart2';
import PieChart3 from './piechart3';
import LineGraph from './linegraph';
import Load1 from './Spinner';



const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      '& > *': {
        margin: theme.spacing(1),
        width: theme.spacing(16),
        height: theme.spacing(16),
      },
    },
    paperclass: {
        width:'200px',
        height:'150px',
      
    
    },
    paraclass:{
        textAlign: 'center',
        marginTop:'20px'
    },
    paraclass1:{
        textAlign: 'center',
        marginTop:'20px',
        color:'red',
    },
    graphclass:{
        width:'90vw',
        [theme.breakpoints.up('sm')]: {
            width:'90vw',
            maxWidth:440,
          },
          [theme.breakpoints.up('md')]: {
            width:'40vw',
            maxWidth:440,
          },
    },
    graphclass1:{
        width:'90vw',
        [theme.breakpoints.up('sm')]: {
            width:'90vw',
            maxWidth:440,
          },
          [theme.breakpoints.up('md')]: {
            width:'40vw',
            maxWidth:440,
          },
    }

  }));

function Selleranalytics({roombookings,shopbookings,apartmentbookings,bank}) {

    var earning = 0;

    roombookings.map((booking) => {
        if(booking.cancelled===false)
        {
            earning = earning + booking.seller_pay
        }
    })

    shopbookings.map((booking1) => {
        if(booking1.cancelled===false)
        {
            earning = earning + booking1.seller_pay
        }
    })

    apartmentbookings.map((booking2) => {
        if(booking2.cancelled===false)
        {
            earning = earning + booking2.seller_pay
        }
    })

    const isSmall = useMediaQuery("(max-width: 375px)");
    // const isSmall1 = useMediaQuery("(max-width: 375px)");

    const classes = useStyles();
    if(bank && roombookings && shopbookings && apartmentbookings){
    return (
        <div>
            <Grid
  container
  direction="column"
  justify="center"
  alignItems="center"
>
            <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            >
                <Grid item>
        <div className={classes.root}>
        <Paper elevation={3} className={classes.paperclass}>

            <Typography variant='h6' className={classes.paraclass}>
                Your due payment :
            </Typography>
            <Typography variant='body1' className={classes.paraclass1}>
                {bank.currency} {bank.total_due_payment}
            </Typography>

        </Paper>
        </div>
        </Grid>

        <Grid item>
        <div className={classes.root}>
        <Paper elevation={3} className={classes.paperclass}>

            <Typography variant='h6' className={classes.paraclass}>
                Your earnings :
            </Typography>
            <Typography variant='body1' className={classes.paraclass1}>
                {bank.currency} {earning}
            </Typography>

        </Paper>
        </div>
        </Grid>

        </Grid>
        <br />
        

        <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            spacing={3}
            >
                
                <Grid item>
                    {isSmall && 
                        <div >
                        <BarChart roombookings={roombookings} shopbookings={shopbookings} apartmentbookings={apartmentbookings}/>
                        </div>
                    }
                    {
                        !isSmall &&
                        <div className={classes.graphclass1}>
                        <BarChart roombookings={roombookings} shopbookings={shopbookings} apartmentbookings={apartmentbookings}/>
                        </div>
                    }
                    
                </Grid>
                
                <Grid item>
                {isSmall && 
                        <div className={classes.graphclass}>
                        <PieChart roombookings={roombookings} shopbookings={shopbookings} apartmentbookings={apartmentbookings}/>
                        
                        </div>
                    }
                    {
                        !isSmall &&
                        <div className={classes.graphclass1}>
                        <PieChart roombookings={roombookings} shopbookings={shopbookings} apartmentbookings={apartmentbookings}/>
                    </div>
                    }
                    
                    
                </Grid> 


                <Grid item>
                {isSmall && 
                        <div className={classes.graphclass}>
                        <Multicolor_chart roombookings={roombookings} shopbookings={shopbookings} apartmentbookings={apartmentbookings}/>
                        
                        </div>
                    }
                    {
                        !isSmall &&
                        <div className={classes.graphclass1}>
                    <Multicolor_chart roombookings={roombookings} shopbookings={shopbookings} apartmentbookings={apartmentbookings}/>
                    
                    </div>
                    }
                    
                    
                </Grid>

                <Grid item>
                {isSmall && 
                        <div className={classes.graphclass}>
                        <PieChart2 roombookings={roombookings} shopbookings={shopbookings} apartmentbookings={apartmentbookings}/>
                        
                        </div>
                    }
                    {
                        !isSmall &&
                        <div className={classes.graphclass1}>
                    <PieChart2 roombookings={roombookings} shopbookings={shopbookings} apartmentbookings={apartmentbookings}/>
                    
                    </div>
                    }
                    
                    
                </Grid>

                <Grid item>
                {isSmall && 
                        <div className={classes.graphclass}>
                        <PieChart3 roombookings={roombookings} shopbookings={shopbookings} apartmentbookings={apartmentbookings}/>
                        
                        </div>
                    }
                    {
                        !isSmall &&
                        <div className={classes.graphclass1}>
                    <PieChart3 roombookings={roombookings} shopbookings={shopbookings} apartmentbookings={apartmentbookings}/>
                    
                    </div>
                    }
                    
                    
                </Grid>
                <Grid item>
                {isSmall && 
                        <div  className={classes.graphclass1}>
                        <LineGraph roombookings={roombookings} shopbookings={shopbookings} apartmentbookings={apartmentbookings}/>
                        </div>
                    }
                    {
                        !isSmall &&
                        <div className={classes.graphclass1}>
                        <LineGraph roombookings={roombookings} shopbookings={shopbookings} apartmentbookings={apartmentbookings}/>
                        </div>
                    }
                </Grid>
            </Grid>
            </Grid>

            
        </div>
    );}
    else{
        return (<div>
            <Load1 loading={true} />
        </div>);
    }
}

export default Selleranalytics

