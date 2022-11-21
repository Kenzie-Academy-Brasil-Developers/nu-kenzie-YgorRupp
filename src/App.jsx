
import "./App.css";
import LandingPage from "./pages/LandingPage"
import DashBoardPage from "./pages/DashBoardPage"
import { useState } from "react";



export const App = () => {

  const[login, setLogin] = useState(false)

  const [listTransactions, setListTransactions] = useState([

    { description: "Salário recebido", type: "entrada", value: 2500 },
    { description: "Conta de luz", type: "saída", value: -150 }

  ])

  console.log(listTransactions)

  function createTransactions(transactionsData){
    setListTransactions([...listTransactions, transactionsData])

  }

  function removeTransactions(transactionsDescription){

    const newList = listTransactions.filter(transactions => transactions.description !== transactionsDescription)
    console.log(newList)

    setListTransactions(newList)
  }

  console.log(...listTransactions)
  console.log(createTransactions)

  return (
    <div className="App">

      {login ? (
        <DashBoardPage listTransactions = {listTransactions} createTransactions={createTransactions} removeTransactions = {removeTransactions} setLogin={setLogin} />
      ) :(
        <LandingPage setLogin={setLogin} />
      )}

    </div>
  );
  
}


