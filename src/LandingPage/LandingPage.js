import React, { Component } from "react";
import "./LandingPage.css";

class LandingPage extends Component {
  state = {
    landingPageClosed: false,
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({ landingPageClosed: true });
    }, 6500);
  }

  render() {
    let className = "landingPage";
    if (this.state.landingPageClosed) {
      className = "landingPage closeLanding";
    }
    return (
      <section className={className}>
        <div>
          <h1 className="h1animate">Hello,</h1>
          <h2 className="h2animate">I'm Luke</h2>
          <h4 className="h3animate">A junior software developer</h4>
        </div>
        {/* <div className="Me"></div> */}
      </section>
    );
  }
}

export default LandingPage;
