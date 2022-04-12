import React from "react";
import Header from "../components/Header";
import NestedList from "./sidebar/NestedList";
import CarouselComponent from '../sharedComponents/CarouselComponent';

function Home() {
  return (
    <div>
      <NestedList />
      <Header></Header>
      <h1>Home Page</h1>
      <CarouselComponent/>
    </div>
  );
}

export default Home;
