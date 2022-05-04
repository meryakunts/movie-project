import React, { useContext } from "react";
import "./styles.css";
import { DataContext } from "../components/DataContext";
import Item from "./Item";
import CardComponent from "./CardComponent";

function Data() {
  const data = useContext(DataContext);
  const { moviesData, showsData, searchString } = data;
  let allData = moviesData.concat(showsData);
  let isNotEmpty = false; 
  for (let item of allData) {
    if ((Object.values(item.name)
    .join("")
    .toLowerCase()
    .includes(searchString.toLowerCase()))) {
      isNotEmpty = true;
      break;
    } 
  }

  return (
    <div style={{display: "flex"}}>
      {isNotEmpty && allData.map((item) => {
        if (Object.values(item.name)
              .join("")
              .toLowerCase()
              .includes(searchString.toLowerCase())) {
          return (
            <Item key={item.id}>
              <CardComponent itemData={item} />
            </Item>
          );
        }
        return null;
      })}
      {!isNotEmpty && <h2>Sorry, data not found</h2>}
  </div>
  );
}

export default Data;
