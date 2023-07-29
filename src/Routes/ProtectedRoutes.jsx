import { Outlet, Navigate } from "react-router-dom";

import { useAuth } from "../Context/AutContext";

const ProtectedRoute = () =>{
    const {isAuthenticated} = useAuth()

    return isAuthenticated ? <Outlet/>: <Navigate to="/"/>;
}

export default ProtectedRoute;