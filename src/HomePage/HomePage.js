import React, { Component } from "react";
import "./HomePage.css";

class HomePage extends Component {
  handleAbout = () => {
    if (window.screen.width < 280) {
      window.scrollTo({ top: 672, behavior: "smooth" });
    } else {
      window.scrollTo({ top: 600, behavior: "smooth" });
    }
  };

  handleProject = () => {
    if (window.screen.width < 280) {
      window.scrollTo({ top: 1344, behavior: "smooth" });
    } else {
      window.scrollTo({ top: 1200, behavior: "smooth" });
    }
  };

  handleContact = () => {
    if (window.screen.width < 280) {
      window.scrollTo({ top: 2500, behavior: "smooth" });
    } else {
      window.scrollTo({ top: 2016, behavior: "smooth" });
    }
  };

  render() {
    return (
      <section className="homePage" id="section1">
        <main className="mainContainer">
          <div className="mainBox aboutBox" onClick={this.handleAbout}>
            <h2 className="title">Who I am & What I Do</h2>
          </div>
          <div className="bottomBoxes">
            <div className="mainBox projectsBox" onClick={this.handleProject}>
              <h2 className="title">Some of my favourite work</h2>
              <div></div>
            </div>
            <div className="mainBox contactsBox" onClick={this.handleContact}>
              <h2 className="title title1">Get In Touch</h2>
              <div></div>
            </div>
          </div>
        </main>
      </section>
    );
  }
}

export default HomePage;
