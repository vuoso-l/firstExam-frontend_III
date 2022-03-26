import React from 'react'

const Button = ({ selectOption, options, id }) => {
  return (
    <div className="opcion">
      <button onClick={selectOption} id={id} className="botones">{id.toUpperCase()}</button>
      <h2>{options}</h2>
    </div>
  )
}

export default Button