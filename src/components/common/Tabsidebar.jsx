import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Package1 from '../Package/Package1';
import DayPackage from '../Package/DayPackage';
import TravallerPackage from '../Package/TravallerPackage';
import FamilyPackage from '../Package/FamilyPackage';
import { EntertainmentPackage } from '../Package/EntertaimentPackage';
import FoodPackage from '../Package/FoodPackage';
import './Tab.css'

function TabPanel(props) {
  const { children, value, index, hoverColor, ...other } = props;

  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      {...other}
    >
      {value === index && (
        <Box
          sx={{ p: 2, bgcolor: isHovered ? hoverColor : 'background.paper',
            display: 'flex',
            justifyContent: 'left',
            alignItems: 'left',
            height: '100%',
            color:"#B07D3B"}}
        >
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
  hoverColor: PropTypes.string,
};

TabPanel.defaultProps = {
  hoverColor: '#b07d3b4f',
   // Default hover color
  //  fontFamily: "Quicksand sans-serif" 
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

export default function VerticalTabs() {
  const [value, setValue] = React.useState(0);
  const [hoveredTab, setHoveredTab] = React.useState(null);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleMouseEnter = (index) => {
    setHoveredTab(index);
  };

  const handleMouseLeave = () => {
    setHoveredTab(null);
  };

  return (
    <Box
      sx={{ flexGrow: 0, bgcolor: 'background.paper', display: 'flex',width:700  }}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: 'divider' }}
      >
        <Tab
          label="Day Trips"
          {...a11yProps(0)}
          onMouseEnter={() => handleMouseEnter(0)}
          // onMouseLeave={handleMouseLeave}
        />
        <Tab
          label="Traveller Choice"
          {...a11yProps(1)}
          onMouseEnter={() => handleMouseEnter(1)}
          
        />
        <Tab
          label="Family Friendly Activities"
          {...a11yProps(2)}
          onMouseEnter={() => handleMouseEnter(2)}
         
        />
        <Tab
          label="Entertainment Tickets"
          {...a11yProps(3)}
          onMouseEnter={() => handleMouseEnter(3)}
         
        />
        <Tab
          label="Food & Drink"
          {...a11yProps(4)}
          onMouseEnter={() => handleMouseEnter(4)}
         
        />
        {/* <Tab label="Item Six" {...a11yProps(5)} />
        <Tab label="Item Seven" {...a11yProps(6)} /> */}
      </Tabs>

      {/* TabPanels are conditionally rendered based on hoveredTab */}
      {hoveredTab !== null && (
        <TabPanel value={hoveredTab} index={hoveredTab} >
          {hoveredTab === 0 && <DayPackage/>}
          {hoveredTab === 1 && <TravallerPackage/>}
          {hoveredTab === 2 &&  <FamilyPackage/>}
          {hoveredTab === 3 && <EntertainmentPackage/>}
          {hoveredTab === 4 && <FoodPackage/>}
          {/* Add more conditions for other TabPanels if needed */}
        </TabPanel>
      )}
    </Box>
  );
}
