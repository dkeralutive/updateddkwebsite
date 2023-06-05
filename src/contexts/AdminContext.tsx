/* eslint-disable react-refresh/only-export-components */
import { createContext, useState, useContext } from "react";
import useLocalStorage from "use-local-storage";
import {
  AdminContextProps,
  adminCustomerProps,
  contextProvider,
  loginStatesProp,
  productCategoryProps,
  productDescriptionProps,
  stockProps,
} from "../types/contexts";

const AdminContext = createContext({} as AdminContextProps);

export function useAdminContext() {
  return useContext(AdminContext);
}

const AdminContextProvider = ({ children }: contextProvider) => {
  // ** States for staff login
  const [loginStates, setLoginStates] = useLocalStorage<loginStatesProp>(
    "loginStates",
    {
      isLoginSuccessful: false,
      isLoginFailed: false,
      user: "",
    }
  );

  const [token, setToken] = useLocalStorage<string>("token", "");

  //   // State for product categories
  const [productCategories, setProductCategories] = useState<
    productCategoryProps[]
  >([]);

    // State for storing product decription images
    const [productImgs, setProductImgs] = useState<string[]>([]);

    // ** State to store list of all description
    const [productDescription, setProductDescription] = useState<productDescriptionProps[]>([]);

  // ** State to store list of admin customers
    const [customers, setCustomers] = useState<adminCustomerProps[]>([]);

    // ** State to store list of all stock
    const [stockList, setStockList] = useState<stockProps[]>([]);

    // ** State to store Receipts
    // const [receipts, setReceipts] = useState<stockProps[]>([]);

  
  const contextValues = {
    loginStates,
    setLoginStates,
    token,
    setToken,
    productCategories,
    setProductCategories,
    productImgs,
    setProductImgs,
    productDescription,
    setProductDescription,
    customers,
    setCustomers,
    stockList,
    setStockList,
  };

  return (
    <AdminContext.Provider value={contextValues}>
      {children}
    </AdminContext.Provider>
  );
};

export { AdminContext, AdminContextProvider };
