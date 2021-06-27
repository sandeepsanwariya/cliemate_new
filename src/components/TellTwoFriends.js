import React from "react";

class TellTwoFriends extends React.Component {
  render() {
    return (
      <section className="save-the-world-component">
        <div className="grid">
          <div className="x">
            <div className="c t4 hero-level">
              <h3 className="subhead">
                Become a <strong>level 4 Climate Hero</strong>
              </h3>
            </div>
            <div className="c t8">
              <h4 className="headline">
                Ask two friends to complete these steps
              </h4>
              <ul className="meta">
                <li className="difficulty">Difficulty: Hard</li>
                <li className="time">Time: 90+ minutes</li>
                <li className="impact">Impact: World changing</li>
              </ul>
              <p>
                One person completing the first three steps will make no
                difference. But if each person who completes this steps can get
                two friends to complete these steps, we will change the world.
              </p>
              <p>
                If you really want to do this, call your friend, go and meet
                them with your laptop of phone, load thi s web page and ask them
                to complete these steps. You almost certainly don't want to do
                this I know. But if you really want to save the world...
              </p>
              <div className="cta">
                <a href="">Ask </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default TellTwoFriends;
