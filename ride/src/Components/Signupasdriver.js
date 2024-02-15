import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { Navigate } from 'react-router-dom';



export default function Signupasdriver() {

    return (
        <>
            <div className='row'>

                <div className='col-lg-7' style={{ backgroundImage: "url('assets/images/4.jpg')" , backgroundSize:"cover"}}>


                    <div className="login-section" >
                    </div>
                </div>

                <div className='col-lg-5'>



                    <div className="limiter">
                        <div className="container-login100">
                            <div className="login-wrapper">
                                <form className="login-form " >
                                    <span className="login-form-title p-b-43 " style={{ marginTop: "10px", marginBottom: "30px" }}>
                                       Register as Driver 
                                    </span>
                             

                                    <div className="wrap-input100 validate-input" data-validate="Valid email is required: ex@abc.xyz">
                                        <input className="input100" type="text" name="username"  />
                                        <span className="focus-input100"></span>
                                        <span className="label-input100">Username</span>
                                    </div>


                                    <div className="wrap-input100 validate-input" data-validate="Password is required">
                                        <input className="input100" type="password" name="password"  />
                                        <span className="focus-input100"></span>
                                        <span className="label-input100">Password</span>
                                    </div>






                                </form>

                                <div className="container-login-form-btn">
                                    <button className="login-form-btn" type='submit'  >
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
