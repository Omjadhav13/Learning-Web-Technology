import logo from './logo.svg';
import './App.css';
import Func from './component/FunctionComponent';
import ClassComp from './component/ClassComp';
import FuncName from './component/Funcname';
import MyMethod from './component/MyMethod';
import ClassName from './component/ClassName';
import StateCompo from './component/StateCompo';
function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <Func/>
      <ClassComp/>
      <FuncName sname="om" post="Chairman"/>
      <ClassName sname="om" post="Chairman"/>
      <MyMethod/>
      <StateCompo/>
    </div>
  );
}

export default App;
