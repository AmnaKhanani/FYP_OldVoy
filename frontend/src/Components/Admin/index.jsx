import React from "react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import TopBar from "../NewComponents/Topbar";
import "../Dashboard/index.css";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import DrawerMobileNavigation from "../NewComponents/SideBar/SideBar";
import Container from "@mui/material/Container";
// import NavBar from '../NewComponents/navbar/NavBar';
import Box from "@mui/material/Box";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import User from "../Admin/User.png";
import Ambulance from "../Admin/Ambulance.png";
import Appointments from "../Admin/Appointments.png";
import Hospital from "../Admin/Hospital.png"
export default function DashBoard() {
  const [sidebarOpen, setSidebarOpen] = React.useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen); // Toggle the state of the sidebar
  };

  return (
    <>
      <div className="dashboard">
        <div className="">
          <DrawerMobileNavigation
            open={sidebarOpen}
            toggleSidebar={toggleSidebar}
          />
        </div>
        <div className="topbar">
          <TopBar toggleSidebar={toggleSidebar} />

          <div className="Admin">
          <Typography
                    gutterBottom
                    variant="h4"
                    component="div"
                    margin={2}
                  >
                    Admin Dashboard
                  </Typography>
          </div>

          <Container   maxWidth="400rem" style={{
            display: "flex",
          }}>
            <div className="User">
              <Card sx={{ maxWidth: 150 }}>
                <CardMedia style={{
                 height:"12vh"
                }} image={User} />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    align="center"
                  >
                    User
                  </Typography>
                </CardContent>
              </Card>
            </div>
            <div className="Ambulance">
              <Card sx={{ maxWidth: 160 }}>
                <CardMedia
                  style={{
                    height:"12vh"
                    ,width:"5vw"
                   }}
                  image={Ambulance}
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    align="center"
                  >
                    Ambulance
                  </Typography>
                </CardContent>
              </Card>
            </div>
            <div className="Appointments">
              <Card sx={{ maxWidth: 160 }}>
                <CardMedia
                 style={{
                  height:"12vh"
                  ,width:"5vw"
                 }}
                  image={Appointments}
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    align="center"
                  >
                    Appointments
                  </Typography>
                </CardContent>
              </Card>
            </div>
            <div className="Hospitals">
              <Card sx={{ maxWidth: 160 }}>
                <CardMedia
                  style={{
                    height:"12vh",
                    width:"5vw",
                   }}
                  image={Hospital}
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    align="center"
                  >
                    Hospitals
                  </Typography>
                </CardContent>
              </Card>
            </div>
          </Container>
        </div>
      </div>
    </>
  );
}
