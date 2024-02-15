import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Components/Index';
import Schedule from './Components/Schedule';
import Signin from './Components/Signin';
import Signup from './Components/Signup';
import Privacypolicy from './Components/Privacypolicy';
import Termsandcondition from './Components/Termsandcondition';
import Aboutus from './Components/Aboutus';
import Loginas from './Components/Loginas';
import Signupasdriver from './Components/Signupasdriver';
import Signupasrider from './Components/Signupasrider';
import Contactus from './Components/Contactus'



function App() {
  return (

<div className='App'>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/schedule" element={<Schedule />} />
          <Route exact path="/signin" element={<Signin />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/privacypolicy" element={<Privacypolicy />} />
          <Route exact path="/termsandcondtion" element={<Termsandcondition />} />
          <Route exact path="/aboutus" element={<Aboutus />} />
          <Route exact path="/loginas" element={<Loginas />} />
          <Route exact path="/signupasdriver" element={<Signupasdriver />} />
          <Route exact path="/signupasrider" element={<Signupasrider />} />
          <Route exact path="/contactus" element={<Contactus />} />
        </Routes>
      </Router>

      </div>
  );
}

export default App;
