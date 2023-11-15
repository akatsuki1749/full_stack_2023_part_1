const Header = (props) => {
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  );
};

const Content = (props) => {
  const contents = props.contents;
  return (
    <div>
      {contents.map((content) => (
        <Part part={content.part} exercise={content.exercise} />
      ))}
    </div>
  );
};

const Total = (props) => {
  const total = props.number;
  return <div>Number of exercises {total}</div>;
};

const Part = (props) => {
  return (
    <div>
      {props.part} {props.exercise}
    </div>
  );
};

const App = () => {
  const course = "Half Stack application development";
  const parts = [
    {
      part: "Fundamentals of React",
      exercise: 10,
    },
    {
      part: "Using props to pass data",
      exercise: 7,
    },
    {
      part: "State of a component",
      exercise: 14,
    },
  ];
  const calculateTotal = () => {
    let total = 0;
    for (let i = 0; i < parts.length; i++) {
      total += parts[i].exercise;
    }
    return total;
  };

  return (
    <div>
      <Header course={course} />
      <Content contents={parts} />
      <Total number={calculateTotal()} />
    </div>
  );
};

export default App;
