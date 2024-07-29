import { useState } from "react";

function UserInput() {
  const [userInput, setUserInput] = useState({
    initialInvestment,
    annualInvestment,
    expectedReturn,
    duration,
  });

  function handleUserInputChange(userInputID, newValue) {
    setUserInput((prevUserInput) => {
      return { ...prevUserInput, [userInputID]: newValue };
    });
  }

  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label htmlFor="initialInvestment">Initial Investment</label>
          <input
            type="number"
            id="initialInvestment"
            required
            value={userInput.initialInvestment}
            onChange={(event) =>
              handleUserInputChange(initialInvestment, event.target.value)
            }
          />
        </p>
        <p>
          <label htmlFor="annualInvestment">Annual Investment</label>
          <input
            type="number"
            id="annualInvestment"
            required
            value={userInput.annualInvestment}
            onChange={(event) =>
              handleUserInputChange(annualInvestment, event.target.value)
            }
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="expectedReturn">Expected Return</label>
          <input
            type="number"
            id="expectedReturn"
            required
            value={userInput.expectedReturn}
            onChange={(event) =>
              handleUserInputChange(expectedReturn, event.target.value)
            }
          />
        </p>
        <p>
          <label htmlFor="duration">Duration</label>
          <input
            type="number"
            id="duration"
            required
            value={userInput.duration}
            onChange={(event) =>
              handleUserInputChange(duration, event.target.value)
            }
          />
        </p>
      </div>
    </section>
  );
}

function App() {
  return (
    <>
      <UserInput />

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
            <td>3456</td>
            <td>567</td>
            <td>34</td>
            <td>1</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default App;
