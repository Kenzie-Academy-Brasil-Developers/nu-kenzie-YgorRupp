import React from 'react'
import Trash from "../../../assets/trash.svg"

const DashCard = ({listTransactions, removeTransactions}) => {
  console.log(listTransactions)
  return (
    <li>
      <h3>
        {listTransactions.description}
      </h3>
      <p>
        {listTransactions.type}
      </p>
      <span>
        {listTransactions.value}
      </span>
      <button onClick={ () => removeTransactions(listTransactions.description)}>
        <img src={Trash} alt="" />
      </button>
    </li>
  )
}

export default DashCard