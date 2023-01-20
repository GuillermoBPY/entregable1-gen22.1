import React from "react";
import QuoteBoxFrase from "./QuoteBoxFrase";
import quotes from "../json/quotes.json";

const QuoteBox = ({ randomColor, setbgColor,color}) => {
  const randomArrayElement = (array) => {
    const indexElement = Math.floor(Math.random() * array.length);
    return array[indexElement];
  };

  return (
    <div className="App__quoteBox">
      <QuoteBoxFrase
        randomArrayElement={randomArrayElement}
        randomColor={randomColor}
        quotes={quotes}
        setbgColor={setbgColor}
        color={color}
      />
    </div>
  );
};

export default QuoteBox;
