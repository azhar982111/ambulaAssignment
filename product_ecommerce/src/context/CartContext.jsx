import React from "react";

export const CartContext = React.createContext();


export function CartContextProvider({ children }) {
  const [cartData, setcartData] = React.useState([]);

  const handleCartUpdate = (val) => {
    setcartData([...cartData,val]);
  };

  const deleteCartItem = (val) => {
    setcartData(val);
  };

  return (
    <CartContext.Provider value={{ cartData,handleCartUpdate,deleteCartItem }}>
      {children}
    </CartContext.Provider>
  );
}
