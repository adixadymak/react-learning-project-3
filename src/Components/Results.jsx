import { calculateInvestmentResults } from "../util/investment.js";

export default function Results({ input }) {
  const investmentResults = calculateInvestmentResults(input);

  console.log(investmentResults);

  return (
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
        {investmentResults.map((result) => (
          <tr>
            <td>{result.year}</td>
            <td>{result.annualInvestment}</td>
            <td>{result.interest}</td>
            <td>{result.valueEndOfYear}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
