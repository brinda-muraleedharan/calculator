import React from 'react'

function NumberButton({displayNum,fn}:{displayNum:string,fn:(val:string)=>void}) {
    {/*<td className="border border-gray-300 px-4 py-2 hover:bg-gray-50 font-bold">
        <input type='button' value={displayNum} onClick={()=>console.log(displayNum)}/>
    </td>*/}
  return (
    
  <td className=' hover:bg-gray-50 text-center hover:text-black' onClick={()=>{fn(displayNum)}}>
    <button className="w-8 h-8 focus:outline-none text-2xl m-4 " >
        {displayNum}
    </button>
  </td>
)
}

export default NumberButton