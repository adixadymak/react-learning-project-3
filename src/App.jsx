import { useState } from "react";
import UserInput from "./Components/UserInput";
import Results from "./Components/Results";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 2000,
    annualInvestment: 1500,
    expectedReturn: 30000,
    duration: 19,
  });

  function handleUserInputChange(userInputID, newValue) {
    setUserInput((prevUserInput) => {
      return { ...prevUserInput, [userInputID]: +newValue };
    });
  }

  return (
    <>
      <UserInput input={userInput} handleChange={handleUserInputChange} />
      <Results input={userInput} />
    </>
  );
}

export default App;
