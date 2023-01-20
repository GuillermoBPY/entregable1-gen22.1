import { useState } from "react";
import "./App.css";
import QuoteBox from "./components/QuoteBox";

function App() {
  const randomColor = () => {
    const color = "#" + Math.random().toString(16).slice(9);
    return color;
  };

  const [bgColor, setbgColor] = useState(randomColor);

  return (
    <div className="App" style={{ backgroundColor: bgColor, color: bgColor }}>
      <QuoteBox randomColor={randomColor} setbgColor={setbgColor} color={bgColor}/>
    </div>
  );
}

export default App;
