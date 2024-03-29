import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';

import BookCard from './bookcard_shop'

function getModalStyle() {
  const top = '50' ;
  const left = '50' ;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    
    width:'100%',
    maxWidth:'400px',
    height:'50vh',
    overflowY: 'scroll',
    overflowx: 'hidden',
    
    top:'25vh',
    

    [theme.breakpoints.up('sm')]: {
      position: 'absolute',
    
      width:'100%',
      maxWidth:'400px',
      height:'89vh',maxHeight:'693px',
      overflowY: 'scroll',
      overflowx: 'hidden',
      
      top:'25vh',
      left:'50vw',
    },
 
    zoom:'0.8',
   
 

    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
  },
}));

export default function SimpleModal1({details,open,change,bookvalues,setbookvalues,loginpage,setloginpage,bookform,setbookform}) {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);



  const handleClose = () => {
    change(false);
  };

  const body = (
    <div className={`${classes.paper}`}>
        <BookCard details={details} bookvalues={bookvalues} setbookvalues={setbookvalues} loginpage={loginpage} setloginpage={setloginpage} bookform={bookform} setbookform={setbookform}/>
      
    </div>
  );

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}
