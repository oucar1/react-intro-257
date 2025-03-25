import "./App.css";

function Greeting(props) {
  return (
    <h1>
      Hello {props.name} here is your address: {props.address}
    </h1>
  );
}

function Goodbye({ name }) {
  return <h1>Goodbye {name}</h1>;
}
function App() {
  return (
    <>
      <Greeting name="Ozgur" address="15480 Royal Grove Court" />
      <Greeting name="Utku" address="9542 Carlyle Ct" />
      <Goodbye name="Merve" />
    </>
  );
}

export default App;
