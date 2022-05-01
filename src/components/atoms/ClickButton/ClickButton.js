import React from 'react'

const ClickButton = (text, func) => {
  return (
    <button onClick={func}>{text}</button>
  )
}

export default ClickButton