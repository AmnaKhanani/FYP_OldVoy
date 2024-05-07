import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import DashboardIcon from "@mui/icons-material/Dashboard";
import MedicationLiquidIcon from "@mui/icons-material/MedicationLiquid";
import AddAlertIcon from "@mui/icons-material/AddAlert";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import useMediaQuery from "@mui/material/useMediaQuery";
import logo from "../Login/LOGO.png";

const drawerWidth = 320;

export default function SideBar() {
  const isMobile = useMediaQuery("(max-width:600px)");
  const [mobileOpen, setMobileOpen] = React.useState(!isMobile);
  const [showIcons, setShowIcons] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
    setShowIcons(!showIcons);
  };

  const navMenu = [
    "Dashboard",
    "Medication Management",
    "Appointments",
    "Reminder and Alerts"
  ];

  return (
    <div>
      <Box sx={{ display: "flex", width: "" }}>
        <CssBaseline />

        
            {/* {isMobile && (
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ mr: 2, display: { sm: "none" } }}
              >
                <MenuIcon/>
              </IconButton>
            )} */}
          

        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: drawerWidth
            }
          }}
          variant={isMobile ? "temporary" : "permanent"}
          anchor="left"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true // Better open performance on mobile.
          }}
        >
          <img
            src={logo}
            alt=""
            style={{
              width: "150px",
              height: "150px",
              marginLeft: "35px"
            }}
          ></img>

          <Divider />
          <List>
            {navMenu.map((text, index) => (
              <ListItem
                key={text}
                disablePadding
                onClick={() => {
                  // Handle navigation here
                  // navigate(`/${text.toLowerCase().replace(/\s/g, "")}`);
                }}
              >
                <ListItemButton>
                  <ListItemIcon
                    style={{
                      color: "#004F82",
                      // visibility: showIcons ? "visible" : "hidden"
                    }}
                  >
                    {index % 4 === 0 ? (
                      <DashboardIcon />
                    ) : index % 4 === 1 ? (
                      <MedicationLiquidIcon />
                    ) : index % 4 === 2 ? (
                      <LibraryBooksIcon />
                    ) : (
                      <AddAlertIcon />
                    )}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
        </Drawer>

        <Box
          component="main"
          sx={{
            flexGrow: 1,
            bgcolor: "background.default",
            p: 3,
            marginLeft: isMobile ? 0 : drawerWidth
          }}
        >
          <Toolbar />
          {/* Your main content goes here */}
        </Box>
      </Box>
    </div>
  );
}
