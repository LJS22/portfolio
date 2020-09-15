import React, { Component } from "react";
import "./Projects.css";

class Projects extends Component {
  state = {
    bmi: false,
    calc: false,
    dice: false,
    drum: false,
    todo: false,
    surman: false,
  };

  componentDidMount() {
    if (window.screen.width < 768) {
      this.setState({
        bmi: true,
        calc: true,
        dice: true,
        drum: true,
        todo: true,
        surman: true,
      });
    }
  }

  handlebmiMouseOut = () => {
    this.setState({ bmi: false });
  };

  handlebmiMouseOver = () => {
    this.setState({ bmi: true });
  };

  handlecalcMouseOut = () => {
    this.setState({ calc: false });
  };

  handlecalcMouseOver = () => {
    this.setState({ calc: true });
  };

  handlediceMouseOut = () => {
    this.setState({ dice: false });
  };

  handlediceMouseOver = () => {
    this.setState({ dice: true });
  };

  handledrumMouseOut = () => {
    this.setState({ drum: false });
  };

  handledrumMouseOver = () => {
    this.setState({ drum: true });
  };

  handletodoMouseOut = () => {
    this.setState({ todo: false });
  };

  handletodoMouseOver = () => {
    this.setState({ todo: true });
  };

  handlesurmanMouseOut = () => {
    this.setState({ surman: false });
  };

  handlesurmanMouseOver = () => {
    this.setState({ surman: true });
  };
  render() {
    return (
      <section className="projectPage" id="section3">
        <div>
          <h2 className="projectTitle">My Top Projects</h2>
        </div>
        <div className="projects">
          <div
            className="projectBox bmiBox"
            onMouseOver={this.handlebmiMouseOver}
            onMouseOut={this.handlebmiMouseOut}
          >
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://ljs22.github.io/BMI-Calculator/"
            >
              <span className="linkSpan"></span>
            </a>
            {this.state.bmi ? (
              <p>
                Here I designed a simple BMI Calculator Application using React
              </p>
            ) : null}
          </div>
          <div
            className="projectBox calcBox"
            onMouseOver={this.handlecalcMouseOver}
            onMouseOut={this.handlecalcMouseOut}
          >
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://ljs22.github.io/Calculator-App/"
            >
              <span className="linkSpan"></span>
            </a>
            {this.state.calc ? (
              <p>Here I designed a Calculator Application using React</p>
            ) : null}
          </div>
          <div
            className="projectBox diceBox"
            onMouseOver={this.handlediceMouseOver}
            onMouseOut={this.handlediceMouseOut}
          >
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://ljs22.github.io/DICE-GAME-MULTI/"
            >
              <span className="linkSpan"></span>
            </a>
            {this.state.dice ? (
              <p>
                Here I designed a Multiplayer Lord of the Rings based Dice Game
              </p>
            ) : null}
          </div>
          <div
            className="projectBox drumBox"
            onMouseOver={this.handledrumMouseOver}
            onMouseOut={this.handledrumMouseOut}
          >
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://ljs22.github.io/DRUMKIT/"
            >
              <span className="linkSpan"></span>
            </a>
            {this.state.drum ? (
              <p>Here I designed a funky virtual Drum Kit</p>
            ) : null}
          </div>
          <div
            className="projectBox todoBox"
            onMouseOver={this.handletodoMouseOver}
            onMouseOut={this.handletodoMouseOut}
          >
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://ljs22.github.io/To-Do-List-App/"
            >
              <span className="linkSpan"></span>
            </a>
            {this.state.todo ? (
              <p>Here I designed a To Do List Application using React</p>
            ) : null}
          </div>
          <div
            className="projectBox surmanBox"
            onMouseOver={this.handlesurmanMouseOver}
            onMouseOut={this.handlesurmanMouseOut}
          >
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://ljs22.github.io/Surman/"
            >
              <span className="linkSpan"></span>
            </a>
            {this.state.surman ? (
              <p>Here I designed a website for an Indian NGO</p>
            ) : null}
          </div>
        </div>
        <p>
          Please check out my{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/LJS22"
          >
            Github
          </a>{" "}
          for more!
        </p>
      </section>
    );
  }
}

export default Projects;
