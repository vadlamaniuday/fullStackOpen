import { useState } from "react";

const Button = (props) => {
  return (
    <div>
      <button onClick={props.handleClick}>{props.text}</button>
    </div>
  );
};

const ShowVotes = (props) => {
  if (props.vote === 0) {
    return <div>No votes given</div>;
  }
  return <div>Has {props.vote} votes</div>;
};

const Anectode = (props) => {
  return (
    <div>
      <h2>{props.title}</h2>
    </div>
  );
};

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];

  const [selected, setSelected] = useState(0);
  const [vote, setVote] = useState(Array(anecdotes.length).fill(0));

  const givePoints = () => {
    const newVotes = [...vote];
    newVotes[selected] += 1;
    setVote(newVotes);
    console.log(newVotes);
  };

  const maxVotes = Math.max(...vote);
  const index = vote.indexOf(maxVotes);

  console.log(vote);

  const changeAnectode = () => {
    const random = Math.floor(Math.random() * anecdotes.length);
    setSelected(random);
  };

  return (
    <div>
      <Anectode title={"Anectode of the Day"} />
      <div>
        <p> {anecdotes[selected]}</p>
        <ShowVotes vote={vote[selected]} />
        <p></p>
      </div>
      <Button handleClick={changeAnectode} text={"Next Anectode"} />
      <Button handleClick={givePoints} text={"Give Vote"} />

      <Anectode title={"Anectode with most Votes"} />

      <p>{anecdotes[index]}</p>
      <p> Has {maxVotes} votes</p>
    </div>
  );
};

export default App;
