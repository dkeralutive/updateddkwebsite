/* eslint-disable react-refresh/only-export-components */
import { createContext, useState, useContext } from "react";
import { contextProvider } from "../types/contexts";

export interface StoreContextProps {
  isNewsLetterSuccess: boolean;
  setIsNewsLetterSuccess: React.Dispatch<React.SetStateAction<boolean>>;
}

const StoreContext = createContext({} as StoreContextProps);

export function useStoreContext() {
    useContext(StoreContext);
}


export function StoreContextProvider({ children }: contextProvider) {
  //     // MODALS
  const [isNewsLetterSuccess, setIsNewsLetterSuccess] = useState(false);

  // const [isOrderSuccess, setIsOrderSuccess] = useState(false);
  // const [isPaymentSuccess, setIsPaymentSuccess] = useState(false);
  // const [isMailSuccess, setIsMailSuccess] = useState(false);

  // // Store State
  // const [cartItems, setCartItems] = useState([]);
  // const [selectedItem, setSelectedItem] = useState({});

  // // Get store item for art&craft and fashion as a joint store
  // function getStoreItem(id, store) {
  //     const propObj = store.find((item) => item.id === id);
  //     return setSelectedItem(propObj);
  // }

  // // Add to cart
  // function addToCart(id, product) {
  //     if (cartItems.find(item => item.id === id)) {
  //         setCartItems(prev => {
  //             return [...prev].map(item => {
  //                 if (item.id === id) {
  //                     return { ...item, qty: item.qty + 1 }
  //                 } else {
  //                     return item
  //                 }
  //             })
  //         })
  //     } else {
  //         return setCartItems([...cartItems, { ...product, qty: 1 }])
  //     }
  // }

  // // OrderCount appearing in the FashionNavbar is the cart count of selected items
  // const cartQtys = cartItems.map(item => item.qty)
  // const orderCount = cartQtys.reduce((acc, el) => acc + el, 0)

  // // Increment orderCount
  // function increaseOrderCount(id) {
  //     const item = cartItems.find(el => el.id === id)
  //     item.qty += 1
  //     console.log(item)
  // }

  const contextValues = {
    isNewsLetterSuccess,
    setIsNewsLetterSuccess,
    // isPaymentSuccess,
    // setIsPaymentSuccess,
    // isOrderSuccess,
    // setIsOrderSuccess,
    // isMailSuccess,
    // setIsMailSuccess,
    // orderCount,
    // addToCart,
    // getStoreItem,
    // selectedItem,
    // cartItems,
    // increaseOrderCount,
  };
  return (
    <StoreContext.Provider value={contextValues}>
      {children}
    </StoreContext.Provider>
  );
}
