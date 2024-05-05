import * as React from 'react';
import Drawer from "@mui/material/Drawer";
import { List, ListItemButton, ListItem, ListItemIcon, ListItemText, useMediaQuery, IconButton } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import DashboardIcon from "@mui/icons-material/Dashboard";
import MedicationLiquidIcon from "@mui/icons-material/MedicationLiquid";
import AddAlertIcon from "@mui/icons-material/AddAlert";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import logo from "./assets/LOGO.png";
import { LuLayoutDashboard } from "react-icons/lu";
import './sidebar.css'

const drawerWidth = 320;

const DrawerMobileNavigation = ({ open, toggleSidebar }) => {
  const isLargeScreen = useMediaQuery('(min-width: 1024px)');
  const isTablet = useMediaQuery('(max-width: 1024px)');

  React.useEffect(() => {
    if (isLargeScreen && !open) {
      toggleSidebar(true); // Open sidebar on initial load on large screens if it's not already open
    }
  }, [isLargeScreen, open, toggleSidebar]);



  const navMenu = [
  "Dashboard",
    "Medication Management",
    "Appointments",
    "Reminder and Alerts"
  ];

  return (
    <React.Fragment>
      
      <Drawer 
        open={open && (isLargeScreen || isTablet)} // Open sidebar initially on large screens and tablets
        onClose={() => toggleSidebar(false)}
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
          },
        }}
        variant={isLargeScreen ? 'persistent' : 'temporary'} // Use 'persistent' variant on large screens
        className=''
      >
        <img
          src={logo}
          alt=""
          style={{
            width: "150px",
            height: "150px",
            marginLeft: "35px"
          }}
        />
        <List className='padd'>
          {navMenu.map((text, index) => (
            <ListItem
              key={text}
              disablePadding
              onClick={() => {
                // Handle navigation here
                // navigate(`/${text.toLowerCase().replace(/\s/g, "")}`);
              }}
              className=' navItems'
            >
              <ListItemButton className=''>
                <ListItemIcon
                  style={{
                    color: "#004F82",
                  }}
                  
                >
                  {index % 4 === 0 ? (
                    <LuLayoutDashboard size={22} className='icon' />
                  ) : index % 4 === 1 ? (
                    <MedicationLiquidIcon className='icon' />
                  ) : index % 4 === 2 ? (
                    <LibraryBooksIcon className='icon' />
                  ) : (
                    <AddAlertIcon className='icon' />
                  )}
                </ListItemIcon>
                <ListItemText primary={text} className='' />
              </ListItemButton>
            </ListItem>
          ))}

          {/* {navMenu.map((text, index )=> (
            <ul key={index}>
              <li>

              </li>
            </ul>
          ))} */}
        </List>
      </Drawer>
    </React.Fragment>
  );
}

export default DrawerMobileNavigation;
