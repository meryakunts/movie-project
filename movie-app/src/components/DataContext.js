import { createContext } from "react";

export const data = {
  moviesData: [],
  showsData: [],
  filterFunc: () => {},
  searchFunc: () => {},
  searchString: "",
  itemClicked: (item) => {},
  clickedData: {},
  onResetFilter: () => {},
};

export const DataContext = createContext(data);
