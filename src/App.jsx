function App() {
  return (
    <>
      <section id="user-input">
        <div className="input-group">
          <p>
            <label htmlFor="initialInvestment">Initial Investment</label>
            <input type="number" id="initialInvestment" />
          </p>

          <p>
            <label htmlFor="annualInvestment">Annual Investment</label>
            <input type="number" id="annualInvestment" />
          </p>
        </div>
        <div className="input-group">
          <p>
            <label htmlFor="expectedReturn">Expected Return</label>
            <input type="number" id="expectedReturn" />
          </p>

          <p>
            <label htmlFor="duration">Duration</label>
            <input type="number" id="duration" />
          </p>
        </div>
      </section>

      <table id="result">
        <thead>
          <tr>
            <th>Year</th>
            <th>Investment Value</th>
            <th>Interest(Year)</th>
            <th>Invested Capital</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>45</td>
            <td>566</td>
            <td>6443</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default App;
