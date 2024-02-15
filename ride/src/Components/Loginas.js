import React from 'react'
import Menu from './Menu'
import Footer from './Footer'
// import { Link } from 'react-router-dom'


export default function Loginas() {
    const user = localStorage.getItem("user");
    const rider_url="http://localhost:8000/registerRider/?user="+user;
    const driver_url="http://localhost:8000/registerDriver/?user="+user;

    return (
        <div className='body'>

            <div className="d-flex flex-column justify-content-center w-100 h-100">

                <div className="d-flex flex-column justify-content-center align-items-center">

                    <h3 className='text-light'>You are Registered Successfully , <br/> Now select what do You want to be Registered as?</h3>

                    <div className="btn-group my-5" >
                        <a href={rider_url} className="btn btn-outline-light" aria-current="page" style={{padding:"20px"}}  >
                            <i className="fa fa-file-download me-2"></i> Register as Rider</a>
                        <a href={driver_url} className="btn btn-outline-light" style={{padding:"20px"}}>Register as Driver
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
