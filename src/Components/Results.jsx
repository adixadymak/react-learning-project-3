export default function Results({ input }) {
  console.log(input);

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
        <tr>
          <td>3456</td>
          <td>567</td>
          <td>34</td>
          <td>1</td>
        </tr>
      </tbody>
    </table>
  );
}
