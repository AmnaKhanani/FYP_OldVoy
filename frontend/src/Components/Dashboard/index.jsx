import React from 'react'


import TopBar from '../NewComponents/Topbar';
import '../Dashboard/index.css';
import DrawerMobileNavigation from '../NewComponents/SideBar/SideBar';
// import NavBar from '../NewComponents/navbar/NavBar';



export default function DashBoard() {

  const [sidebarOpen, setSidebarOpen] = React.useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen); // Toggle the state of the sidebar
  };
  return (
    <>
     
<div className="dashboard">
  <div className="">
  
      <DrawerMobileNavigation open={sidebarOpen} toggleSidebar={toggleSidebar} />
  </div>
  <div className="topbar" >

      <TopBar toggleSidebar={toggleSidebar}/>
  </div>

</div>


    </>
  )
}