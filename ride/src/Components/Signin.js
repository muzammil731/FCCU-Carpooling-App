import React, { useState } from 'react'
// import { ReactSession } from 'react-client-session';
import { Link } from 'react-router-dom'
import axios from 'axios'
import { Navigate } from 'react-router-dom';


export default function Signin() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    // const [apiResponse, setAPIResponse] = useState('');
    const [alertMessage, setAlertMessage] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [redirect, setRedirect] = useState(false);


    const submitApidata = () => {

        const data = { "username": username, "password": password }
        axios({
            method: 'post',
            url: 'http://localhost:8000/loginApi/', data
        })
            .then((response) => {
                // let res = setAPIResponse(JSON.stringify(response.data.success));

                if (!response.data.success) {
                    setAlertMessage(JSON.stringify(response.data.error_message));
                } else {
                    setAlertMessage('call successful!');
                    localStorage.setItem('user', JSON.stringify(response.data.user));
                    if(response.data.is_rider){
                        localStorage.setItem('user_type', 'rider');
                    }
                    else{
                        localStorage.setItem('user_type', 'driver');
                    }
                    window.location.href = "/"
                }
            })
            .catch((error) => {
                console.log(error);
            });



    }



    return (
        <>



            <div className='row'>
                <div className='col-lg-7' style={{ backgroundImage: "url('assets/images/4.jpg')", backgroundSize: "cover" }}>


                    <div className="login-section" >
                    </div>
                </div>

                <div className='col-lg-5'>



                    <div className="limiter">
                        <div className="container-login100">
                            <div className="login-wrapper">
                                <form className="login-form " onSubmit={submitApidata}>
                                    <span className="login-form-title p-b-43 " style={{ marginTop: "10px", marginBottom: "30px" }}>
                                        Login to continue
                                    </span>
                                    {alertMessage && (
                                        <div className="alert alert-danger" role="alert">
                                            {alertMessage}
                                        </div>
                                    )}

                                    <div className="wrap-input100 validate-input" data-validate="Valid email is required: ex@abc.xyz">
                                        <input className="input100" type="text" name="username" value={username} onChange={(e) => setUsername(e.target.value)} />
                                        <span className="focus-input100"></span>
                                        <span className="label-input100">Username</span>
                                    </div>


                                    <div className="wrap-input100 validate-input" data-validate="Password is required">
                                        <input className="input100" type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                                        <span className="focus-input100"></span>
                                        <span className="label-input100">Password</span>
                                    </div>






                                </form>

                                <div className="container-login-form-btn">
                                    <button className="login-form-btn" type='submit' onClick={submitApidata} >
                                        Login
                                    </button>
                                </div>

                                <div className="text-center p-t-46 p-b-20" style={{ textAlign: "center", marginTop: "20px", width: "100%" }}>
                                    <Link to="/signup">
                                        or sign up
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>







    )
}
