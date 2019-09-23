import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import FaceIcon from '@material-ui/icons/Face';
import DoneIcon from '@material-ui/icons/Done';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  chip: {
    margin: theme.spacing(1),
  },
}));

export default function SmallOutlinedChips() {
  const classes = useStyles();

  function handleDelete() {
    alert('You clicked the delete icon.');
  }

  function handleClick() {
    alert('You clicked the Chip.');
  }

  return (
    <div className={classes.root}>
  
 
      <Chip
        variant="outlined"
        size="small"
        label="Pizza"
        className={classes.chip}
        color="secondary"
      />
      
      <Chip
        variant="outlined"
        size="small"
        label="Burger"
        className={classes.chip}
        color="secondary"
      />
          
          <Chip
        variant="outlined"
        size="small"
        label="Chinese"
        className={classes.chip}
        color="secondary"
      />


{/* <Chip
        variant="outlined"
        size="small"
        label="Chinese"
        className={classes.chip}
        color="secondary"
      />
      <Chip
        variant="outlined"
        size="small"
        label="Chinese"
        className={classes.chip}
        color="secondary"
      />
      <Chip
        variant="outlined"
        size="small"
        label="Chinese"
        className={classes.chip}
        color="secondary"
      />
      <Chip
        variant="outlined"
        size="small"
        label="Chinese"
        className={classes.chip}
        color="secondary"
      />
      <Chip
        variant="outlined"
        size="small"
        label="Chinese"
        className={classes.chip}
        color="secondary"
      />
      <Chip
        variant="outlined"
        size="small"
        label="Chinese"
        className={classes.chip}
        color="secondary"
      />
      <Chip
        variant="outlined"
        size="small"
        label="Chinese"
        className={classes.chip}
        color="secondary"
      /> */}
    </div>
  );
}