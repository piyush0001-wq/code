import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
    margin: "20px 0",

  },
  schedule: {
    height: "80vh",
    width: "100%",
  },
  appbar: {
    background: "black",
    color: "white",
  }
}));

function BookAppointment() {

  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


  return (
    <div className={classes.root}>
      <AppBar position="static" >
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          className={classes.appbar}
          variant="scrollable"
          scrollButtons="auto"
        >
          <Tab label="Item One" {...a11yProps(0)} />
          <Tab label="Item Two" {...a11yProps(1)} />
          <Tab label="Item Three" {...a11yProps(2)} />
          <Tab label="Item Four" {...a11yProps(3)} />
          <Tab label="Item Five" {...a11yProps(4)} />
          <Tab label="Item Six" {...a11yProps(5)} />
          <Tab label="Item Seven" {...a11yProps(6)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <div className={classes.schedule}>
          <h3>Item One</h3>
        </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <div className={classes.schedule}>
          <h3>Item Two</h3>
        </div>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <div className={classes.schedule}>
          <h3>em Three</h3>
        </div>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <div className={classes.schedule}>
          <h3>tem Four</h3>
        </div>
      </TabPanel>
      <TabPanel value={value} index={4}>
        <div className={classes.schedule}>
          <h3>tem Five</h3>
        </div>
      </TabPanel>
      <TabPanel value={value} index={5}>
        <div className={classes.schedule}>
          <h3>Item Six</h3>
        </div>
      </TabPanel>
      <TabPanel value={value} index={6}>
        <div className={classes.schedule}>
          <h3>em Seven</h3>
        </div>
      </TabPanel>
    </div>
  )
}

export default BookAppointment
