import React from "react";
import QuoteBoxFrase from "./QuoteBoxFrase";
import QuoteboxBtn from "./QuoteBoxBtn";
import quotes from "../json/quotes.json";
import colors from "../json/colors.json";
import { useState } from "react";

const QuoteBox = ({ setbgColor, bgColor, randomArrayElement }) => {
  const [randomQuote, setrandomQuote] = useState(randomArrayElement(quotes));

  const updateSates = () => {
    setrandomQuote(randomArrayElement(quotes));
    setbgColor(randomArrayElement(colors));
  };
  return (
    <div className="App__quoteBox">
      <QuoteBoxFrase randomQuote={randomQuote} />
      <QuoteboxBtn bgColor={bgColor} updateSates={updateSates} />
    </div>
  );
};

export default QuoteBox;
