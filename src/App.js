import React from 'react';
import icon from './icon.svg';
import './App.css';
import * as data from "./data";
import NewLink from "./components/NewsLink"

function App() {
  console.log (data);
  return (
    <div className="App">
      <NewLink data={data.newsLink}></NewLink>
    </div>
  );
}

export default App;
