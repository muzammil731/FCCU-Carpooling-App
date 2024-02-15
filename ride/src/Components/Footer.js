import React from 'react'

export default function Footer() {
    return (
        <div>
     <footer className="text-center text-lg-start text-muted footer">

{/* 
  <div className="container ">
    <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
   
      <div className="me-5 d-none d-lg-block">
        <span>Get connected with us on social networks:</span>
      </div>

      <div>
        <a href="" className="me-4 text-reset">
          <i className="fa fa-facebook-f"></i>
        </a>
        <a href="" className="me-4 text-reset">
          <i className="fa fa-twitter"></i>
        </a>
        <a href="" className="me-4 text-reset">
          <i className="fa fa-google"></i>
        </a>
        <a href="" className="me-4 text-reset">
          <i className="fa fa-instagram"></i>
        </a>
        <a href="" className="me-4 text-reset">
          <i className="fa fa-linkedin"></i>
        </a>
        <a href="" className="me-4 text-reset">
          <i className="fa fa-github"></i>
        </a>
      </div>

    </section>
  </div> */}
 

  <section >
    <div className="container text-center text-md-start mt-5">
    
      <div className="row mt-3">
      
        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
   
          <h6 className="text-uppercase fw-bold mb-4">
            <i className="fas fa-gem me-3"></i>Company name
          </h6>
          <h2>
          <img src="assets/images/ride.png" className='logo' /> 
          </h2>
        </div>


 
        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4" style={{textAlign:"left"}}>
   
          <h6 className="text-uppercase fw-bold mb-4">
          Features
          </h6>
          <p>
            <a href="#!" className="text-reset">Peer to Peer</a>
          </p>
          <p>
            <a href="#!" className="text-reset"> Make social connections on the go</a>
          </p>
          <p>
            <a href="#!" className="text-reset">Save Environment</a>
          </p>
          <p>
            <a href="#!" className="text-reset">Fuel Economy</a>
          </p>
        </div>
      

    
        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4" style={{textAlign:"left"}}>

          <h6 className="text-uppercase fw-bold mb-4">
            Useful links
          </h6>
          <p>
            <a href="/aboutus" className="text-reset">About Us</a>
          </p>
          <p>
            <a href="/termsandcondtion" className="text-reset">Terms and Condition</a>
          </p>
          <p>
            <a href="/privacypolicy" className="text-reset">Privacy Policy</a>
          </p>
          <p>
            <a href="#!" className="text-reset">Help</a>
          </p>
        </div>
      

        
        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4" style={{textAlign:"left"}}>
   
          <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
          <p><i className="fa fa-home me-3"></i> Address: Lahore, Pakistan</p>
          {/* <p>
            <i className="fa fa-envelope me-3"></i>
            info@example.com
          </p>
          <p><i className="fa fa-phone me-3"></i> + 01 234 567 88</p>
          <p><i className="fa fa-print me-3"></i> + 01 234 567 89</p> */}
        </div>
  
      </div>
     
    </div>
  </section>
 

 
  <div className="text-center p-4 " style={{backgroundColor:" rgba(0, 0, 0, 0.05)"}}>
    © 2023 Copyright:Rydea
  
  </div>

</footer>

        </div>
    )
}
