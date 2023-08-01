import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import "./header.css"
import { useAuth } from '../../Context/AutContext';


import { Link } from "react-router-dom"
const pages =[
  {
    item: {
      id:1,
      titulo: "Servicios",
      url:"Servicios"
    },
  },
 {
  item:{
    id:3,
    titulo: "Sobre nosotros",
    url: "Sobre"
  }
  },
  {
    item:{
      id:4,
      titulo: "Pago",
      url:"Pagos"
    }
  },
]
/* const pages = ['Perfil', 'Servicios', 'Billetera','Sobre']; */
const options = [
  {
    login: {
     btnName: "Iniciar sesion",
     url: "Login"
    },
  },
 {
  login:{
    btnName: "Registrate",
    url: "Register"
  }
  },];
const settings = ['Perfil', 'Movimientos', 'Dashboard', 'Logout'];

function NavMenu() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const {isAuthenticated} =useAuth()

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar color='inherit' position="fixed" sx={
      {
        justifyContent:"space-evenly"
      }
    }>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
       
          <Typography
            variant="h6"
            noWrap
            component={Link}
            to="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Inicio
          </Typography>
            
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page, i) => {
                const {titulo,url} = page.item
                return(
                  <MenuItem key={i} onClick={handleCloseNavMenu}>
                  <Typography  
                  component={Link} 
                  to={url} 
                  textAlign="center"
                  sx={{ my: 2, color: 'black', display: 'block', textDecoration:"none" }}
                  >
                    {titulo}
                  </Typography>
                </MenuItem>
                )
              })}
              <Divider variant='middle' />
              {options.map((option,i) => {
                const {btnName, url} = option.login;
                return(
                <MenuItem key={i} onClick={handleCloseNavMenu}>
                <Typography 
                component={Link} 
                to={url}
                textAlign="center"
                sx={{ my: 2, color: 'black', display: 'block', textDecoration:"none" }}
                >
                  {btnName}
                </Typography>
              </MenuItem>
            )})}
            </Menu>
          </Box>

          <Typography
            variant="h5"
            noWrap
            component={Link}
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
            
          >
            Home
            
          </Typography>
          <Box  sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }  }}>
            {
              pages.map((page)=>{
                const {titulo, url, id} = page.item
                return(
                  <Button
                  key={id}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: 'black', display: 'block' }}
                  component={Link}
                  to={`/${url}`}
                  className="nav-item"
                >
                  {titulo}
                </Button>
                )
              })
            }
          </Box>

          {isAuthenticated ? false : (
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'flex-end' }}>
              {options.map((option, i) => {
                const { btnName, url } = option.login;
                return (
                  <Button
                    key={i}
                    component={Link}
                    to={`/${url}`}
                    sx={{ color: 'black' }}
                  >
                    {btnName}
                  </Button>
                );
              })}
            </Box>
          )}
  
           
           
        

 

         
                    
            {isAuthenticated ? (
              <>
               <Box sx={{ flexGrow: 0 }}>
                  <Tooltip title="Open settings">
                    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                      <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                    </IconButton>
                  </Tooltip>
                  <Menu
                    sx={{ mt: '45px' }}
                    id="menu-appbar"
                    anchorEl={anchorElUser}
                    anchorOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                    }}
                    open={Boolean(anchorElUser)}
                    onClose={handleCloseUserMenu}
                  >
                    {settings.map((setting) => (
                      <MenuItem key={setting} onClick={handleCloseUserMenu}>
                        <Typography textAlign="center">{setting}</Typography>
                      </MenuItem>
                    ))}
                  </Menu>
                </Box>
              </>
            ) : null}

        

        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default NavMenu;
