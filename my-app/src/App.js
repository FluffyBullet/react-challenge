import css from './App.module.css';
import NavBarSimple from './components/Navbar';
import Display from './components/Sidebar'
import StatefulGreeting from "./components/StatefulGreeting";

function App() {
  return (
    <div className="App">
      <NavBarSimple name="David"/>
    </div>
  );
}

export default App;