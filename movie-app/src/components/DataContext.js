import { createContext } from "react";

export const data = {
  moviesData: [],
  showsData: [],
  filterFunc: () => {},
  searchFunc: () => {},
  searchString: "",
  itemClicked: (item) => {},
  clickedData: {}
};

export const DataContext = createContext(data);
