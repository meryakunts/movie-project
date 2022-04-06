import React, { useState, useRef } from "react";
import Carousel from "react-elastic-carousel";
import CardComponent from "./CardComponent";
import Item from "./Item";
import "./styles.css";

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 }
  ];

  function CarouselComponent() {
    const [items, setItems] = useState([1, 2, 3, 4, 5, 6, 7, 8]);
    const carouselRef = useRef();

    const onNextStart = (currentItem, nextItem) => {
        if (currentItem.index === nextItem.index) {
          carouselRef.current.goTo(0);
        }
      };
      
      const onPrevStart = (currentItem, nextItem) => {
        if (currentItem.index === nextItem.index) {
          carouselRef.current.goTo(items.length);
        }
      };

    return (
      <div className="CarouselComponent">
        <div className="carousel-wrapper">
          <Carousel breakPoints={breakPoints} ref={carouselRef} onPrevStart={onPrevStart} onNextStart={onNextStart}>
            {items.map((item) => (
              <Item key={item}>
                  <CardComponent/>
              </Item>
            ))}
          </Carousel>
        </div>
      </div>
    );
  }

  export default CarouselComponent;