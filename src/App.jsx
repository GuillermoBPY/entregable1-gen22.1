import { useState } from "react";
import "./App.css";
import QuoteBox from "./components/QuoteBox";
import colors from "./json/colors.json";

function App() {
  const randomArrayElement = (array) => {
    const indexElement = Math.floor(Math.random() * array.length);
    return array[indexElement];
  };

  const [bgColor, setbgColor] = useState(randomArrayElement(colors));

  return (
    <div className="App" style={{ backgroundColor: bgColor, color: bgColor }}>
      <QuoteBox
        setbgColor={setbgColor}
        bgColor={bgColor}
        randomArrayElement={randomArrayElement}
      />
      <span className="githubCODE">
        <a
          target="_blank"
          href="https://github.com/GuillermoBPY/entregable1-gen22.1.git"
        >
          <i className="bx bxl-github"></i>CODED BY GUILLERMOBPY
        </a>
      </span>
    </div>
  );
}

export default App;
