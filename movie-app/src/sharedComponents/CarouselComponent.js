import React, { useContext } from "react";
import Carousel from "react-elastic-carousel";
import CardComponent from "./CardComponent";
import Item from "./Item";
import "./styles.css";
import { DataContext } from "../components/DataContext";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2, itemsToScroll: 2 },
  { width: 768, itemsToShow: 4 },
  { width: 1200, itemsToShow: 6 },
];

function CarouselComponent(props) {
  const data = useContext(DataContext);
  const isMovies = (props.type === "movies");
 
  return (
    <div className="CarouselComponent">
      <div className="carousel-wrapper">
        <Carousel breakPoints={breakPoints}>
          {isMovies &&
            data.moviesData.map((item) => (
              <Item key={item.id}>
                <CardComponent itemData={item} />
              </Item>
            ))}
          {!isMovies &&
            data.showsData.map((item) => (
              <Item key={item.id}>
                <CardComponent itemData={item} /> 
              </Item>
            ))}
        </Carousel>
      </div>
    </div>
  );
}

export default CarouselComponent;
