import {useContext} from "react";
import {AuthContext} from "../Context/AuthContext";


function Dashboard(){

const {user}=useContext(AuthContext);


return(

<div>

<h1>
Dashboard
</h1>


{
user && 
<p>
Welcome {user.username}
</p>
}


</div>

)

}


export default Dashboard;