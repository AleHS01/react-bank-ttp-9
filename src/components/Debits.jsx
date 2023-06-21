import React from "react";

const Debits = (props) => {
  const intialDebtAmount = props.initialDebit;
  const dateObj = new Date();
  // prettier-ignore
  //to prevent prettier from rearrenging the line, for better redability
  const dateStr = (dateObj.getMonth() + 1) + "/" + dateObj.getDate() + "/" + dateObj.getFullYear()

  const renderDebitList = () => {
    return props.debitList.map((debit, index) => {
      return (
        <div key={index} className="list-item">
          <p className="item-description">Description: {debit.description}</p>
          <p className="item-amount">
            Amount: ${Number(debit.amount).toFixed(2)}
          </p>
          <p className="item-debitDate">Date: {debit.date}</p>
        </div>
      );
    });
  };

  const handleAddDebit = (event) => {
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
      <h1>Debits</h1>

      <form action="" onSubmit={handleAddDebit} className="form">
        <label htmlFor="description">Enter a description</label>
        <input type="text" id="description" required />
        <label htmlFor="amount">Enter an Amount</label>
        <input type="number" id="amount" min={0} step="any" required />
        {/*step attribute is to alow user to enter a decimal number*/}
        <button type="submit">Add Debit</button>
      </form>

      <h2>List of Debits</h2>
      <div className="display">
        <div key="initial-debt" className="list-item">
          {/* prettier-ignore */}
          <p className="item-description">Description: Initial Debit provided by the API</p>
          <p className="item-amount">
            Amount: ${Number(intialDebtAmount).toFixed(2)}
          </p>
          <p className="item-date">Date: {dateStr}</p>
        </div>
        {renderDebitList()}
      </div>
    </div>
  );
};

export default Debits;
