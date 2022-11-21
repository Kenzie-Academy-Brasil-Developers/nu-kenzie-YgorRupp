import React from 'react'
import DashCard from './DashCard'

const ListTransactions = ({ listTransactions, removeTransactions }) => {
  console.log(listTransactions)
  return (

    <ul>

      {listTransactions.map((transactions, index) => 
        <DashCard key={index} listTransactions={transactions} removeTransactions={removeTransactions} />

      )}
    </ul>

  )
}

export default ListTransactions