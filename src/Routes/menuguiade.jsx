import React, { useState, useEffect } from 'react';
// ... (otras importaciones)
 const NavMenu= () => {
  // ...
  // Agrega un estado para rastrear si el usuario ha iniciado sesión
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userProfile, setUserProfile] = useState({});
   // Simular una llamada a la API para verificar si el usuario ha iniciado sesión
  useEffect(() => {
    // Reemplaza esta función con una llamada a tu API para obtener la información del usuario
    async function checkLoginStatus() {
      const userData = await fetchUserProfileFromAPI();
      if (userData) {
        setIsLoggedIn(true);
        setUserProfile(userData);
      } else {
        setIsLoggedIn(false);
      }
    }
    checkLoginStatus();
  }, []);
   // ... (resto del código del componente)
   return (
    // ... (resto del JSX)
    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'flex-end' }}>
      {isLoggedIn ? (
        <>
          <Avatar src={userProfile.imageURL} />
          <Typography>{userProfile.username}</Typography>
        </>
      ) : (
        options.map((option) => {
          const { btnName, url } = option.login;
          return (
            <Button
              component={Link}
              to={url}
              sx={{ color: 'black' }}
            >
              {btnName}
            </Button>
          );
        })
      )}
    </Box>
    // ... (resto del JSX)
  );
}
export default  NavMenu