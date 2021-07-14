import logo from './logo.svg';
import './App.css';
import PersonCard from './components/PersonCard';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="aws">
          <PersonCard fname={"Aws"} lname={"Radwan"} age={23} color={"Black"} />
          <PersonCard fname={"Doe"} lname={"Jane"} age={27} color={"Red"} />
          <PersonCard fname={"Smith"} lname={"John"} age={18} color={"Brown"} />
          <PersonCard fname={"Fillmore"} lname={"Millard"} age={37} color={"Gray"} />
        </div>
      </header>
    </div>
  );
}

export default App;
