import {BrowserRouter, Routes, Route} from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import About from "./pages/About";
import Profile from "./pages/Profile";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";
import Login from "./components/Login";
import ProtectionRoute from "./components/ProtectionRoute";
import Todo from "./pages/Todo";
function App(){

return(

<BrowserRouter>

<Navbar/>


<Routes>

<Route 
path="/" 
element={<Home/>}
/>

<Route
path="/todo"
element={<Todo/>}
/>

<Route 
path="/about" 
element={<About/>}
/>


<Route 
path="/profile/:username" 
element={<Profile/>}
/>


<Route 
path="/dashboard" 
element={
<ProtectionRoute>
<Dashboard/>
</ProtectionRoute>
}
/>

<Route
path="/login"
element={<Login/>}
/>

<Route 
path="*" 
element={<NotFound/>}
/>


</Routes>


</BrowserRouter>

)

}


export default App;