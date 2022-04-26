import { createContext } from "react";

export const data = {
    moviesData: [],
    showsData: [],
    filterFunc: () => {}
};

export const DataContext = createContext(data);
