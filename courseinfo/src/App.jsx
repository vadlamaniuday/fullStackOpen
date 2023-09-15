import React from "react";

const Header = (props) => {
  return <h1>{props.course}</h1>;
};

const Content = (props) => {
  return (
    <div>
      <p>
        {props.name} : {props.exercises}
      </p>
    </div>
  );
};

const Total = (props) => {
  return (
    <div>
      <p>Total : {props.exercise1 + props.exercise2 + props.exercise3}</p>
    </div>
  );
};
const App = () => {
  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
      },
      {
        name: "State of a component",
        exercises: 14,
      },
    ],
  };

  return (
    <div>
      <Header course={course.name} />

      <Content
        name={course.parts[0].name}
        exercises={course.parts[0].exercises}
      />
      <Content
        name={course.parts[1].name}
        exercises={course.parts[1].exercises}
      />
      <Content
        name={course.parts[2].name}
        exercises={course.parts[2].exercises}
      />
      <Total
        exercise1={course.parts[0].exercises}
        exercise2={course.parts[1].exercises}
        exercise3={course.parts[2].exercises}
      />
    </div>
  );
};

export default App;
