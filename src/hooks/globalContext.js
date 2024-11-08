import { createContext, useContext } from "react";

const AppContest = createContext();

export const useGlobalContext = () => useContext(AppContest);

export default AppContest;
