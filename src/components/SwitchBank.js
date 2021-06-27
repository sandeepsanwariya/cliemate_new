import React from "react";

class SwitchBank extends React.Component {
  render() {
    return (
      <section className="save-the-world-component">
        <div className="grid">
          <div className="x">
            <div className="c t4 hero-level">
              <h3 className="subhead">
                Become a <strong>level 6 Climate Hero</strong>
              </h3>
            </div>
            <div className="c t8">
              <h4 className="headline">
                Switch to a fossel-fuel free bank account
              </h4>
              <ul className="meta">
                <li className="difficulty">Difficulty: Moderate</li>
                <li className="time">Time: 60 minutes</li>
                <li className="impact">Impact: Significant</li>
              </ul>
              <p>
                We each have the power to choose to change the world. We choose
                how businesses act by choosing to consume products made by
                responsible businesses and not by irresponsible businesses.
                Doing so results in responsible business behaviour prevailing.
              </p>
              <div className="cta">
                <a href="">Select your new fossel-fuel free bank account</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default SwitchBank;
