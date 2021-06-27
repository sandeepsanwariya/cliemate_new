import React from "react";

class SellCar extends React.Component {
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
              <h4 className="headline">Sell your gas powered car</h4>
              <ul className="meta">
                <li className="difficulty">Difficulty: High</li>
                <li className="time">Time: 60+ minutes</li>
                <li className="impact">Impact: Significant</li>
              </ul>
              <p>
                Each of has a great power to control demand. If half the
                population put their gas powered cars up for sale today their
                value would diminish significantly. Why? Because price is
                largely determined by supply and demand. In order to end the
                reign of oil, we need to stop using it.
              </p>
              <p>
                Think of this another way: your gas powered car is going to
                decrease in value month after month now as more an dmore people
                switch to electric. Selling it now is wise because you'll never
                get more for it.
              </p>
              <div className="cta">
                <a href="">Create an ad for your gas powered car</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default SellCar;
