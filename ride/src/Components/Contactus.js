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



      <div className="ftco-section">
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-md-6 text-center mb-5">
              <h2 className="heading-section">Contact Us</h2>
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
                            <p><span>Address:</span> Lahore, Pakistan</p>
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
