import React from 'react'
import Menu from './Menu'
import Footer from './Footer'
// import { Link } from 'react-router-dom'
export default function Aboutus() {
    return (
        <div>


            <Menu />

            <div className="image-aboutus-banner">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12" >
                            <h1 className="lg-text">About Us</h1>
                            <p className="image-aboutus-para"></p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bread-bar">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 col-sm-6 col-xs-8">
                            <ol className="breadcrumb">
                                <li><a href="index.html" style={{ color: "black" }}>Home / </a></li>
                                <li className="active" style={{ color: "black" }}> About Us</li>
                            </ol>
                        </div>
                        <div className="col-md-4 col-sm-6 col-xs-4">
                        </div>
                    </div>
                </div>
            </div>
            <div className="aboutus-secktion paddingTB60">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6" style={{ textAlign: "left" }}>
                            <h1 className="strong">Who we are and<br />what we do</h1>
                            <p className="lead">FormanRide is a peer to peer ride sharing website, especially designed to cater the issue of rising fuel costs, parking congestion and environmental hazards </p>
                        </div>
                        <div className="col-md-6" style={{ textAlign: "left" }}>


                            <h4> 1) Set your own schedule
                            </h4>
                            <p>  Set your own university timings and get matched to students sharing similar timings from similiar locality
                            </p>


                            <br />
                            <h4> 2) Share you Ride
                            </h4>
                            <p> FormanRide let's you share your commute with your others on your own terms, set your own charges
                            </p>
                            <br />
                            <h4> 3) Safe and Secure
                            </h4>
                            <p> FormanRide is a student-student basis webapp, which makes it secure from other competitors.
                            </p>



                        </div>
                    </div>
                </div>
            </div>







            <Footer />

        </div>
    )
}
