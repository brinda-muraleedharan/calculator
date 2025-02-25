import React from 'react'
import NumberButton from './NumberButton'

function RowButtons({rowValues,fn}:{rowValues:string[],fn:(val:string)=>void}) {
    const getDisplayValue=()=>rowValues.map(item=> <NumberButton key={item} displayNum={item} fn={fn}/>)
  return (
    <tr>
            {getDisplayValue()}
    </tr>
  )
}

export default RowButtons