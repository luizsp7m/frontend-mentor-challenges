import { createContext, useState } from "react";

export const AppContext = createContext();

export function AppProvider({ children }) {

  const [amount, setAmount] = useState(0);
  const [productInCart, setProductInCart] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <AppContext.Provider value={{
      amount,
      setAmount,
      productInCart,
      setProductInCart,
      modalOpen, 
      setModalOpen
    }}>
      { children }
    </AppContext.Provider>
  );
}