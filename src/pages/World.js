import React from "react";
import { useEffect } from "react";

function World() {
  useEffect(() => {
    const script = document.createElement("script");

    script.src = "assets/mapping.js";
    script.type = "text/javascript";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);
  return (
    <>
      <div className="slidecontainer play-animation" id="play-animation">
        <h2 className="headline">
          See How Sea Level Rise Will Devestate Coastal Regions
        </h2>
        <p>
          Press play to see how the global sea level will rise causing coastal
          flooding around the world.
        </p>
        <div className="x">
          <div className="c t3 buttons">
            <button id="start">Play</button>
            <button id="pause">Pause</button>
          </div>
          <div className="c t9 range-slider">
            <input
              type="range"
              min="0"
              max="143.7"
              defaultChecked="0"
              step="0.3"
              style={{ width: "100%" }}
              className="slider"
              id="range"
            />
            <p>
              Year: <span id="demo"></span>
            </p>
          </div>
        </div>
      </div>

      <div>
        <div id="map" style={{ height: "600px", width: "100%" }}></div>
      </div>
    </>
  );
}

export default World;
