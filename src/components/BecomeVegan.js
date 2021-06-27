import React from "react";

class BecomeVegan extends React.Component {
  render() {
    return (
      <section className="save-the-world-component">
        <div className="grid">
          <div className="x">
            <div className="c t4 hero-level">
              <h3 className="subhead">
                Become a <strong>level 7 Climate Hero</strong>
              </h3>
            </div>
            <div className="c t8">
              <h4 className="headline">Go vegan 5 days a week</h4>
              <ul className="meta">
                <li className="difficulty">Difficulty: Moderate</li>
                <li className="time">Extra time: None</li>
                <li className="impact">Impact: Significant</li>
              </ul>
              <p></p>
              <div className="cta">
                <a href="https://allplants.com/choose-allplants">
                  Sign-up to AllPlants.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default BecomeVegan;
