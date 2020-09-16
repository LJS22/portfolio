import React, { useEffect, useState } from "react";
import "./Projects.css";

const Projects = () => {
  const [bmi, setBmi] = useState(false);
  const [calc, setCalc] = useState(false);
  const [dice, setDice] = useState(false);
  const [drum, setDrum] = useState(false);
  const [todo, setTodo] = useState(false);
  const [surman, setSurman] = useState(false);

  useEffect(() => {
    if (window.screen.width < 474) {
      setBmi(true);
      setCalc(true);
      setDice(true);
      setDrum(true);
      setTodo(true);
      setSurman(true);
    }
  });

  const bmiMouseOver = () => {
    setBmi(true);
  };
  const bmiMouseOut = () => {
    if (window.screen.width < 474) {
      setBmi(true);
    } else {
      setBmi(false);
    }
  };

  const calcMouseOver = () => {
    setCalc(true);
  };
  const calcMouseOut = () => {
    if (window.screen.width < 474) {
      setCalc(true);
    } else {
      setCalc(false);
    }
  };

  const diceMouseOver = () => {
    setDice(true);
  };
  const diceMouseOut = () => {
    if (window.screen.width < 474) {
      setDice(true);
    } else {
      setDice(false);
    }
  };

  const drumMouseOver = () => {
    setDrum(true);
  };
  const drumMouseOut = () => {
    if (window.screen.width < 474) {
      setDrum(true);
    } else {
      setDrum(false);
    }
  };

  const todoMouseOver = () => {
    setTodo(true);
  };
  const todoMouseOut = () => {
    if (window.screen.width < 474) {
      setTodo(true);
    } else {
      setTodo(false);
    }
  };

  const surmanMouseOver = () => {
    setSurman(true);
  };
  const surmanMouseOut = () => {
    if (window.screen.width < 474) {
      setSurman(true);
    } else {
      setSurman(false);
    }
  };

  return (
    <section className="projectPage" id="section3">
      <div className="projectTitleDiv">
        <h2 className="projectTitle">My Top Projects</h2>
      </div>
      <div className="projects">
        <div
          className="projectBox bmiBox"
          onMouseOver={bmiMouseOver}
          onMouseOut={bmiMouseOut}
        >
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://ljs22.github.io/BMI-Calculator/"
          >
            <span className="linkSpan"></span>
          </a>
          {bmi ? (
            <p>
              Here I designed a simple BMI Calculator Application using React
            </p>
          ) : null}
        </div>
        <div
          className="projectBox calcBox"
          onMouseOver={calcMouseOver}
          onMouseOut={calcMouseOut}
        >
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://ljs22.github.io/Calculator-App/"
          >
            <span className="linkSpan"></span>
          </a>
          {calc ? (
            <p>Here I designed a Calculator Application using React</p>
          ) : null}
        </div>
        <div
          className="projectBox diceBox"
          onMouseOver={diceMouseOver}
          onMouseOut={diceMouseOut}
        >
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://ljs22.github.io/DICE-GAME-MULTI/"
          >
            <span className="linkSpan"></span>
          </a>
          {dice ? (
            <p>
              Here I designed a Multiplayer Lord of the Rings based Dice Game
            </p>
          ) : null}
        </div>
        <div
          className="projectBox drumBox"
          onMouseOver={drumMouseOver}
          onMouseOut={drumMouseOut}
        >
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://ljs22.github.io/DRUMKIT/"
          >
            <span className="linkSpan"></span>
          </a>
          {drum ? <p>Here I designed a funky virtual Drum Kit</p> : null}
        </div>
        <div
          className="projectBox todoBox"
          onMouseOver={todoMouseOver}
          onMouseOut={todoMouseOut}
        >
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://ljs22.github.io/To-Do-List-App/"
          >
            <span className="linkSpan"></span>
          </a>
          {todo ? (
            <p>Here I designed a To Do List Application using React</p>
          ) : null}
        </div>
        <div
          className="projectBox surmanBox"
          onMouseOver={surmanMouseOver}
          onMouseOut={surmanMouseOut}
        >
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://ljs22.github.io/Surman/"
          >
            <span className="linkSpan"></span>
          </a>
          {surman ? <p>Here I designed a website for an Indian NGO</p> : null}
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
};

export default Projects;
