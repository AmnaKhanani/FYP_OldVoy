import React from "react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import TopBar from "../NewComponents/Topbar";
import "../Dashboard/index.css";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import DrawerMobileNavigation from "../NewComponents/SideBar/SideBar";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import TextField from "@mui/material/TextField";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
// import NavBar from '../NewComponents/navbar/NavBar';
import PatientDetails from '../PatientDetails';
import Hospital from '../Hospital';
import Activities from '../Activities';



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

          <Container maxWidth="400rem">
            <div className="topbar1">
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DateCalendar />
              </LocalizationProvider>
            </div>

            <div className="date">
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={["DatePicker"]}>
                  <DatePicker label="Basic date picker" />
                </DemoContainer>
              </LocalizationProvider>

              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={["TimePicker"]}>
                  <TimePicker label="Basic time picker" />
                </DemoContainer>
              </LocalizationProvider>
            </div>

            <div className="input">
          <TextField
            id="outlined-textarea"
            label="Add Title"
            placeholder="Placeholder"
            multiline
          />
        </div>
        <div className="input1">
          <TextField
            id="outlined-textarea"
            label="Add Doctor"
            placeholder="Placeholder"
            multiline
          />
        </div>

        <div className="leftBar">
          <Card sx={{ maxWidth: 350,height:"450px",margin:14}}>
           
            <CardContent>
              <Typography gutterBottom variant="h4" component="div">
                Up Coming Activities
              </Typography>
              <Typography variant="body2" color="text.secondary">
              In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. 
              Lorem ipsum may be used as a placeholder before the final copy is available.
              </Typography>
            </CardContent>  
          </Card>
        </div>
          </Container>
        </div>  
      </div>
      <div className='containers'>
          <Container >
            <PatientDetails />
          </Container>

          <Container className='hospital-container'>
            <Hospital />
          </Container>

          <Container className='activities-container'>
            <Activities />
          </Container>


        </div>
    </>
  );
}
