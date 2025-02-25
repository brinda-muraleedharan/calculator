import React from "react";
import NumberButton from "./NumberButton";
import RowButtons from "./RowButtons";

function NumberButtons({fn}:({fn:(val:string)=>void})) {
  const nums = [
    ["AC", "DEL", "%", "/"],
    ["7", "8", "9", "-"],
    ["4", "5", "6", "X"],
    ["1", "2", "3", "+"],
    ["SCI", "0", ".", "="],
  ];
  let getNumberButtons = () => {
    return nums.map((item,index) => <RowButtons key={index} rowValues={item} fn={fn}/>);
  };
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300 shadow-lg">
          <tbody>{getNumberButtons()}</tbody>
        </table>
      </div>
    </div>
  );
}

export default NumberButtons;
