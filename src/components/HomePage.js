import React from "react";
import { HashLink as Link } from "react-router-hash-link";
class Home extends React.Component {
  render() {
    return (
      <main className="home high-impact-viewport">
        <div className="grid-full single-feature email-capture">
          <img
            src="./assets/img/home.jpg"
            alt="Woman in double exposure with city"
          />
          <section className="x">
            <div className="c l6 text truth">
              <h1>It’s not enough to say you want the world to change. </h1>
              <p>
                It’s not enough to live a good life. It’s not enough to vote. If
                you want the world to change you have to change it.
              </p>
              <p className="text-cta">
                <Link to="/about">Change the world</Link>
              </p>
            </div>
          </section>
        </div>
        <section className="grid-full latest-features">
          <ul className="x article-list">
            <li className="c t6 l4">
              <article>
                <Link to="./climate-change">
                  <img
                    src="./assets/img/climate-change/polar-bear-from-above-thumb.jpg"
                    alt="Polar bear on ice"
                  />
                  <span>
                    Sea level rise
                    <small>
                      See how the world will be defestated by floods over the
                      next 100 years
                    </small>
                  </span>
                </Link>
              </article>
            </li>
            <li className="c t6 l4">
              <article>
                <Link to="./amazon-deforestation">
                  <img
                    src="../assets/img/amazon/amazon-rainforest-deforestation-thumb.jpg"
                    alt="Amazon rainforest deforestation"
                  />
                  <span>
                    Amazonian Rainforest Deforestation
                    <small>
                      See how the rainforest will vanish in the coming years
                    </small>
                  </span>
                </Link>
              </article>
            </li>
            <li className="c t6 l4">
              <article>
                <Link to="/california-wildfires">
                  <img
                    src="./assets/img/climate-change/webp/helicopter-768.webp"
                    alt="Helictoper over wildfire"
                  />
                  <span>
                    California Wildfire Animated Map
                    <small>
                      Watch wildfires spread across California in 60 seconds
                    </small>
                  </span>
                </Link>
              </article>
            </li>
          </ul>
        </section>
        <div
          className="grid-full single-feature email-capture complex-change"
          id="understand"
        >
          <img
            src="assets/img/home_page.jpg"
            alt="Man with laptop in double exposure"
          />
          <section className="x">
            <div className="c l6 text truth">
              <h2>Understand complex change in minutes.</h2>
              <p>
                Get The Truth, our daily email of the world’s most important
                facts.
              </p>
              <p>Also on: Instagram, Twitter, Facebook and Alexa.</p>
            </div>
          </section>
        </div>
      </main>
    );
  }
}
export default Home;
