import { createContext } from "react";

export const data = {
  moviesData: [],
  showsData: [],
  filterFunc: () => {},
  searchFunc: () => {},
  searchString: "",
  cardClicked: false,
};

export const DataContext = createContext(data);
