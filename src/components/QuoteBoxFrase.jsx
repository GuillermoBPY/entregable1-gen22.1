import React from "react";

const QuoteBoxFrase = ({ randomQuote }) => {
  return (
    <div className="App__quoteBox--frase">
      <i className="bx bxs-quote-left App__quoteBox--frase--i"></i>
      <p>{randomQuote.quote}</p>
      <h1>{randomQuote.author}</h1>
    </div>
  );
};

export default QuoteBoxFrase;
