import React from "react";
import { useState } from "react";
import QuoteBoxBtnBoxBtn from "./QuoteBoxBtn";
import quotes from "../json/quotes.json";

const QuoteBoxFrase = ({
  randomArrayElement,
  randomColor,
  setbgColor,
  color
}) => {
  const [randomQuote, setrandomQuote] = useState(randomArrayElement(quotes));

  const updateSates = () => {
    setrandomQuote(randomArrayElement(quotes));
    setbgColor(randomColor());
  };

  return (
    <div className="quotebox__frase">
      <i className="bx bxs-quote-left quotebox__frase--i"></i>
      <p>{randomQuote.quote}</p>
      <h1>{randomQuote.author}</h1>
      <QuoteBoxBtnBoxBtn updateSates={updateSates} color={color}/>
    </div>
  );
};

export default QuoteBoxFrase;
