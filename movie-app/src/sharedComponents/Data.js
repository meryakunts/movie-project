import React, { useContext } from "react";
import "./styles.css";
import { DataContext } from "../components/DataContext";
import Item from "./Item";
import CardComponent from "./CardComponent";

function Data() {
  const data = useContext(DataContext);
  const { moviesData, showsData } = data;
  let allData = moviesData.concat(showsData)
 
  return (
    <div style={{display: "flex", overflow: "auto"}}>
      {allData.map((item) => {
        if (item) {
          return (
            <Item key={item.id}>
              <CardComponent itemData={item} />
            </Item>
          );
        }
        return null;
      })}
  </div>
  );
}

export default Data;
