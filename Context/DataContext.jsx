import { createContext, useState } from "react";
export const DataContext = createContext();

export function DataProvider({ children }) {
  const [hasData, setHasData] = useState(false);
  return (
    <DataContext.Provider value={{ hasData, setHasData }}>
      {children}
    </DataContext.Provider>
  );
}
