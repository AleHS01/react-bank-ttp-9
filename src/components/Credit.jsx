import React from "react";

const Credit = (props) => {
  const intialCreditAmount = props.initialCredit;
  const dateObj = new Date();
  // prettier-ignore
  //to prevent prettier from rearrenging the line, for better redability
  const dateStr = (dateObj.getMonth() + 1) + "/" + dateObj.getDate() + "/" + dateObj.getFullYear()

  const renderCreditList = () => {
    return props.creditList.map((credit, index) => {
      return (
        <div key={index} className="list-item">
          <p className="item-description">Description: {credit.description}</p>
          <p className="item-amount">
            Amount: ${Number(credit.amount).toFixed(2)}
          </p>
          <p className="item-debitDate">Date: {credit.date}</p>
        </div>
      );
    });
  };

  const handleAddCredit = (event) => {
    event.preventDefault(); //prevent from refreshing the whole website

    const debitdescription = event.target[0].value; //description input
    const amountOfDebit = event.target[1].value; // amount input

    const creditObj = {
      description: debitdescription,
      amount: amountOfDebit,
      date: dateStr,
    };

    props.addCredit(creditObj);

    event.target.reset(); //this is to empty the form once is filled
  };

  return (
    <div>
      <h1>Credit</h1>

      <form action="" onSubmit={handleAddCredit} className="form">
        <label htmlFor="description">Enter a description</label>
        <input type="text" id="description" required />
        <label htmlFor="amount">Enter an Amount</label>
        <input type="number" id="amount" min={0} step="any" required />
        {/*step attribute is to alow user to enter a decimal number, or any type of number it wants
        liek 0.01, or 0.1 or anything or 20, so the user will only add multiple of 20 etc*/}
        <button type="submit">Add credit</button>
      </form>

      <h3>All Credit:</h3>
      <div key="inital-credit" className="list-item">
        <p className="item-description">
          Description: Initial Credit provided by the API
        </p>
        {/* prettier-ignore */}
        <p className="item-amount">Amount: ${Number(intialCreditAmount).toFixed(2)}</p>
        <p className="item-date">Date: {dateStr}</p>
      </div>
      {renderCreditList()}
    </div>
  );
};

export default Credit;
