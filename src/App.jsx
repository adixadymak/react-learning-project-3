import { useState } from "react";
import UserInput from "./Components/UserInput";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 2000,
    annualInvestment: 1500,
    expectedReturn: 30000,
    duration: 19,
  });

  function handleUserInputChange(userInputID, newValue) {
    setUserInput((prevUserInput) => {
      return { ...prevUserInput, [userInputID]: newValue };
    });
  }

  return (
    <>
      <UserInput input={userInput} handleChange={handleUserInputChange} />

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
