import React from 'react'
import TopBar from '../NewComponents/Topbar';
import '../Dashboard/index.css';
import DrawerMobileNavigation from '../NewComponents/SideBar/SideBar';




export default function FallReports() {

  const [sidebarOpen, setSidebarOpen] = React.useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen); 
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