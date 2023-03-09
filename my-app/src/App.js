import css from './App.module.css';
import Display from './components/Sidebar'
import StatefulGreeting from "./components/StatefulGreeting";

function App() {
  return (
    <div className="App">
      <StatefulGreeting greeting="I'm a stateful class component" name="David"/>
    </div>
  );
}

export default App;