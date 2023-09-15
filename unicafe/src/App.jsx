import { useState } from "react";

const Button = (props) => {
  return <button onClick={props.handleClick}>{props.text}</button>;
};

const Statistics = (props) => {
  const sum = props.good + props.bad + props.neutral;

  if (sum === 0) {
    return <div>No Feedback Given</div>;
  }
  return (
    <div>
      <table>
        <tbody>
          <StatisticLine text={"Good"} value={props.good} />
          <StatisticLine text={"Bad"} value={props.bad} />
          <StatisticLine text={"Neutral"} value={props.neutral} />
          <StatisticLine text={"Total"} value={sum} />
          <StatisticLine
            text={"Average"}
            value={(props.good * 1 + props.neutral * 0 + props.bad * -1) / sum}
          />
          <StatisticLine text={"Positive"} value={(props.good / sum) * 100} />
        </tbody>
      </table>
      {/* <p>Good : {props.good}</p>
      <p>Bad : {props.bad}</p>
      <p>Neutral : {props.neutral}</p>
      <p>All : {sum}</p>
      <p>
        Average :{" "}
        {(props.good * 1 + props.neutral * 0 + props.bad * -1) / props.sum}
      </p>
      <p>Positive : {(props.good / sum) * 100} %</p> */}
    </div>
  );
};

const StatisticLine = (props) => {
  return (
    <tr>
      <td>{props.text}</td>
      <td>{props.value}</td>
    </tr>
  );
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleGoodClick = (props) => {
    return setGood(good + 1);
  };

  const handleBadClick = (props) => {
    return setBad(bad + 1);
  };

  const handleNeutralClick = (props) => {
    return setNeutral(neutral + 1);
  };

  return (
    <div>
      <div>
        <h1>Give Feedback</h1>
      </div>
      <div>
        <Button handleClick={handleGoodClick} text={"Good"} />
        <Button handleClick={handleBadClick} text={"Bad"} />
        <Button handleClick={handleNeutralClick} text={"Neutral"} />
      </div>

      <div>
        <h1>Statistics</h1>
        <Statistics good={good} bad={bad} neutral={neutral} />
      </div>
    </div>
  );
};

export default App;
