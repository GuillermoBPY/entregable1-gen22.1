import React from "react";
import QuoteBoxFrase from "./QuoteBoxFrase";
import QuoteboxBtn from "./QuoteBoxBtn"
import quotes from "../json/quotes.json"
import { useState } from "react";

const QuoteBox = ({ randomColor, setbgColor, bgColor }) => {
const randomArrayElement = (array) => {
    const indexElement = Math.floor(Math.random() * array.length);
    return array[indexElement];
  };
  const [randomQuote, setrandomQuote] = useState(randomArrayElement(quotes));

  const updateSates = () => {
    setrandomQuote(randomArrayElement(quotes));
    setbgColor(randomColor());
  };
  return (
    <div className="App__quoteBox">
      <QuoteBoxFrase
        randomQuote={randomQuote}
      />
      <QuoteboxBtn
        bgColor={bgColor}
        updateSates={updateSates}
      />
    </div>
  );
};

export default QuoteBox;
