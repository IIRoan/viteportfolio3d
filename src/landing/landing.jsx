import Landingstyles from "./landing.module.scss";
import { useState, useEffect } from "react";
import * as THREE from "three";
import { createTriangle } from "./triangle.js";

function Landing() {




    //handels the 3d  part to load only after loading and only once
    const [loaded, setLoaded] = useState(false);
    useEffect(() => {
      const handleDOMContentLoaded = () => {
        if (!loaded) {
          createTriangle("rightdivid");
          setLoaded(true);
        }
      };
      document.addEventListener("DOMContentLoaded", handleDOMContentLoaded);

      return () => {
        document.removeEventListener("DOMContentLoaded", handleDOMContentLoaded);
      };
    }, [loaded]);




  return (
    <>
      <div className={Landingstyles.hero}>
        <div className={Landingstyles.leftsection}>
          <div className={Landingstyles.lefttext}>
            <h1>Roan van Westerop</h1>
            <p>
              {" "}
              DevOps/Software Developer
              <br /> HR
            </p>
          </div>

          <svg>
            <image className={Landingstyles.svg} src="Fantastic Blad-Maimu.svg" />
         </svg>

          <div className={Landingstyles.leftbottom}>
            <button> Click me!</button>
          </div>
        </div>

        {/*Right section with*/}

        <div id="rightdivid" className={Landingstyles.rightsection}></div>
      </div>
    </>
  );
}

export default Landing;
