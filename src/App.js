import "./App.css";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import axios from "axios";

import Home from "./components/Home";
import UserProfile from "./components/UserProfile";
import Debits from "./components/Debits";

const App = () => {
  const [balance, setBalance] = useState(0);
  const [debit, setDebit] = useState(Number(200).toFixed(2));
  const [credit, setCredit] = useState(Number(100).toFixed(2));

  useEffect(() => {
    // const getDebit = async () => {
    //   try {
    //     const response = await axios.get(
    //       "https://bank-of-react-b745wfs0u-ajlapid718.vercel.app/debits"
    //     );
    //     console.log(response);
    //   } catch (error) {
    //     console.log(error);
    //   }
    // };
    //setBalance(Number(credit - debit).toFixed(2));
  }, [balance, debit, credit]);

  return (
    <Router>
      <div className="App">
        <header>
          <p>Balance: ${balance}</p>
          <p>Debit: ${debit}</p>
          <p>Credit: ${credit}</p>
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
                balance={balance}
                setBalance={setBalance}
                debit={debit}
                setDebit={setDebit}
              />
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
