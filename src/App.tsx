import logo from "./logo.svg";

import "./App.css";

import "./firebase";
import { useEffect } from "react";
import { firebaseCloudMessaging } from "./firebase";

function App() {
  useEffect(() => {
    // onMessageListener().then((data) => {
    //   console.log("Receive foreground: ", data);
    // });
    firebaseCloudMessaging.init();
  });

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
