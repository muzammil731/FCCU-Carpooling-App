import React from 'react'
// import { Link } from 'react-router-dom'
import Menu from './Menu'
import Footer from './Footer'
// import {useEffect} from 'react'
// import axios from 'axios'

export default function Index() {



  //   const fetchAndLog = async () => {
  //     const response = await fetch('http://192.168.100.71:8000/home');
  //     const json = await response.json();

  //     console.log(json);
  // }

  // fetchAndLog();




  return (
    <div>

      <Menu />
      <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item ">
            <img className="d-block w-100" src="assets/images/1.png" alt="First slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src="assets/images/2.png" alt="Second slide" />
          </div>
          <div className="carousel-item active">
            <img className="d-block w-100" src="assets/images/3.png" alt="Third slide" />
          </div>
        </div>
        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>



      <div className="container mt-5">
        <div className="row">
          <div className="col-lg-6 my-auto" style={{ paddingTop: "100px", paddingBottom: "100px" }}>
            <h1> What is FormanRide?</h1>

            <p>FormanRide is a peer to peer ride sharing website, especially designed to cater the issue of rising fuel costs, parking congestion and environmental hazards</p>
            {/* <button className="btn btn-primary btn-lg">Get in Touch</button> */}
          </div>
          <div className="col-lg-6" style={{
            backgroundImage: `url(${"assets/images/1.jpg"})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}>
            {/* <span className="glyphicon glyphicon-signal logo"> */}
            <img src=''></img>
            {/* </span> */}
          </div>
        </div>
      </div>






      <div className="py-5 my-5 why-us" id="why-us" >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-6 text-center mb-5">
              <h1 className="heading-section">Why FormanRide?</h1>
            </div>
          </div>
          <div className="row hidden-md-up">
            <div className="col-md-4">
              <div className="card">
                <div className="card-block">
                  <span>01</span>
                  <h4> Set your own schedule</h4>
                  <p>Set your own university timings and get matched to students sharing similar timings from similiar locality</p>

                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <div className="card-block">
                  <span>02</span>
                  <h4>Share you Ride</h4>
                  <p>FormanRide let's you share your commute with your others on your own terms, set your own charges
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <div className="card-block">
                  <span>03</span>
                  <h4> Safe and Secure</h4>
                  <p>FormanRide is a student-student basis webapp, which makes it secure from other competitors.</p>

                </div>
              </div>
            </div>
          </div><br />

        </div>
      </div>


      <div className='my-5 py-5'>

        <div className='container my-5 py-5'>
          <h1 className='text-center'>First Ride Sharing Website for University Students</h1>


          <div id="carouselExampleControls" className="carousel slide my-5" data-ride="carousel">
            <div className="carousel-inner1">


              <div className="carousel-item active">
                <div className="carousel-caption">
                  <h3>Safe</h3>

                </div>
              </div>
              <div className="carousel-item">
                <div className="carousel-caption">
                  <h3>Secure</h3>

                </div>
              </div>
              <div className="carousel-item">
                <div className="carousel-caption">
                  <h3>For Students By Students</h3>

                </div>
              </div>


              <div className="carousel-item">
                <div className="carousel-caption">
                  <h3>Effective Cost</h3>

                </div>
              </div>


              <div className="carousel-item">
                <div className="carousel-caption">
                  <h3>Environment Friendly</h3>

                </div>
              </div>


              <div className="carousel-item">
                <div className="carousel-caption">
                  <h3>Pocket Friendly</h3>

                </div>
              </div>


            </div>
            <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>

      </div>
      <div className="ftco-section">
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-md-6 text-center mb-5">
              <h1 className="heading-section">CONTACT US</h1>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-12">
              <div className="wrapper">
                <div className="row no-gutters mb-5">
                  <div className="col-md-7">
                    <div className="contact-wrap w-100  ">

                      <form method="POST" id="contactForm" name="contactForm" className="contactForm p-3">
                        <div className="row">
                          <div className="col-md-12">
                            <div className="form-group">
                              <label className="label" htmlFor="name">Full Name</label>
                              <input type="text" className="form-control" name="name" id="name" placeholder="Name" />
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="form-group">
                              <label className="label" htmlFor="email">Email Address</label>
                              <input type="email" className="form-control" name="email" id="email" placeholder="Email" />
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="form-group">
                              <label className="label" htmlFor="subject">Subject</label>
                              <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" />
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="form-group">
                              <label className="label" htmlFor="#">Message</label>
                              <textarea name="message" className="form-control" id="message" cols="30" rows="4" placeholder="Message"></textarea>
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="form-group">
                              <input type="submit" value="Send Message" className="btn btn-danger" />
                              <div className="submitting"></div>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="col-md-5 ">
                    <div className="row contact">
                      <div className="col-12">
                        <div className="dbox w-100 text-center">
                          <div className="icon d-flex align-items-center justify-content-center">
                            <span className="fa fa-map-marker"></span>
                          </div>
                          <div className="text">
                            <p><span>Address:</span>Lahore, Pakistan</p>
                          </div>
                        </div>


                        <div className="dbox w-100 text-center">
                          <div className="icon d-flex align-items-center justify-content-center">
                            <span className="fa fa-phone"></span>
                          </div>
                          <div className="text">
                            <p><span>Phone:</span> <a href="tel://1234567920">03123456789</a></p>
                          </div>
                        </div>


                        <div className="dbox w-100 text-center">
                          <div className="icon d-flex align-items-center justify-content-center">
                            <span className="fa fa-paper-plane"></span>
                          </div>
                          <div className="text">
                            <p><span>Email:</span> <a href="mailto:info@yoursite.com">formanride@xyz.com</a></p>
                          </div>
                        </div>



                      </div>

                    </div>


                  </div>
                </div>

              </div>
            </div>
          </div>



        </div>
      </div>

      <Footer />
    </div>

  )
}
