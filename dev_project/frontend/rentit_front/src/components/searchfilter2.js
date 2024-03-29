import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';




const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: 180,
    },
  },
}));



export default function SearchFields2(props) {
  const classes = useStyles();
  const [value,setvalue] = useState('')

  const changehandler = event => {
      setvalue(event.target.value);
      props.setfilters({...props.filters,search:event.target.value.toUpperCase()});
  }

  return (
    <form className={classes.root} noValidate autoComplete="on">
      <TextField id="standard-basic" label="Search" value={value} onChange={event => {changehandler(event);}}/>
    </form>
  );
}