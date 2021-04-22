import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header.js';
import HeroSection from './components/HeroSection.js';
import AboutMe from './components/AboutMe.js';
import Algorithms from './components/dashboard/Algorithms.js';

document.addEventListener('DOMContentLoaded', function() {
  window.addEventListener('scroll', myFunctionForSticky);
  var navbar = document.getElementById("navbar");
  var sticky = navbar.offsetTop;

  function myFunctionForSticky() {
    if (window.pageYOffset >= sticky) {
      console.log("window.pageYOffset >= sticky");
    } else {
      console.log("Not window.pageYOffset >= sticky");
    }
    if (window.pageYOffset >= sticky) {
      navbar.classList.add("sticky");
    } else {
      navbar.classList.remove("sticky");
    }
  }

  function myFunctionForResponsive() {
    navbar.classList.toggle('responsive');
  }
})

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Route exact path="/">
          <HeroSection />
          <AboutMe />
        </Route>
        <Route path="/Algorithms">
          <Algorithms />
        </Route>
      </div>
    </Router>
  );
}

export default App;
