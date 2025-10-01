import { createContext, useState, useContext } from "react";

const DataContext = createContext();

export function ApiProvider({ children }) {
  const [dataFile, setDataFile] = useState([
    { month: "January", students: 120 },
    { month: "February", students: 150 },
    { month: "March", students: 170 },
    { month: "April", students: 140 },
    { month: "May", students: 200 },
    { month: "June", students: 180 },
    { month: "July", students: 220 },
    { month: "August", students: 210 },
    { month: "September", students: 190 },
    { month: "October", students: 230 },
    { month: "November", students: 250 },
    { month: "December", students: 400 },
  ]);

  return (
    <DataContext.Provider value={{ dataFile, setDataFile }}>
      {children}
    </DataContext.Provider>
  );
}

export function useData() {
  return useContext(DataContext);
}
