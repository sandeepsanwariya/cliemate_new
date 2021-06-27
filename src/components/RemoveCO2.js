import React from "react";

class RemoveCO2 extends React.Component {
  render() {
    return (
      <section className="save-the-world-component">
        <div className="grid">
          <div className="x">
            <div className="c t4 hero-level">
              <h3 className="subhead">
                Become a <strong>level 2 Climate Hero</strong>
              </h3>
            </div>
            <div className="c t8">
              <h4 className="headline">Remove CO2 from the atmosphere</h4>
              <ul className="meta">
                <li className="difficulty">Difficulty: Easy</li>
                <li className="time">Time: 5 minutes</li>
                <li className="impact">Impact: Significant</li>
              </ul>
              <p>
                If everyone in the world signed up online to become a Climeworks
                Explorer, we'd remove 663 billion kilograms of carbon from the
                atmosphere every year. Of course, everyone in the world won't do
                this. But if you do it and you ask two friends to do it and you
                ask them to each ask two friends to do it, we might at least
                achieve enough carbon removal to save thousands of kilometers of
                coastal regions from flooding.
              </p>
              <div className="cta">
                <a href="">Remove 85kg of carbon right now for &pound;6</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default RemoveCO2;
