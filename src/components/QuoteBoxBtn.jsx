import React from "react";

const QuoteboxBtn = ({ updateSates, bgColor }) => {
  return (
    <button
      style={{ backgroundColor: bgColor }}
      className="quotebox__btn"
      onClick={updateSates}
    >
      <i className="bx bx-chevron-right"></i>
    </button>
  );
};

export default QuoteboxBtn;
