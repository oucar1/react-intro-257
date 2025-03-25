import "./App.css";

// Components can include events and functions—they are not limited to just rendering UI.
function Greeting(props) {
  // A simple click handler that shows an alert with a greeting message.
  function helloClick() {
    alert(`Hello ${props.name}`);
  }

  return <button onClick={helloClick}>Say Hello</button>;
}

function GreetingEventParam(props) {
  // Sometimes, we need specific information about the event,
  // such as the ID of the clicked button, to make decisions or process data accordingly.

  function greetClick(event) {
    // Using the ternary operator to choose a greeting based on the button's ID.
    // Ternary syntax: condition ? value_if_true : value_if_false
    const greeting = event.target.id === "helloBtn" ? "Hello" : "Hey";
    alert(`${greeting} ${props.name}`);
  }

  return (
    <div>
      <button id="helloBtn" onClick={greetClick}>
        Say Hello
      </button>
      <button id="heyBtn" onClick={greetClick}>
        Say Hello
      </button>
    </div>
  );
}

function App() {
  return (
    <div>
      <Greeting name="Ozgur" />
      <GreetingEventParam name="Utku" />
    </div>
  );
}

export default App;
