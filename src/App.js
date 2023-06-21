import "./App.css";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import axios from "axios";

import Home from "./components/Home";
import UserProfile from "./components/UserProfile";
import Debits from "./components/Debits";
import Credit from "./components/Credit";

const App = () => {
  const [balance, setBalance] = useState(0);
  // Both are undefined so the Balance load only when both have a value, to avoid the user see a 0 in balance first
  const [debit, setDebit] = useState(undefined);
  const [credit, setCredit] = useState(undefined);
  const [debitList, setDebitList] = useState([]);
  const [creditList, setCreditList] = useState([]);
  const [balanceTextColor, setBalanceTextColor] = useState("#000");

  useEffect(() => {
    const getData = async () => {
      try {
        const creditResponse = await axios.get(
          "https://bank-of-react-b745wfs0u-ajlapid718.vercel.app/credits"
        );
        const debitResponse = await axios.get(
          "https://bank-of-react-b745wfs0u-ajlapid718.vercel.app/debits"
        );
        setCredit(creditResponse.data);
        setDebit(debitResponse.data);
        console.log(creditResponse);
        console.log(debitResponse);
        // I don't use debit & credit dirrectly cause they will load value after the function is done
        setBalance(creditResponse.data - debitResponse.data);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);

  const addDebit = (debitObj) => {
    if (debit + debit.amount > balance) {
      setBalanceTextColor("#B20000");
    }

    setDebit(
      (previossDebitAmount) =>
        Number(previossDebitAmount) + Number(debitObj.amount)
    );
    //dont use debit dirrectly cause the update happend after the function
    setBalance((previousBalance) => previousBalance - debitObj.amount);
    setDebitList([...debitList, debitObj]);
  };

  const addCredit = (creditObj) => {
    setCredit(
      (previousCreditAmount) =>
        Number(previousCreditAmount) + Number(creditObj.amount)
    );
    //dont use credit dirrectly cause the update happend after the function
    setBalance(
      (previousBalance) => Number(previousBalance) - Number(creditObj.amount)
    );
    setCreditList([...debitList, creditObj]);
  };

  return (
    <Router>
      <div className="App">
        <header>
          {/* if credit and debit are defined then lets render the data, else let display loading screen */}
          {credit !== undefined && debit !== undefined ? (
            <div>
              <p style={{ color: balanceTextColor }}>
                Balance: ${balance.toFixed(2)}
              </p>
              <p>Debit: ${Number(debit).toFixed(2)}</p>
              <p>Credit: ${credit.toFixed(2)}</p>
            </div>
          ) : (
            <div className="loading-div">Loading...</div>
          )}
        </header>
        {/* Navigation */}
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/userProfile">User Profile</Link>
            </li>
            <li>
              <Link to="/debits">Debits</Link>
            </li>
          </ul>
        </nav>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/userProfile/*" element={<UserProfile />} />
          <Route
            path="/debits/*"
            element={
              <Debits
                // balance={balance}
                // setBalance={setBalance}
                // debit={debit}
                // setDebit={setDebit}
                balanceTextColor={balanceTextColor}
                debitList={debitList}
                addDebit={addDebit}
              />
            }
          />
          <Route
            path="/credit/*"
            element={<Credit creditList={creditList} addCredit={addCredit} />}
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
