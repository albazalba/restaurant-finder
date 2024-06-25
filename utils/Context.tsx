"use client";
import { createContext, useContext, useState } from "react";

const Context = createContext(null);

export function LocationProvider({ children }: any) {
  const [location, setLocation] = useState(null);
  return (
    //@ts-ignore
    <Context.Provider value={{ location, setLocation }}>
      {children}
    </Context.Provider>
  );
}

export function useLocationContext() {
  return useContext(Context);
}
