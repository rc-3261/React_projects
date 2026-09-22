import React from "react";
import Card from "./comonets/card";
import Nav from "./comonets/nav";
import asset from "./assets/vite.svg";

function App() {
  return (
    <div>
      <Nav />

      <Card props={{ item: asset }} />
      <Card props={{ item: asset }} />
      <Card props={{ item: asset }} />
      
    </div>
  );
}

export default App;

