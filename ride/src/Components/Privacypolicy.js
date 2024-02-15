import React from 'react'
import Menu from './Menu'
import Footer from './Footer'
// import { Link } from 'react-router-dom'
export default function Privacypolicy() {
  return (
    <div>


<Menu/>

<div className='align container'>

  <h1>Privacy Policy</h1>
    <p>Effective Date: 10-02-23</p>

    <p>Our ride-sharing website for college students ("FCCU Ride Share") is committed to protecting the privacy of its users. This Privacy Policy describes how we collect, use, and disclose personal information when you use our services. By accessing and using our Website, you agree to the terms of this Privacy Policy.</p>
<br/>
    <h2>1. Information We Collect:</h2>
    <ul>
        <li>Personal Information: We may collect information such as your name, email address, phone number, and university affiliation when you create an account or use our services.</li>
        <li>Ride Information: We collect details about your ride requests, pickup and drop-off locations, and other information necessary to facilitate the ride-sharing service.</li>
        <li>Usage Data: We automatically collect certain information when you interact with our Website, including IP address, device information, and browsing activity.</li>
    </ul>
    <br/>
    <h2>2. Use of Information:</h2>
    <p>We use the collected information to facilitate ride-sharing services, match riders and drivers, and communicate with you regarding your ride requests.</p>
    <br/>
    <h2>3. Data Sharing and Disclosure:</h2>
    <ul>
        <li>Service Providers: We may share personal information with trusted third-party service providers who assist in operating our Website and delivering services, such as Google Maps, etc.</li>
        <li>Legal Compliance: We may disclose information if required by law or in response to a valid legal request, such as a court order or government inquiry.</li>
        <li>Anonymized Data: We may share aggregated and anonymized data for analytical purposes, research, or marketing.</li>
    </ul>
    <br/>
    <h2>4. Data Security:</h2>
    <ul>
        <li>We implement reasonable security measures to protect your personal information from unauthorized access, disclosure, or alteration.</li>
        <li>However, please note that no method of transmission over the internet or electronic storage is completely secure. We cannot guarantee the absolute security of your information.</li>
    </ul>
    <br/>
    <h2>5. Updates to this Policy:</h2>
    <p>We may update this Privacy Policy from time to time. Any changes will be posted on this page, and the effective date will be revised accordingly. We encourage you to review this Policy periodically.</p>
    <br/>
    <h2>6. Contact Us:</h2>
    <p>If you have any questions, concerns, or requests regarding this Privacy Policy, please contact us using the information provided on our Website.</p>
    <br/>
    </div>
<Footer/>

    </div>
  )
}
