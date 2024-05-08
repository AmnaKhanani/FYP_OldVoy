import logo from './logo.svg';
import './App.css';
import Login from './Components/Login';
import Signup from './Components/Sign-up';
import LandingPage from './Components/Landing-page';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DashBoard from './Components/Dashboard';
import FallReports from './Components/FallReports';
import InfoForm from './Components/InfoForm';
import DataTable from './Components/NewComponents/DataTable';
import Admin from './Components/Admin';


function App() {
  return (
    // <LandingPage/>
    // <DashBoard/>
    // <SideBar/>
    // <TopBar/>
    // <DataTable/>

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        {/* <Route path="/" element={<sideBar />} /> */}

        <Route path="/login" element={<Login />} />
        <Route path="/signUp" element={<Signup />} />
        <Route path="/dashboard" element={<DashBoard />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/fallreports" element={<FallReports />} />
        <Route path="/landingpage" element={<LandingPage />} />
        <Route path="/info_form" element={<InfoForm />} />



      </Routes>
    </BrowserRouter>


  );
}

export default App;
