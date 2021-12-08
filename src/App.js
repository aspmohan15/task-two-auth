import React, { createContext } from "react";
import Routes from "./Routes";
import SnackbarProvider from "react-simple-snackbar";

export const allUserContext = createContext();

export default function App() {
  const userHandleFunctions = {
    storeData,
  };

  function storeData(data) {
    allUserData.push(data);
    localStorage.setItem("allUserData", JSON.stringify(allUserData));
  }

  return (
    <allUserContext.Provider value={userHandleFunctions}>
      <SnackbarProvider>
        <Routes />
      </SnackbarProvider>
    </allUserContext.Provider>
  );
}

const allUserData = [];
