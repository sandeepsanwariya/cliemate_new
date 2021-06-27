import React from "react";

class PlantATree extends React.Component {
  render() {
    return (
      <section className="save-the-world-component">
        <div className="grid">
          <div className="x">
            <div className="c t4 hero-level">
              <h3 className="subhead">
                Become a <strong>level 1 Climate Hero</strong>
              </h3>
            </div>
            <div className="c t8">
              <h4 className="headline">Plant a tree</h4>
              <ul className="meta">
                <li className="difficulty">Difficulty: Easy</li>
                <li className="time">Time: 5 minutes</li>
                <li className="impact">Impact: Significant</li>
              </ul>
              <p>
                If everyone in the world did this today approximately 140
                billions kilograms of CO2 would be absorbed into the atmosphere,
                habitats would be created for trillions of animals and thousands
                of people would be provided jobs planting and maintaining the
                trees.
              </p>
              <p>
                You can buy one tree planting right now online for as little as
                $0.10!
              </p>
              <div className="cta">
                <a href="">Plant a tree for $0.10 now</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default PlantATree;
