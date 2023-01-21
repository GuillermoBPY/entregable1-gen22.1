import React from "react";

const QuoteboxBtn = ({ updateSates, bgColor }) => {
  return (
    <button
      style={{ backgroundColor: bgColor }}
      className="App__quoteBox--btn"
      onClick={updateSates}
    >
      <i className="bx bx-chevron-right App__quoteBox--btn--i"></i>
    </button>
  );
};

export default QuoteboxBtn;
