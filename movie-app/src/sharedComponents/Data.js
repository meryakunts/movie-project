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
    if (
      Object.values(item.name)
        .join("")
        .toLowerCase()
        .includes(searchString.toLowerCase())
    ) {
      isNotEmpty = true;
      break;
    }
  }

  return (
    <Container className={classes.cardGrid} maxWidth="xl">
      <Grid container spacing={3}>
        {isNotEmpty &&
          allData.map((item) => {
            if (
              Object.values(item.name)
                .join("")
                .toLowerCase()
                .includes(searchString.toLowerCase())
            ) {
              return (
                <Grid item key={item.id} xs={12} sm={6} md={2}>
                  <Item key={item.id}>
                    <CardComponent itemData={item} />
                  </Item>
                </Grid>
              );
            }
            return null;
          })}
        {!isNotEmpty && (
          <div className={classes.noData}>
            <img src={noitem} width="150" height="150" alt={"not found item"} />
            <h2>Sorry, no results found.</h2>
          </div>
        )}
      </Grid>
    </Container>
  );
}

export default Data;
