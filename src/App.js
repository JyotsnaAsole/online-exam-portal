import './App.css';
// import {Route} from 'react-router';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Signup from './components/Signup';
// import Contact from './components/Contact';
// import Studentdashboard from './components/Studentdashboard';
// import Scoreboard from './components/Scoreboard';


import { BrowserRouter as Router,Route,Routes} from 'react-router-dom';

function App() {
  return <div className="App">
   
  <Router>
      <Navbar/>
      {/* { <StudentDashboard/> } */}
      <Routes>
          <Route path="/home" element={<Home/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/" element={<Signup/>} />
          {/* <Route path="/contact" element={<Contact/>} /> */}
      </Routes>
    </Router>
  </div>;
}

export default App;
