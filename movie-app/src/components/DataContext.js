import { createContext } from "react";

export const data = {
  moviesData: [],
  showsData: [],
  filterFunc: () => {},
  searchFunc: () => {},
  searchString: "",
};

export const DataContext = createContext(data);
