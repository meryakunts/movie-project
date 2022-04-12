import React from "react";
import Header from "../components/Header";
import NestedList from "./sidebar/NestedList";

function Home() {
  return (
    <div>
      <NestedList />
      <Header></Header>
      <h1>Home Page</h1>
    </div>
  );
}

export default Home;
