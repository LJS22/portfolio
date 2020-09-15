import React, { Component } from "react";
import "./App.css";
import LandingPage from "./LandingPage/LandingPage";
import Nav from "./Nav/Nav";
import HomePage from "./HomePage/HomePage";
import About from "./AboutPage/About";
import Projects from "./ProjectsPage/Projects";
import Contact from "./ContactPage/Contact";
import PageButton from "./PageButtons/PageButton";

class App extends Component {
  render() {
    return (
      <div className="App">
        <LandingPage />
        <Nav />
        <HomePage ref={this.props.homeRef} />
        <About />
        <Projects />
        <Contact />
        <PageButton />
      </div>
    );
  }
}

export default App;
