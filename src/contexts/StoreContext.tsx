/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from "react";
import { CartItemProps, StoreItemProps, contextProvider } from "../types/contexts";

export interface StoreContextProps {
  isNewsLetterSuccess: boolean;
  setIsNewsLetterSuccess: React.Dispatch<React.SetStateAction<boolean>>;

  isOrderSuccess: boolean;
  setIsOrderSuccess: React.Dispatch<React.SetStateAction<boolean>>;

  isMailSuccess: boolean;
  setIsMailSuccess: React.Dispatch<React.SetStateAction<boolean>>;

  cartCount: () => number;

  getStoreItem: (id: number, store: StoreItemProps[]) => void
}

const StoreContext = createContext({} as StoreContextProps);

export function useStoreContext() {
  return useContext(StoreContext);
}

export function StoreContextProvider({ children }: contextProvider) {
  //     // MODALS
  const [isNewsLetterSuccess, setIsNewsLetterSuccess] = useState(false);
  const [isOrderSuccess, setIsOrderSuccess] = useState(false);
  const [isMailSuccess, setIsMailSuccess] = useState(false);

  // const [isPaymentSuccess, setIsPaymentSuccess] = useState(false);

  // // Store State
  const [cartItems, setCartItems] = useState<CartItemProps[]>([]);
  const [selectedItem, setSelectedItem] = useState<StoreItemProps>(
    {} as StoreItemProps
  );
  

  // // Get store item for art&craft and fashion as a joint store
  function getStoreItem(id: number, store: StoreItemProps[]) {
      const propObj = store.find((item) => item.id === id);
      if (propObj) return setSelectedItem(propObj);
  }

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
  function cartCount() {
    const cartQtys = cartItems.map((item) => item.qty);
    const orderCount = cartQtys.reduce((acc, el) => acc + el, 0);
    return orderCount;
  }

  // // Increment orderCount
  // function increaseOrderCount(id) {
  //     const item = cartItems.find(el => el.id === id)
  //     item.qty += 1
  //     console.log(item)
  // }

  const contextValues = {
    isNewsLetterSuccess,
    setIsNewsLetterSuccess,
    isOrderSuccess,
    setIsOrderSuccess,
    cartCount,
    isMailSuccess,
    setIsMailSuccess,
    getStoreItem,

    // isPaymentSuccess,
    // setIsPaymentSuccess,
    // orderCount,
    // addToCart,
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
