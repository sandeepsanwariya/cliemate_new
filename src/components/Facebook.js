import React from "react";

class Facebook extends React.Component {
  render() {
    return (
      <section className="save-the-world-component">
        <div className="grid">
          <div className="x">
            <div className="c t4 hero-level">
              <h3 className="subhead">
                Become a <strong>level 8 Climate Hero</strong>
              </h3>
            </div>
            <div className="c t8">
              <h4 className="headline">Share this page on Facebook</h4>
              <ul className="meta">
                <li className="difficulty">Difficulty: Easy</li>
                <li className="time">Time: 1 minute</li>
                <li className="impact">Impact: Moderate</li>
              </ul>
              <p>
                If everyone who reads this shares this page on Facebook and just
                one of their friends reads the page there's a chance the page
                will go viral. And if there's one thing that going viral could
                make the world a better place it's following the steps on this
                page and the other pages on A Revolutionary Act.
              </p>
              <div className="cta">
                <a href="">Share this page</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default Facebook;
