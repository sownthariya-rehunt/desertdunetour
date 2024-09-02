import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import './Slider_tab.css'
import Packages from './Packages';
import img1 from "../../../assets/image_desert/new_pic/Website First Page Banner.png"
import img2 from "../../../assets/image_desert/2.jpg"
import img3 from "../../../assets/image_desert/1.jpg"
import img4 from "../../../assets/image_desert/banner5.jpg"
import img5 from "../../../assets/image_desert/3.jpg"
import TravallerchoicePackage from './Travallerchoicepackage';

import FamilyfriendsPackage from './FamilyfriednsPackage';
import EntertaimentPackage from './EntertaimentPackage';
import FooddrinkPackage from './Fooddrinkpackage';
import DaytripPakage from './DaytripPackage';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';


function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;
 
 

  // const handleChange = (event, newValue) => {
  //   setValue(newValue);
  // };

  const a11yProps = (index) => {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  };

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 1 }}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function Sliider_tab() {
  const [value, setValue] = React.useState(0);
 
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('xl'));
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>




    <Box ls={{ width: '100%'}} className="ms-auto me-auto bg-transprant ">


    <CustomTabPanel value={value} index={0} className="container-fluid">
    <div className="image-container">
        <img loading="lazy" src={img1} className="col-12 h" alt="Image" />
        <a href='https://wa.me/971586150070' target='blank'>  <button className="overlay-button">Book</button></a>
      </div>
       
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1} className="container-fluid">
      <div className="image-container">
        <img loading="lazy" src={img2} className="col-12 h" alt="Image" />
        {/* <div className='btn1 '> <h1>Visit Abu Dhabi This Year</h1>
        <h6>To make the most of your experience simply,go where ever you choose we will be waiting for you</h6></div> */}
        
        <a href='https://wa.me/971586150070' target='blank'>   <button className="overlay-button">Book</button></a>
      </div>
      
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2} className="container-fluid">
      <div className="image-container">
        <img loading="lazy" src={img3} className="col-12 h" alt="Image" />
        {/* <div className='btn1'> <h1>Visit Abu Dhabi This Year</h1>
        <h6>"Embark on your journey, explore every horizon – we'll be here, ready to make your adventure unforgettable."</h6></div> */}
       
        <a href='https://wa.me/971586150070' target='blank'>   <button className="overlay-button">Book</button></a>
      </div>
     
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3} className="container-fluid">
      <div className="image-container">
        <img loading="lazy" src={img4} className="col-12 h" alt="Image" />
        {/* <div className='btn1'> <h1>Visit Abu Dhabi This Year</h1>
        <h6>To make the most of your experience simply,go where ever you choose we will be waiting for you</h6></div> */}
        <a href='https://wa.me/971586150070' target='blank'>    <button className="overlay-button">Book</button></a>
      </div>
      
      </CustomTabPanel>
      <CustomTabPanel value={value} index={4} className="container-fluid">
      <div className="image-container">
        <img loading="lazy" src={img5} className="col-12 h" alt="Image" />
        {/* <div className='btn1'> <h1>Visit Abu Dhabi This Year</h1>
        <h6>"Embark on your journey, explore every horizon – we'll be here, ready to make your adventure unforgettable."</h6></div> */}
        <a href='https://wa.me/971586150070' target='blank'>  <button className="overlay-button ">Book</button></a>
      </div>
    </CustomTabPanel>
    <div className='container-fluid'>
    <Box
      sx={{
        borderBottom: 1,
        borderColor: 'divider',
        overflowX: 'auto', // Enable horizontal scrolling on small screens
      }}
      className=""
    >
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="basic tabs example"
        variant={isSmallScreen ? 'scrollable' : 'standard'} // Use scrollable variant on small screens
        scrollButtons="auto" // Automatically show scroll buttons
        allowScrollButtonsMobile // Show scroll buttons on mobile
      >
        <Tab label="Day Trips" {...a11yProps(0)} className="clr" />
        <Tab label="Traveller Choice" {...a11yProps(1)} className="clr" />
        <Tab label="Family Friendly Activities" {...a11yProps(2)} className="clr" />
        <Tab label="Entertainment Tickets" {...a11yProps(3)} className="clr" />
        <Tab label="Food & Drink" {...a11yProps(4)} className="clr" />
      </Tabs>
    </Box>
    </div>
      
      <CustomTabPanel value={value} index={0}>
 <DaytripPakage/>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
      <TravallerchoicePackage/>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
     <FamilyfriendsPackage/>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
      <EntertaimentPackage/>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={4}>
     <FooddrinkPackage/>
      </CustomTabPanel>
    </Box>
    </div>

  );
}
