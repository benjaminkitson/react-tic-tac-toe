import React from "react";
import Square from "../Square";
import { RowType } from "../Content";

type RowProps = {
  row: number;
  squares: RowType;
};

function Row({ row, squares }: RowProps) {
  return (
    <div className="inline-grid grid-cols-3 gap-4 w-fit">
      {squares.map((square, i) => (
        <Square col={i} content={square} row={row} />
      ))}
    </div>
  );
}

export default Row;
