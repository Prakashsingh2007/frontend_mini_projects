import {useParams} from "react-router-dom";


function Profile(){

    const {username}=useParams();


    return(
        <h1>
            Welcome {username}
        </h1>
    )
}


export default Profile;