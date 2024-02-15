import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

export default function Signup() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [alertMessage, setAlertMessage] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [redirect, setRedirect] = useState(false);
    const submitApidata = () => {

        const data = { "username": username, "email": email, "password": password }
        axios({
            method: 'post',
            url: 'http://127.0.0.1:8000/registerApi/', data
        })
            .then((response) => {
                // let res = setAPIResponse(JSON.stringify(response.data.success));

                if (!response.data.success) {
                    setAlertMessage(JSON.stringify(response.data.error_message));
                } else {
                    setAlertMessage('Registered Successfully');
                    localStorage.setItem('user', JSON.stringify(response.data.user));
                    setIsLoggedIn(true);
                    setRedirect(true);
                    // history.push('/');
                    window.location.href = "/loginas"
                }
            })
            .catch((error) => {
                console.log(error);
            });
    }


    return (

        <div>
            <div className='row'>
                <div className='col-lg-7' style={{ backgroundImage: "url('assets/images/4.jpg')" , backgroundSize:"cover" }}>


                    <div className="login-section" >
                    </div>
                </div>

                <div className='col-lg-5'>
                <div className="limiter">
            <div className="container-login100">
                <div className="login-wrapper">
                    <form className="login-form validate-form">
                        <span className="login-form-title p-b-43 " style={{ marginTop: "10px", marginBottom: "30px" }}>
                            Signup Here
                        </span>

                        <div className="wrap-input100 validate-input" data-validate="Valid email is required: ex@abc.xyz">
                            <input className="input100" type="text" name="username" value={username} onChange={(e) => setUsername(e.target.value)} />
                            <span className="focus-input100"></span>
                            <span className="label-input100">Username</span>
                        </div>


                        <div className="wrap-input100 validate-input" data-validate="Valid email is required: ex@abc.xyz">
                            <input className="input100" type="text" name="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                            <span className="focus-input100"></span>
                            <span className="label-input100">Email</span>
                        </div>


                        <div className="wrap-input100 validate-input" data-validate="Password is required">
                            <input className="input100" type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                            <span className="focus-input100"></span>
                            <span className="label-input100">Password</span>
                        </div>


                    </form>

                    
                    <div className="container-login-form-btn">
                            <button className="login-form-btn" onClick={submitApidata}>
                                Signup
                            </button>
                        </div>

                        <div className="text-center p-t-46 p-b-20" style={{ textAlign: "center", marginTop: "20px",     width: "100%" }}>
                            <Link to="/signin">
                                or sign in
                            </Link>
                        </div>

                </div>
            </div>
        </div>
                </div>

            </div>
     

</div>



            )
}
