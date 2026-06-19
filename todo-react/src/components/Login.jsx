import {useState} from "react";
import {useNavigate} from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";

function Login(){

const [email,setEmail]=useState("");
const [password,setPassword]=useState("");
const [error,setError]=useState("");
const {login} = useContext(AuthContext);
const navigate=useNavigate();
const handleSubmit=(e)=>{
    e.preventDefault();
    setError("");
    if(!email){

setError("Email required");

return;

}


if(password.length < 6){

setError("Password must be at least 6 characters");

return;

}


login(email);

navigate("/dashboard");
}


return(

<div>

<h2>
Login
</h2>



<form onSubmit={handleSubmit}>  
<input

type="email"

placeholder="Email"

value={email}

onChange={(e)=>setEmail(e.target.value)}

/>


<input

type="password"

placeholder="Password"

value={password}

onChange={(e)=>setPassword(e.target.value)}

/>
<button>
Login
</button>
</form>

{
error && <p>{error}</p>
}


</div>

)

}

export default Login;