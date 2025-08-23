// frontend/store/store.js
import { createContext, useState } from "react";

export const AppContext = createContext();

export function AppProvider({ children }) {
  const [userRole, setUserRole] = useState("seller");

  return (
    <AppContext.Provider value={{ userRole, setUserRole }}>
      {children}
    </AppContext.Provider>
  );
}
