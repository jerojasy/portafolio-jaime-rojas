import "./intro.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";

export const Intro = () => {
  const textRef = useRef();
  useEffect(() => {
    console.log(textRef);
    init(textRef.current, {
      showCursor: true,
      strings: ["Front-End", "UI Developer"],
      backDelay: 1500,
      backSpeed: 60,
    });
  }, []);

  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          {/* <img src="assets/perfil_bg.png" alt="" /> */}
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1>Jaime Rojas</h1>
          <h3>
            Web <span ref={textRef}></span>
          </h3>
        </div>
        <a href="#portfolio">
          <img src="assets/down.png" alt="" />
        </a>
      </div>
    </div>
  );
};
