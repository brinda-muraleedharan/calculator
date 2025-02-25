import { useEffect, useState } from "react";
import NumberButtons from "./NumberButtons";
import Display from "./Display";
import { Answer } from "./Answer";

export default function Home() {
  const [history, setHistory] = useState("");
  const [result,setResult]=useState("");
  useEffect(()=>{
    evaluateExpression(history)
  },[history])
  function evaluateExpression(expression:string) {
    try {
      const answer=new Function(`return (${expression})`)();
      console.log(answer);
      setResult(answer);
    } catch (error) {
        return "Invalid expression";
    }
}

  const operations: string[] = ["+", "-", "/", "X","*"];
  const fn: (val: string) => void = (val) => {
    val=val=="X"?"*":val;
    if (val == "=") {
      setHistory("");
      //evaluateExpression(history)
    }
    else {
      if (!operations.includes(val)) setHistory((prev) => prev + val);
      else {
        //console.log("test" + history[history.length - 1]);
        if(history.length<=0){
          setHistory(result+val)
      }
        else if (!operations.includes(history[history.length - 1])) {
          setHistory((prev) => prev + val);
        }
        else {
          setHistory((prev) => prev.substring(0, prev.length - 1) + val);
        }
      }
    }
  };
  return (
    <div className="w-full h-full max-w-md">
      <div className="w-full h-1/3 bg-white">
        <Display prevOp={history} />
        <Answer answer={result}/>
      </div>
      <div className="w-full h-2/3">
        <NumberButtons fn={fn} />
      </div>
    </div>
  );
}
