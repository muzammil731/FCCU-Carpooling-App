import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

export default function Menu() {
  var userType = localStorage.getItem('user_type');
  const user = localStorage.getItem('user');
  const showRidesUrl = 'http://localhost:8000/searchRides/?user=' + user;
  const showRequestsUrl = 'http://localhost:8000/rideRequest/?user=' + user;

  const [selectedOption, setSelectedOption] = useState('');
  const navigate = useNavigate();

  const handleChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedOption(selectedValue);
    if (selectedValue === 'driver') {
      window.location.replace('http://localhost:8000/registerDriver'); // Replace '/home' with the actual home page route
    }
    else if (selectedValue === 'rider') {
      window.location.replace('http://localhost:8000/registerRider'); // Redirect to the contact page for rider signup
    } else {
      window.location.replace('/signup'); // Redirect to the about page for general signup
    }
  };

  const handleModeChange = (event) => {
    const data = { "user": user, "userType": userType }
        axios({
            method: 'post',
            url: 'http://localhost:8000/changeMode/', data
        })
            .then((response) => {
                // let res = setAPIResponse(JSON.stringify(response.data.success));
                if (!response.data.success) {
                  console.info(JSON.stringify(response.data.error_message));
                  if(userType === 'rider'){
                    window.location.replace('http://localhost:8000/registerDriver/?user=' + user);
                  }
                  else if(userType === 'driver'){
                    window.location.replace('http://localhost:8000/registerRider/?user=' + user);
                  }
              }
                else {
                  console.info('mode changed successful!');
                  if(userType === 'rider'){
                    userType = 'driver';
                    localStorage.setItem('user_type', 'driver');
                    window.location.reload();
                  }
                  else if(userType === 'driver'){
                    userType = 'rider';
                    localStorage.setItem('user_type', 'rider');
                    window.location.reload();
                  }
                }
                console.log(userType);
            })
  }
  const handleLogout = () => {
    console.log('Logout clicked');
    localStorage.removeItem('user_type');
    localStorage.removeItem('user');
    navigate('/signin');
  };

  if (!user) {
    // User not available, redirect to signin page
    console.log('User not available, redirect to signin page');
    window.location.replace('/signin');
    return null;
  }
  else{
    console.log(user);
  }

  return (
    <div style={{ backgroundColor: "#f8f9fa !important" }}>

      <div className="container-fluid">
        <nav className="navbar navbar-expand-lg navbar-light  d-flex justify-content-between">
          <a className="navbar-brand" href="#"> <img src="assets/images/ride.png" className='logo' />  </a>
          <div>

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                  <Link className="nav-link" to="/">Home </Link>
                </li>
                <li className="nav-item active">
                  <Link className="nav-link" to="/aboutus">About US </Link>
                </li>
                <li className="nav-item active">
                  <Link className="nav-link" to="/contactus">Contact US </Link>
                </li>
                { !user && (
                <li className="nav-item active">
                  <Link className="nav-link" to="/signin">Login </Link>
                </li>
                )}

                {/* <li className="nav-item active">
                  <Link className="nav-link" to="/signup">Signup</Link>
                </li> */}
                {  !user  && (
                <li className="nav-item active">
                  <select className="nav-link" onChange={handleChange}  style={{  backgroundColor: "rgb(223, 223, 223)",borderRadius: "10px" , marginRight:"10px"}}>
                  <option value="" selected disabled> How u want to signup?</option>
                    <option value=""> Signup</option>
                    <option value="driver">Signup as a driver</option>
                    <option value="rider">Signup as a rider</option>
                  </select>
                </li>
                )}
                {userType === 'rider' && (
                  <li className="nav-item">
                    <Link className="nav-link" to={showRidesUrl}>Show Rides</Link>
                  </li>
                )}
                {userType === 'driver' && (
                  <li className="nav-item">
                    <Link className="nav-link" to="/schedule">Schedule</Link>
                  </li>
                )}
                {userType === 'driver' && (
                  <li className="nav-item">
                    <Link className="nav-link" to={showRequestsUrl}>ShowRequests</Link>
                  </li>
                )}
              </ul>
              <div className='btn btn-primary' >
                <Link onClick={handleLogout} style={{ color: "white",fontFamily:"Poppins" }} >Log Out</Link>
              </div>

              <div className='btn btn-primary' onClick={handleModeChange} style={{marginLeft:"10px"}}>
                <span style={{ color: "white" }} >Mode</span>
              </div>

            </div>


          </div>

        </nav>
      </div>


    </div>
  )
}
