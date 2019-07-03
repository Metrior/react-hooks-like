import React from 'react';
import LikeButton from "./common/LikeButton"
// import Picture from "common/Picture"
import './App.css';

function App() {
  return (
    <div className="App">
      <LikeButton defaultCount={0} defaultStatus={false}/>
    </div>
  );
}

export default App;
