const Home = () => {
  return (
    <div className="Home-container">
      <header className="welcome">
        <h1>Welcome to AleHS Bank</h1>
        <p>We simplify accounting tracking for your convenience</p>
      </header>
      <p className="p1">
        With our app, you can easily keep track of your debts, credits, and
        overall balance. Gain control over your financial transactions and
        monitor your accounts with ease. Whether it's managing loans, tracking
        credit card expenses, or staying on top of your financial goals, our app
        provides the tools you need.
      </p>
      <h3>Key features of our app include</h3>
      <ul>
        <li>
          <span>Debit Tracking:</span> Record and monitor your debits, such as
          expenses and withdrawals, to have a clear view of your spending
          habits.
        </li>
        <li>
          <span>Credit Tracking:</span> Keep a comprehensive record of your
          credits, such as income and deposits, to track your financial inflows.
        </li>
        <li>
          <span>Balance Calculation:</span> Effortlessly calculate your total
          balance by subtracting your debits from your credits, providing you
          with an accurate snapshot of your financial health.
        </li>
        <li>
          <span>Visualization:</span> Visualize your financial data through
          interactive charts and graphs, enabling you to gain insights into your
          spending patterns and make informed financial decisions.
        </li>
      </ul>
      <p className="p2">
        Take control of your finances today and experience the convenience and
        peace of mind that our app brings. Start tracking your debts, credits,
        and overall balance with ease and efficiency.
      </p>
    </div>
  );
};

export default Home;
