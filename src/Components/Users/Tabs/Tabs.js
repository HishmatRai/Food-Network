import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import InputPage from './../Input/Input'
import Chips from './../Chips/Chips'
import ProductCard from './../Product_Card/ProductCard'
import BackgroundImg from './../Background_Image/BackgroundImg'
import UserOrder from './../User_Order/UserOrder'
import { tsPropertySignature } from '@babel/types';
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

export default function NavTabs(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  function handleChange(event, newValue) {
    setValue(newValue);
  }

  return (
    <div style={{backgroundColor:"#eae9e7"}} className={classes.root}>
      <AppBar position="static">
  
        <Tabs
          variant="fullWidth"
          value={value}
          onChange={handleChange}
          aria-label="nav tabs example"
          style={{backgroundColor:"white",width:"100%"}}
        >
          <LinkTab style={{color:"#d70f64"}} label="RESTURANTS" href="/drafts" {...a11yProps(0)} />
          <LinkTab style={{color:"#d70f64"}} label="MY REQUESTS" href="/trash" {...a11yProps(1)} />
          {/* <LinkTab label="Page Three" href="/spam" {...a11yProps(2)} /> */}
        </Tabs>
      </AppBar>
      <TabPanel  value={value} index={0}>
      <Paper >
        

      <InputPage />

<Button style={{backgroundColor:"#d70f64",color:"white",margin:"10px",width:"24%"}}>Search</Button>
      </Paper>

      {/* <Paper style={{backgroundColor:"#eae9e7"}}> */}
<p style={{color:"#eae9e7"}}>id</p>
<Paper style={{marginTop:"0px"}}>

<Chips />
</Paper>
 {/* <BackgroundImg /> */}

<ProductCard path={props.path} />

      {/* </Paper> */}
      </TabPanel>
      <TabPanel value={value} index={1}>
       {/* <Paper>
       <p style={{color:"#d70f64",fontWeight:"bold",textAlign:"center",fontSize:"20px",padding:"20px"}}>ORDER STATUS</p>


      </Paper> */}
      <UserOrder />
      </TabPanel>
      {/* <TabPanel value={value} index={2}>
        Page Three
      </TabPanel> */}
    </div>
  );
}