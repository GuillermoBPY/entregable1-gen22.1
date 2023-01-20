import React from "react";

const QuoteboxBtn = ({ updateSates,color}) => {
  return (
    <button  style={{backgroundColor:color}} className="quotebox__btn" onClick={updateSates}>
      <i className="bx bx-chevron-right"></i>
    </button>
  );
};

export default QuoteboxBtn;
