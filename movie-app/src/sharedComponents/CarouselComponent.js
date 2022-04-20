import React, {useContext} from "react";
import Carousel from "react-elastic-carousel";
import CardComponent from "./CardComponent";
import Item from "./Item";
import "./styles.css";
import { DataContext } from "../components/DataContext";

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 }
  ];

  function CarouselComponent(props) {

    const data = useContext(DataContext)

    return (
      <div className="CarouselComponent">
        <div className="carousel-wrapper">
          <Carousel breakPoints={breakPoints}>
            {data.moviesData.map((item) => (
              <Item key={item.id}>
                  <CardComponent movie={item}/>
              </Item>
            ))}
          </Carousel>
        </div>
      </div>
    );
  }

  export default CarouselComponent;