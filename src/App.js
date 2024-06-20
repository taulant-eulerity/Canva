import MainView from "./components/pages";
import React from 'react'
import BadComponent from "./components/util/BadComponents";
import AnotherBadComponent from "./components/util/AnotherBadComponent";
function App() {
  return (
    <div className="App">
      <MainView />
      <BadComponent />
      <AnotherBadComponent />
    </div>
  );
}

export default App;
