import React from 'react'

const ReminderComponent = ({ prevSelect, prevSelectHistory }) => {
  return (
    <div className="recordatorio">
      <h3>Selección anterior: {prevSelect.toUpperCase()}</h3>
      <h4>Historial de opciones elegidas: <ul>{prevSelectHistory.map((el, index) => <li key={index + el}>{el.toUpperCase()}</li>)}</ul></h4>
    </div>
  )
}

export default ReminderComponent