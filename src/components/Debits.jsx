import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";

const Debits = (props) => {
  const [listDebit, setListDebit] = useState([]);

  const addDebit = (event) => {
    event.preventDefault();

    const debitdescription = event.target[0].value;
    const amountOfDebit = event.target[1].value;
    const debitDate = event.target[2].value;

    const debitObj = {
      description: debitdescription,
      amount: amountOfDebit,
      date: debitDate,
    };

    setListDebit([...listDebit, debitObj]);
  };
  return (
    <div>
      <h1>I'm on Debits Page</h1>

      <form action="" onSubmit={addDebit}>
        <label htmlFor="description">Enter a description</label>
        <input type="text" id="description" />
        <label htmlFor="amount">Enter an Amount</label>
        <input type="number" id="amount" />
        <label htmlFor="date">Select a Date</label>
        <input type="date" id="date" />
        <button type="submit">Add Debit</button>
      </form>

      <h3>All Debits:</h3>
      {listDebit.map((debit, index) => {
        return (
          <div key={index} className="debit-item">
            <p className="debit-description">{debit.description}</p>
            <p className="debit-amount">{debit.amount}</p>
            <p className="debit-debitDate">{debit.date}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Debits;
