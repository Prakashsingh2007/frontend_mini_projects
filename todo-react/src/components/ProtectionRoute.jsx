import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";

function ProtectionRoute({children}){

const {user}=useContext(AuthContext);

if(!user){

return <Navigate to="/login"/>

}

return children;

}

export default ProtectionRoute;