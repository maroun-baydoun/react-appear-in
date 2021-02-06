import React from "react";
import Cell from "./Cell";

const CellContainer = () => (
  <div className="cell-container">
    {[...Array(10)].map((_, i) => (
      <Cell key={i} />
    ))}
  </div>
);

export default CellContainer;
