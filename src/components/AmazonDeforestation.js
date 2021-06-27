import React from "react";
import {
  Link,
  useRouteMatch,
  Switch,
  Route,
  useParams,
  useHistory,
} from "react-router-dom";
//import { HashLink as Link } from "react-router-hash-link";
import LazyLoad from "react-lazyload";

const AmazonDeforestation = () => {
  const { path, url } = useRouteMatch();

  return (
    <main className="article campaign amazon-deforestation">
      <header className="entry-header high-impact-viewport x">
        <div className="text c l6">
          <h1>Climate change: The life you know is about to end</h1>
          <p>
            Scroll down to see how sea level rise is going to devestate the
            coastal regions in the coming years.
          </p>
          <p class="cta with-icon with-pulsing-icon">
            <Link to="#play-animation">Play the animation</Link>
          </p>
          <div className="mouse_scroll">
            <div className="mouse">
              <div className="wheel"></div>
            </div>
            <div>
              <span className="m_scroll_arrows unu"></span>
              <span className="m_scroll_arrows doi"></span>
              <span className="m_scroll_arrows trei"></span>
            </div>
          </div>
        </div>
      </header>
      <div></div>
      <div className="feature-chart" id="play">
        <div className="chart">
          <div className="x chart-actions">
            <div className="c t6 l6 country-selector">
              <p>Zoom to:</p>
            </div>
            <div className="c t4 l4 embed-chart">
              <button className="button with-icon toggle-embed">
                Embed map
              </button>
              <div className="embed-code hidden">
                <p>Paste this code into your web page.</p>
                <textarea placeholder="Embed code here"></textarea>
                <button>Copy</button>
                <div className="close">Close</div>
              </div>
            </div>
            <div className="c t2 l2 logo">
              <a href="https://arevolutionaryact.com/">
                <img
                  src="../assets/img/a_revolutionary_act.png"
                  alt="A Revolutionary Act"
                />
              </a>
            </div>
          </div>
        </div>

        <div className="share">
          <h3>Share this page:</h3>
          <ul>
            <li className="reddit">
              <a href="">Reddit</a>
            </li>
            <li className="twitter">
              <a href="">Twitter</a>
            </li>
            <li className="facebook">
              <a href="">Facebook</a>
            </li>
            <li className="linkedin">
              <a href="">Linkedin</a>
            </li>
          </ul>
        </div>
      </div>
      <section className="methodology">
        <div className="x">
          <div className="c l6">
            <h2 class="subhead">How is it calculated?</h2>
            <p>
              An altitude value (in metres) is assigned to every square
              kilometre of land. The JavaScript is designed to add a blue pixel
              over any patch of land that's zero metres above sea level (0
              altitude). With each 0.2 seconds that pass, the threshold value at
              which blue pixels are added decreases by 3cm. As a result, we can
              observe an accurate representation of how coastal areas would
              flood if the sea level were to rise by 3cm every year.
            </p>
          </div>
          <div class="c l6">
            <h3 class="subhead">Why 3cm per year?</h3>
            <p>
              Although the actual annual sea level rise is closer to 3mm, there
              is a serious unknown risk factor of significant increase in sea
              rise due to the future effects of loss of reflective white ice and
              release of locked up greenhouse gasses resulting from future ice
              melting. These factors, as well as several others, are likely to
              multiply the rate of sea level rise, which could lead to far more
              extreme flooding. Therefore 3cm annual rise has been selected for
              this animation as a demonstration of how bad things are likely to
              get in the near future, if extreme changes to human behaviour are
              not made.
            </p>
          </div>
        </div>
      </section>
      <section className="grid-full charts-grid dark-charts-grid">
        <h2>Badly Affected Areas</h2>
        <ul className="x">
          <li className="c t6 l4">
            <Link to="florida">
              <LazyLoad>
                <img src="../assets/img/climate-change/florida_sea_level_rise_map_climate_change.jpg" />
              </LazyLoad>
              <span>Florida</span>
            </Link>
          </li>
          <li className="c t6 l4">
            <Link to="bangkok">
              <LazyLoad>
                <img src="../assets/img/climate-change/florida_sea_level_rise_map_climate_change.jpg" />
              </LazyLoad>
              <span>Bangkok</span>
            </Link>
          </li>
          <li className="c t6 l4">
            <Link to="kolkata">
              <LazyLoad>
                <img src="../assets/img/climate-change/florida_sea_level_rise_map_climate_change.jpg" />
              </LazyLoad>
              <span>Kolkata</span>
            </Link>
          </li>
          <li className="c t6 l4">
            <Link to="Bangladesh">
              <LazyLoad>
                <img src="../assets/img/climate-change/florida_sea_level_rise_map_climate_change.jpg" />
              </LazyLoad>
              <span>Bangladesh</span>
            </Link>
          </li>
          <li className="c t6 l4">
            <Link to="haiti">
              <LazyLoad>
                <img src="../assets/img/climate-change/florida_sea_level_rise_map_climate_change.jpg" />
              </LazyLoad>
              <span>Haiti</span>
            </Link>
          </li>
          <li className="c t6 l4">
            <Link to="UAE">
              <LazyLoad>
                <img src="../assets/img/climate-change/florida_sea_level_rise_map_climate_change.jpg" />
              </LazyLoad>
              <span>UAE</span>
            </Link>
          </li>
        </ul>
      </section>
      <div className="entry-content">
        <div className="grid-container-narrow major-incidents story">
          <section className="x decade-1">
            <div className="c l6">
              <div className="text">
                <h2>
                  <time>2030</time> Last Urangutan dies
                </h2>
                <p>
                  The IPCC predicts the effects of the warming planet will
                  become irreversable without significant technological
                  innovation -- innovations we do not yet have. We are already
                  feeling some effects of a changing climate, but if the world
                  continues with its half-hearted commitments to emission
                  reduction, the events in this list may occur faster, before
                  we're able to plan.
                </p>
              </div>
            </div>
            <picture className="c l6">
              <LazyLoad>
                <img src="../assets/img/climate-change/polar-bear-from-above-large.jpg" />
              </LazyLoad>
            </picture>
          </section>
          <section className="x decade-2">
            <picture className="c l6">
              <LazyLoad>
                <img src="../assets/img/climate-change/flood-large.jpg" />
              </LazyLoad>
            </picture>
            <div className="c l6">
              <div className="text">
                <h2>
                  <time>2040</time> Half the Amazon gone
                </h2>
                <p>
                  In the United States, 40% of the population lives in high
                  population-density coastal areas, and globally, 8 of the
                  world’s 10 largest cities are near a coast. The US will have
                  to spend around $10 billion to protect each coastal city,
                  replenishing defences every 20 years, or facing the
                  consequences of billions of dollars in flood damages. It is
                  the same around the world, and it is unclear where the money
                  will come from.
                </p>
              </div>
            </div>
          </section>
          <section className="x decade-3">
            <div className="c l6">
              <div className="text">
                <h2>
                  <time>2050</time> The climate refugee crisis – 1 billion
                  migrants
                </h2>
                <p>
                  The intense heat and increased flooding will play havoc with
                  farming and crops, long before large coastal regions are
                  completely flooded. Large parts of Africa will simply become
                  desert, where growing food becomes impossible. In parts of
                  Asia, heavier rainfall and constant floods will destroy crops.
                  Farmable land will signifcantly decrease leading to the
                  displacement of 'climate refugees', who will arrive in Europe
                  and the United States in their millions or perhaps hundreds of
                  millions.
                </p>
              </div>
            </div>
            <picture className="c l6">
              <LazyLoad>
                <img src="../assets/img/climate-change/refugees-large.jpg" />
              </LazyLoad>
            </picture>
          </section>
          <section className="x decade-4">
            <picture className="c l6">
              <LazyLoad>
                <img src="../assets/img/climate-change/turtle_large.jpg" />
              </LazyLoad>
            </picture>
            <div className="c l6">
              <div className="text">
                <h2>
                  <time>2060</time> The Great Barrier Reef dies
                </h2>
                <p>
                  Multiple consecutive summers of 'bleaching events' will result
                  in the death of one of the world's most famous and beautiful
                  ecosystems. Reefs will die across the globe, and it’s not just
                  a lost tourist attraction, its death means further devastation
                  of marine eco-systems, causing huge numbers of species to
                  become extinct. By this point, due to overfishing, it’s likely
                  you won’t be able to pick up seafood for dinner in your local
                  supermarket.
                </p>
              </div>
            </div>
          </section>
          <section className="x decade-5">
            <div className="c l6">
              <div className="text">
                <h2>
                  <time>2070</time> One third of plant and animal species
                  extinct
                </h2>
                <p>
                  Just 50 years from today, one third of every species on this
                  planet could be gone. The domino effect of rising temperatures
                  will eradicate large eco-systems, starting with the oceans
                  before eventually impacting land animals. Polar bears,
                  penguins and koalas become even more endangered and their
                  extinction is now almost guaranteed before the end of the
                  century.
                </p>
              </div>
            </div>
            <picture className="c l6">
              <LazyLoad>
                <img src="../assets/img/climate-change/baby_snow_leapard.jpg" />
              </LazyLoad>
            </picture>
          </section>
          <section className="x decade-6">
            <picture className="c l6">
              <LazyLoad>
                <img src="../assets/img/climate-change/venice_flooded_large.jpg" />
              </LazyLoad>
            </picture>
            <div className="c l6">
              <div className="text">
                <h2>
                  <time>2080</time> Venice, Fiji and Bangkok lost to the sea
                </h2>
                <p>
                  Rising sea levels will mean that Venice will be completely
                  submerged by 2100. Groups of islands like The Maldives and
                  Fiji will disappear too, so forget that tropical island
                  holiday. Hugely populated cities like Jakarta and Bangkok will
                  have been long gone by now.
                </p>
              </div>
            </div>
          </section>
          <section className="x decade-7">
            <div className="c l6">
              <div className="text">
                <h2>
                  <time>2100</time> Climate related death becomes the world's
                  biggest killer
                </h2>
                <p>
                  By 2100, deaths related to heat will be higher than all deaths
                  from infectious diseases. But it’s not only heat; the changing
                  climate will cause poverty and starvation, as well as increase
                  danger and transferability of number of diseases that spread
                  in warmer conditions. Natural disasters will also kill, as
                  well as reduced water quality in developing countries, and the
                  inevitable economic collapse of many economies.
                </p>
              </div>
            </div>
            <picture className="c l6">
              <LazyLoad>
                <img src="../assets/img/climate-change/dead_cows_large.jpg" />
              </LazyLoad>
            </picture>
          </section>
        </div>
        <div className="grid-container-full emm-cta how-to-stop-it">
          <header className="x">
            <div className="c l6">
              <h2>How to stop climate change</h2>
              <p>
                It's not enough to care about making the world a better place.
                It's not enough to vote. It's not enough to tell your friends
                and workmates and the drunkards you argue with at parties. It's
                not enough to convince everyone you meet the world we know is
                going to perish unless we loosen our bolts and fall from the
                machine that relentlessly destroys her. If you want the world to
                change, you have to change it. Day by day, minute by minute. In
                every move that you make.
              </p>
              <h3>Change your life, change the world. Start here...</h3>
            </div>
          </header>
        </div>
      </div>
    </main>
  );
};

export default AmazonDeforestation;
