import React, { useContext } from "react";
import Carousel from "react-elastic-carousel";
import CardComponent from "../sharedComponents/CardComponent";
import Item from "../sharedComponents/Item";
import "../sharedComponents/styles.css";
import { DataContext } from "../components/DataContext";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2, itemsToScroll: 2 },
  { width: 768, itemsToShow: 4 },
  { width: 1200, itemsToShow: 6 },
];

function SearchList(props) {
  const data = useContext(DataContext);
  const isMovies = (props.type === "movies");

  console.log("data", data)
 
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

export default SearchList;
