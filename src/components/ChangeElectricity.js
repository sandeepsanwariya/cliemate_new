import React from "react";

class ChangeElectricity extends React.Component {
  render() {
    return (
      <section className="save-the-world-component">
        <div className="grid">
          <div className="x">
            <div className="c t4 hero-level">
              <h3 className="subhead">
                Become a <strong>level 3 Climate Hero</strong>
              </h3>
            </div>
            <div className="c t8">
              <h4 className="headline">
                Change your home electricity to renewable energy
              </h4>
              <ul className="meta">
                <li className="difficulty">Difficulty: Easy</li>
                <li className="time">Time: 15 minutes</li>
                <li className="impact">Impact: Significant</li>
              </ul>
              <p>
                It might surprise you to learn that you can switch your home
                electricity supply online to a renewable energy supplier and end
                up <em>reducing</em> your monthly bill. Why not give it a try?
              </p>
              <p>
                If everyone home in the United States switched their home energy
                supply to a renewable supplier, we'd reduce carbon emissions by
                approximately 270 million tonnes per year.
              </p>
              <div className="cta">
                <a href="">Switch your electricity to renewable</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default ChangeElectricity;
