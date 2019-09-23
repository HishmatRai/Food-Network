import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`nav-tabpanel-${index}`}
      aria-labelledby={`nav-tab-${index}`}
      {...other}
    >
      <Box p={3}>{children}</Box>
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `nav-tab-${index}`,
    'aria-controls': `nav-tabpanel-${index}`,
  };
}

function LinkTab(props) {
  return (
    <Tab
      component="a"
      onClick={event => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function NavTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  function handleChange(event, newValue) {
    setValue(newValue);
  }

  return (
    <div className={classes.root} style={{backgroundColor:"white"}} >
      <AppBar position="static">
        <Tabs
          variant="fullWidth"
          value={value}
          onChange={handleChange}
          aria-label="nav tabs example"
          style={{backgroundColor:"white",width:"100%"}}
        >
          <LinkTab  style={{color:"#d70f64"}}label="PENDING" href="/drafts" {...a11yProps(0)} />
          <LinkTab style={{color:"#d70f64"}} label="PROGRESS" href="/trash" {...a11yProps(1)} />
          <LinkTab style={{color:"#d70f64"}} label="DELIVERED" href="/spam" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <Paper>
       <p style={{color:"#d70f64",fontWeight:"bold",textAlign:"center",fontSize:"20px",padding:"20px"}}>NO ORDER PENDING</p>


      </Paper>
      </TabPanel>
      <TabPanel value={value} index={1}>
      <Paper>
       <p style={{color:"#d70f64",fontWeight:"bold",textAlign:"center",fontSize:"20px",padding:"20px"}}>NO ORDER PROGRESS</p>


      </Paper>
      </TabPanel>
      <TabPanel value={value} index={2}>
      <Paper>
       <p style={{color:"#d70f64",fontWeight:"bold",textAlign:"center",fontSize:"20px",padding:"20px"}}>NO ORDER DELIVERED</p>


      </Paper>
      </TabPanel>
    </div>
  );
}