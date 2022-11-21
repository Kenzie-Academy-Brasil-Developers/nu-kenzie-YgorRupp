import React from "react";
import ListTransactions from "../../components/TransactionsList";
import DashForm from "../../components/DashForm";
import Header from "../../components/Header";
import "./styles.css";
import "../../reset.css";
import "../../components/Header/styles.css";

const DashBoardPage = ({
  listTransactions,
  createTransactions,
  removeTransactions,
  setLogin,
}) => {
  return (
    <div className="containerDash">
      <Header setLogin={setLogin} />
      <div className="containerContent">
        <section className="containerTransactions">
          <div className="containerTransactionsContent">
            <DashForm createTransactions={createTransactions} />
          </div>
          <div className="containerPrice">
            <div className="containerPriceContent">
              <h2>Valor total:</h2>
              <span>$ 8456</span>
            </div>
            <p>O valor se refere ao saldo</p>
          </div>
        </section>
        <section className="containerCards">
          <div>
            <div className="filterButtons">
              <p>Resumo financeiro</p>
              <div className="filteredButtons">
                <button type="button">Todos</button>
                <button type="button">Entradas</button>
                <button type="button">Despesas</button>
              </div>
            </div>
            <ListTransactions
              listTransactions={listTransactions}
              removeTransactions={removeTransactions}
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default DashBoardPage;
