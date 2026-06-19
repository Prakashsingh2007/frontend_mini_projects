import {Link} from "react-router-dom";
import {useContext} from "react";
import {useNavigate} from "react-router-dom";

import {AuthContext} from "../Context/AuthContext";


function Navbar(){

const {user,logout}=useContext(AuthContext);
const navigate = useNavigate();

const handleLogout = () => {
logout();
navigate("/login");
};


return(

<>


<nav>

<Link to="/">
Home
</Link>


<Link to="/about">
About
</Link>


<Link to="/profile/prakash">
Profile
</Link>


<Link to="/dashboard">
Dashboard
</Link>


<Link to="/login">
Login
</Link>


</nav>


{
user &&

<button onClick={handleLogout}>
Logout
</button>

}


</>

)

}


export default Navbar;