import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
import './index.css'
import { useState } from 'react';
import { signOut } from '@firebase/auth';
import { useNavigate } from 'react-router-dom';
import { database } from '../../Firebase/firebaseConfig';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderColor: 'black',
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  background: 'linear-gradient(190deg, #004f82, #14c3d4)',
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '5px',
}));



const StyledInputBase = styled(InputBase)(({ theme }) => ({
  borderRadius:'20px',
  color: 'gray',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

export default function TopBar({toggleSidebar}) {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const handleClick = () => {
    signOut(database).then(val=>{
      navigate('/landingpage')


    })
  }

  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [isLoggedin, setIsLoggedin] = useState(false);

  // const login = (e) => {
  //     e.preventDefault();
  //     console.log(email, password);
  //     const userData = {
  //         email,
  //         password,
  //     };
  //     localStorage.setItem(
  //         "token-info",
  //         JSON.stringify(userData)
  //     );
  //     setIsLoggedin(true);
  //     setEmail("");
  //     setPassword("");
  // };

  // const logout = () => {
  //     localStorage.removeItem("token-info");
  //     setIsLoggedin(false);
  // };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="error">
            <NotificationsIcon style={{
                color:'#004F82'}}/>
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={17} color="error">
            {/* <AccountCircle style={{
                color:'#004F82'}} /> */}
          </Badge>
        </IconButton>
        <p>Profile</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <LogoutIcon style={{
                color:'#004F82'}} />
        </IconButton>
        <p>Logout</p>
      </MenuItem>
    </Menu>
  );

  return (
    
    <Box sx={{ flexGrow: 1 }} style={{padding: "1rem"}}>
      <AppBar position="static" style={{
        backgroundColor: 'white',
        borderRadius: '15px',
        width: '100%',
        padding: ".5rem 0",
        

      }}>
        <Toolbar className='navBar'>
          <IconButton
            size="large"
            edge="start"
            color="black"
            aria-label="menu"
            sx={{ mr: 2, display: { md: "none" } }}
            onClick={toggleSidebar}
          >
            <MenuIcon />
          </IconButton>

          <Search className='' >
            <SearchIconWrapper  >
              <div className="searchBar">

              <StyledInputBase
                placeholder="Search Here"
                inputProps={{ 'aria-label': 'search' }}
                />
              <SearchIcon className='searchIcons' style={{ 
               
              }} />
              </div>
            </SearchIconWrapper>

          </Search>

          <Box sx={{ flexGrow: 1 }} />

          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>

            <IconButton size="large" aria-label="" color="inherit">
              <Badge badgeContent={4} color="error">
                <NotificationsIcon style={{
                  color: '#004F82'
                }} />
              </Badge>
            </IconButton>

            <IconButton
              size="large"
              // aria-label="show 17 new notifications"
              color="inherit"
              aria-controls={menuId}
              onClick={handleProfileMenuOpen}
            >
              <Badge badgeContent={17} color="error">
                <AccountCircle style={{
                  color: '#004F82'
                }} />
              </Badge>
            </IconButton>
              
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-haspopup="true"
              color="inherit"
              onClick={handleClick}
              // onClickCapture={logout}
              
            >
              < LogoutIcon style={{
                color: '#004F82'
              }} />
            </IconButton>

          </Box>
            
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon style={{
                color:'#004F82'
              }} />
            </IconButton>
          </Box>
        </Toolbar>
      {renderMobileMenu}
      {renderMenu}
      </AppBar>
    </Box>
            
  );
}
