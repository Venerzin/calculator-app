import React from "react";

import './index.css';

interface Props{
  value: number
}

function Display ({ value } : Props){
  return (
    <div className="c-display">{value}</div>
  );
}

export default Display;