import React from "react";
import PlantATree from "./PlantATree";
import RemoveCO2 from "./RemoveCO2";
import ChangeElectricity from "./ChangeElectricity";
import TellTwoFriends from "./TellTwoFriends";
import UpVote from "./UpVote";
import SwitchBank from "./SwitchBank";
import SellCar from "./SellCar";
import BecomeVegan from "./BecomeVegan";

const SinglePost = () => {
  return (
    <main className="article campaign about">
      <header className="entry-header">
        <h1>It’s not enough to say you want the world to change.</h1>
      </header>
      <div class="grid">
        <div className="x">
          <div className="c l7 entry-content">
            <p>It’s not enough to vote. </p>
            <p>It's not enough to live a good life.</p>
            <p>It's not enough to be kind.</p>
            <p>If you want the world to change you have to change it.</p>
            <p>You have to change your life. </p>

            <p>You have to change the lives of the people you know.</p>
            <p>
              You have to get them to change the lives of the people they know.
            </p>
            <p>Because one day you’ll wake up and you’ll be old. </p>

            <p>
              And you’ll be just another wasted life, moaning about a world they
              did nothing to change.
            </p>

            <p>
              Whatever happens the days will still pass. You will still grow
              old. And you’ll die.
            </p>

            <p>And all the precious moments will have passed by.</p>

            <p>
              Without frequent reminders of your fragile mortality, you'll glide
              through your life. You'll slip into a mode of sickening
              complacency and simply forget the truth that you should've know
              was always coming.
            </p>

            <p>
              The truth that’s waiting like a stalking tiger to reveal its cruel
              epiphany:
            </p>

            <p>There are no second chances. </p>

            <p>Not of a lifetime. </p>

            <p>Not of a single moment. </p>

            <p>Because every moment matters. </p>

            <p>
              Every decision is a brushstroke upon the canvas that will hold our
              collective future.
            </p>

            <p>We are painting always.</p>

            <p>
              And the marks we leave are irreversibly ingrained into eternity.
            </p>
          </div>
        </div>
      </div>
      <div className="save-the-world-components">
        <div className="grid">
          <header className="x">
            <div className="c l6">
              <h2 class="headline">
                Don't waste your life. Do something worthwhile. Help us change
                the world.
              </h2>
            </div>
          </header>
        </div>
        <PlantATree />
        <RemoveCO2 />
        <ChangeElectricity />
        <TellTwoFriends />
        <UpVote />
        <SwitchBank />
        <SellCar />
        <BecomeVegan />
      </div>
    </main>
  );
};

export default SinglePost;
