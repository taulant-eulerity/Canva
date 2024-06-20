import MainView from "./components/pages";
import React from 'react'
import BadComponent from "./components/util/BadComponents";
import AnotherBadComponent from "./components/util/AnotherBadComponent";
import Count from "./components/util/Count";
import Timer from "./components/util/Timer";
import Profile from "./components/util/Profile";
import Config from "./components/util/Config";
function App() {
  return (
    <div className="App">
      <MainView />
      <BadComponent />
      <AnotherBadComponent />
      <Count />
      <Timer />
      <Profile />
      <Config />
    </div>
  );
}

export default App;
