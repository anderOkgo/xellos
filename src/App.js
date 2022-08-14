import logo from "./logo.svg";
import "./App.css";
import Xeproperties from "./components/Xeproperties";
import Xestate from "./components/Xestate";
import XeconditionalRender from "./components/XeconditionalRender";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <section>
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
        </section>
        <section>
          <Xeproperties
            num={178}
            bol={true}
            char="hey!"
            arr={[1, 2, 3]}
            obj={{ name: "ander" }}
            fun={(x) => x * x}
          ></Xeproperties>
          <hr />
          <Xestate></Xestate>
          <XeconditionalRender></XeconditionalRender>
        </section>
      </header>
    </div>
  );
}

export default App;
