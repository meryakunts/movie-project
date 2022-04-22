import { createContext } from "react";

export const data = {
    moviesData: [],
    showsData: [],
};

export const DataContext = createContext(data);
