import React, { Component } from "react";
import "./About.css";

class About extends Component {
  state = {
    screenSize: true,
  };

  componentDidMount() {
    if (window.screen.width < 280) {
      this.setState({ screenSize: false });
    }
  }

  render() {
    return (
      <section className="aboutPage" id="section2">
        <div className="aboutTitle">
          <h2 id="aboutTitle">Me & My Tech</h2>
        </div>
        <main className="lists">
          <div className="personalList">
            <ul>
              {this.state.screenSize ? (
                <li>
                  I was born and raised in Newcastle, live and work in
                  Manchester
                </li>
              ) : null}
              <li>
                I attended Newcastle University, studying Psychology before
                moving to Manchester and becoming a software developer
              </li>
              {this.state.screenSize ? (
                <li>
                  I began teaching myself how to code until I joined Code Nation
                </li>
              ) : null}
              <li>
                I attended Code Nations 12 week Master Course and am eager to
                find my first role
              </li>
              <li>
                I'm passionate mainly about React, I love designing anything
                from websites to full stack applications
              </li>
            </ul>
          </div>
          <div className="workList">
            <div className="iconImages">
              <div className="htmlCssJsBox"></div>
              <div className="box reactBox middle"></div>
              <div className="box nodeBox middle"></div>
              <div className="box mongoBox middle"></div>
              <div className="box gitBox"></div>
              <div className="box insomniaBox"></div>
            </div>
          </div>
        </main>
      </section>
    );
  }
}

export default About;
