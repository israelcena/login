import React, { useEffect, useState } from "react";

import { Login, Register } from "./components/login/Index";
import Side from "./components/login/Side"

export default function App() {
  const [isLogginActive, setIsLogginActive] = useState(true);

  const current = isLogginActive ? "Registro" : "Login";
  const currentActive = isLogginActive ? "login" : "Registro";

  useEffect(() => {
    Side.classList.add("right");
  });

  const changeState = () => {
    if (isLogginActive) {
      Side.classList.remove("right");
      Side.classList.add("left");
    } else {
      Side.classList.remove("left");
      Side.classList.add("right");
    }
    setIsLogginActive(!isLogginActive);
  }

  return (
    <div className="container">
      <div className="login-container" ref={ref => (container = ref)}>
        {isLogginActive && (
          <Login containerRef={ref => (current = ref)} />
        )}
        {!isLogginActive && (
          <Register containerRef={ref => (current = ref)} />
        )}
      </div>
      <Side
        current={current}
        currentActive={currentActive}
        containerRef={ref => (this.Side = ref)}
        onClick={changeState}
      />
    </div>
  );
}
