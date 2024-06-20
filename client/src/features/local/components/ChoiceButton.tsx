import React, { MouseEventHandler } from 'react'


interface ChoiceButtonProps{
    title:string,
    onClick:MouseEventHandler<HTMLButtonElement>
}
function ChoiceButton({title,onClick}:ChoiceButtonProps) {
  return (
    <button onClick={onClick}>{title}</button>
  )
}

export default ChoiceButton