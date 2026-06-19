import {useEffect, useState} from "react";


function GithubProfile(){

const [username,setUsername]=useState("");
const [error,setError]=useState("");
const [user,setUser]=useState(null);
const [loading,setLoading]=useState(false);


const searchUser = async()=>{
    setLoading(true);
    let response;
    try{
        response = await fetch(
            `https://api.github.com/users/${username}`
           );
    } catch (error) {
        setError("Error fetching user data");
        setUser(null);
        setLoading(false);
        return;
    }
    if(!response.ok){
        setError("User not found");
        setUser(null);
        setLoading(false);
        return;
    }



    const data = await response.json();


    setUser(data);
    setError("");
    setLoading(false);

}

    useEffect(() => {
        if(username) {
            searchUser();
        }
            }, [username]);



return(

<div>

<h2>
Github Profile Finder
</h2>


<input

type="text"

placeholder="Enter username"

value={username}

onChange={(e)=>setUsername(e.target.value)}

/>


<button >
Search
</button>


{
error && <p>{error}</p>
}

{loading && <p>Loading...</p>}

{
user && (

<div>

<h3>{user.name}</h3>

<img 
src={user.avatar_url}
width="100"
/>

<p>
Followers: {user.followers}
</p>

<p>
Repositories: {user.public_repos}
</p>


</div>

)

}


</div>

)

}


export default GithubProfile;