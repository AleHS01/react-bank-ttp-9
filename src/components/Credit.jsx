import React, { useEffect, useState } from "react";
import { Routes, Route, Link } from "react-router-dom";

const Credit = (props) => {
  // const [listDebit, setListDebit] = useState([]);

  const renderDebitList = () => {
    return props.creditList.map((debit, index) => {
      return (
        <div key={index} className="debit-item">
          <p className="debit-description">Description: {debit.description}</p>
          <p className="debit-amount">Amount: ${debit.amount}</p>
          <p className="debit-debitDate">Date: {debit.date}</p>
        </div>
      );
    });
  };

  const handleAddDebit = (event) => {
    const dateObj = new Date();
    // prettier-ignore
    //to prevent prettier from rearrenging the line, for better redability
    const dateStr = (dateObj.getMonth() + 1) + "/" + dateObj.getDate() + "/" + dateObj.getFullYear()

    event.preventDefault(); //prevent from refreshing the whole website

    const debitdescription = event.target[0].value; //description input
    const amountOfDebit = event.target[1].value; // amount input

    const debitObj = {
      description: debitdescription,
      amount: amountOfDebit,
      date: dateStr,
    };

    props.addDebit(debitObj);

    event.target.reset(); //this is to empty the form once is filled
  };

  return (
    <div>
      <h1>I'm on Debits Page</h1>

      <form action="" onSubmit={handleAddDebit}>
        <label htmlFor="description">Enter a description</label>
        <input type="text" id="description" />
        <label htmlFor="amount">Enter an Amount</label>
        <input type="number" id="amount" min={0} step="any" />
        {/*step attribute is to alow user to enter a decimal number*/}
        <button type="submit">Add Debit</button>
      </form>

      <h3>All Debits:</h3>
      {renderDebitList()}
    </div>
  );
};

export default Credit;
