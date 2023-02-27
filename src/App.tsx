import "./styles.css";

export default function App() {
  return (
    <>
      <div className="App">
        <div className="car-selection">
          <div className="car-selection-label">
            <strong>SET YOUR VEHICLE</strong>
            <span>Get an exact fit for your vehicle.</span>
          </div>
          <select name="carYearInfo">
            <option value="0">Year</option>
          </select>
          <select name="carMakeInfo">
            <option value="make">Make</option>
          </select>
          <select name="carModelInfo">
            <option value="model">Model</option>
          </select>
        </div>

        <br />
        <div>Selected year:</div>
        <div>Selected make id:</div>
        <div>Selected model id:</div>
      </div>
    </>
  );
}
