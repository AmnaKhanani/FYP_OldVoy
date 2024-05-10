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
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import User from "../Admin/User.png";
import Ambulance from "../Admin/Ambulance.png";
import Appointments from "../Admin/Appointments.png";
import Hospital from "../Admin/Hospital.png";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
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
            <Typography gutterBottom variant="h4" component="div" margin={2}>
              Admin Dashboard
            </Typography>
          </div>

          <Container
            maxWidth="400rem"
            style={{
              display: "flex",
            }}
          >
            <Row className="g-5">
              {Array.from({ length: 1 }).map((_, idx) => (
                <Col key={idx}>
                  <Card style={{
                    width:"15vw",margin:"5px"
                  }}>
                    <Card.Img variant="top" height={100} src={User} />
                    <Card.Body>
                      <Card.Title>User</Card.Title>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
            <Row className="g-5">
              {Array.from({ length: 1 }).map((_, idx) => (
                <Col key={idx}>
                  <Card style={{
                    width:"15vw",margin:"5px"
                  }}>
                    <Card.Img variant="top" height={100} src={Ambulance} />
                    <Card.Body>
                      <Card.Title>Ambulance</Card.Title>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
            <Row className="g-5">
              {Array.from({ length: 1 }).map((_, idx) => (
                <Col key={idx}>
                  <Card style={{
                    width:"15vw",margin:"5px"
                  }} >
                    <Card.Img variant="top" height={100} src={Appointments} />
                    <Card.Body>
                      <Card.Title >Appointments</Card.Title>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
            <Row className="g-5">
              {Array.from({ length: 1 }).map((_, idx) => (
                <Col key={idx}>
                  <Card style={{
                    width:"15vw",margin:"5px"
                  }}>
                    <Card.Img variant="top" height={100} src={Hospital} />
                    <Card.Body>
                      <Card.Title>Hospitals</Card.Title>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
}
