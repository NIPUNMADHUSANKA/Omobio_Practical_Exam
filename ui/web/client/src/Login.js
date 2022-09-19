import axios from 'axios';
import {
    useNavigate
} from "react-router-dom";

import React, { useState } from 'react'


function Login() {

    let navigate = useNavigate();

    const [user, setUser] = useState({ username: '', password: '' })

    const [iscorrect, setiscorrect] = useState();

    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    }

    const submitForm = (e) => {
        e.preventDefault();

        axios.post("http://localhost:80/Trainee-Associate-Assignment/bizlogic/login", user)
        .then(data => {
       

        if(data.data.length){
            localStorage.setItem("ID",data.data[0].id);
            localStorage.setItem("Name",data.data[0].name);
            localStorage.setItem("Email",data.data[0].email);
            localStorage.setItem("Username", data.data[0].username);

            navigate("/info");
            
        }
        else{
            setiscorrect("Wrong Passsword");
        }
        })
        .catch(error => {
            console.log(error);
        })

        
    }

    return (
        <div>
              <h1 style={{color:"red"}}>  {iscorrect} </h1>
            <form onSubmit={submitForm}>
                <div className="main-box">
                    <div className="row">
                        <div className="col-md-12 text-center"> <h1>Login Page</h1></div>
                    </div>
                    <div className="row">
                        <div >UserName:</div>
                        <div ><input type="text" name="username"
                            onChange={handleChange} value={user.username} /></div>
                    </div>
                    <div className="row">
                        <div >Password:</div>
                        <div ><input type="password" name="password"
                            onChange={handleChange} value={user.password}
                        /></div>
                    </div>

                    <br />
                    
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <input type="submit" name="submit" className="btn btn-success" value="Login" />
                        </div>

                    </div>
                </div>
            </form>



        </div>
    )
}

export default Login