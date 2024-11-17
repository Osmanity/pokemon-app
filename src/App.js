import logo from "./logo.svg";
import React, { useState } from "react";

import "./App.css";
import PokemonApplication from "./components/PokemonApplication";

function App() {
  const [appStarted, setAppStarted] = useState(false);
  return (
    <div>
      {!appStarted ? (
        <button onClick={() => setAppStarted(true)}>Start Pokemon App</button>
      ) : (
        <PokemonApplication />
      )}
    </div>
  );
}

export default App;
