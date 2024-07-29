export default function UserInput({ input, handleChange }) {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label htmlFor="initialInvestment">Initial Investment</label>
          <input
            type="number"
            id="initialInvestment"
            required
            value={input.initialInvestment}
            onChange={(event) =>
              handleChange("initialInvestment", event.target.value)
            }
          />
        </p>
        <p>
          <label htmlFor="annualInvestment">Annual Investment</label>
          <input
            type="number"
            id="annualInvestment"
            required
            value={input.annualInvestment}
            onChange={(event) =>
              handleChange("annualInvestment", event.target.value)
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
            value={input.expectedReturn}
            onChange={(event) =>
              handleChange("expectedReturn", event.target.value)
            }
          />
        </p>
        <p>
          <label htmlFor="duration">Duration</label>
          <input
            type="number"
            id="duration"
            required
            value={input.duration}
            onChange={(event) => handleChange("duration", event.target.value)}
          />
        </p>
      </div>
    </section>
  );
}
