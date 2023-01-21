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
    </div>
  );
}

export default App;
