import React, {  useContext } from "react";
import { Outlet,Navigate} from "react-router-dom";
import { Appcontext } from "./Navi";

function ProtectedRoute() {
    const {userauth} = useContext(Appcontext);

    return (
        userauth !== ""  ?   <Outlet/> : <Navigate to={"/"} /> 
    );
}

export default ProtectedRoute;