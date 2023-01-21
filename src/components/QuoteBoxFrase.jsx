import React from "react";

const QuoteBoxFrase = ({ randomQuote }) => {
  return (
    <div className="quotebox__frase">
      <i className="bx bxs-quote-left quotebox__frase--i"></i>
      <p>{randomQuote.quote}</p>
      <h1>{randomQuote.author}</h1>
    </div>
  );
};

export default QuoteBoxFrase;
