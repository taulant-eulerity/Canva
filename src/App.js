import MainView from "./components/pages";
import React from 'react'
import BadComponent from "./components/util/BadComponents";
import AnotherBadComponent from "./components/util/AnotherBadComponent";
import Count from "./components/util/Count";
import Timer from "./components/util/Timer";
import Profile from "./components/util/Profile";
function App() {
  return (
    <div className="App">
      <MainView />
      <BadComponent />
      <AnotherBadComponent />
      <Count />
      <Timer />
      <Profile />
    </div>
  );
}

export default App;
