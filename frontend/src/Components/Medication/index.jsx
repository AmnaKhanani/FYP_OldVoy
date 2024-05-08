import React from 'react'
import TopBar from '../Topbar';
import DrawerMobileNavigation from '../NewComponents/SideBar/SideBar';
import '../Medication/index.css';
import AddMedication from '../AddMedication';
import { Container } from '@mui/material';
//import MediTable from '../MediTable';


export default function Medication() {
    const [sidebarOpen, setSidebarOpen] = React.useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen); // Toggle the state of the sidebar
  };
    return (
        <>
    <div className="medication">
    <div className="">
        {/* <SideBar /> */}
        <DrawerMobileNavigation open={sidebarOpen} toggleSidebar={toggleSidebar} />
    </div>
    <div className="topbar" >
        {/* <NavBar toggleSidebar={toggleSidebar}/> */}
        <TopBar toggleSidebar={toggleSidebar}/>
    </div>
  </div>

  <div>
      <Container className='add-medication'>
        <AddMedication/>
      </Container>

     {/*  <Container> 
        <MediTable/>
      </Container> */}
  </div>
  
  </>
  
    )
}