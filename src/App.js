import React, { Component } from "react";
import "./App.css";
import LandingPage from "./LandingPage/LandingPage";
import Nav from "./Nav/Nav";
import HomePage from "./HomePage/HomePage";
import About from "./AboutPage/About";
import Projects from "./ProjectsPage/Projects";
import Contact from "./ContactPage/Contact";

class App extends Component {
  render() {
    return (
      <div className="App">
        <LandingPage />
        <Nav />
        <HomePage />
        <About />
        <Projects />
        <Contact />
      </div>
    );
  }
}

export default App;
