/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from "react";
import useLocalStorage from "use-local-storage";
import {
  PropertyResponseProps,
  TotalNoOfPropertiesResponseProps,
} from "../types/Properties";
import { contextProvider } from "../types/contexts";
import { useAdminContext } from "./AdminContext";
import { useNavigate } from "react-router-dom";

export interface PropertyContextProps {
  getPropertyItem: (id: number) => void;
  state: string;
  setState: any;
  firstPostIndex: number;
  postPerPage: number;
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  propertyPrice: string;
  setPropertyPrice: any;
  errorMsg: string;
  propertyItem: PropertyResponseProps;
}

const PropertyContext = createContext({} as PropertyContextProps);

export function usePropertyContext() {
  return useContext(PropertyContext);
}

export function PropertyContextProvider({ children }: contextProvider) {
  // Destructure values from admin contextProvider
  const { token } = useAdminContext();
  const navigate = useNavigate()

//   const [propertyStore, setPropertyStore] = useState<PropertyStoreProps[]>([]);

  //   State to store a selected property
  const [propertyItem, setPropertyItem] = useState<PropertyResponseProps>(
    {} as PropertyResponseProps
  );

  //   Error state to display errors
  const [errorMsg, setErrorMsg] = useState("");

  const [state, setState] = useLocalStorage<string>("state", "");

  // States for Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const postPerPage = 3;

  // States for selcting property price
  const [propertyPrice, setPropertyPrice] = useLocalStorage<string>(
    "propertyPrice",
    ""
  );

  const lastPostIndex = currentPage * postPerPage;
  const firstPostIndex = lastPostIndex - postPerPage;

  // Get selected property to display in the property details page
  function getPropertyItem(id: number) {
    const myHeaders = new Headers();
    myHeaders.append("apiKey", token);

    const requestOptions = {
      method: "GET",
      headers: myHeaders,
    };

    fetch(
      `${import.meta.env.VITE_BASEURL}/api/v1/productdescription/id?Id=${id}`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result: TotalNoOfPropertiesResponseProps) => {
        if (result.responseDto.code === "dkss") {
          setPropertyItem(result.productDescriptionDto);
          navigate("/property-details")
        } else {
          setErrorMsg(result.responseDto.message);
        }
      })
      .catch(() => setErrorMsg("Cannot connect to server"));
  }

  const contextValues = {
    getPropertyItem,
    state,
    setState,
    firstPostIndex,
    postPerPage,
    currentPage,
    setCurrentPage,
    propertyPrice,
    setPropertyPrice,
    errorMsg,
    propertyItem,
  };
  return (
    <PropertyContext.Provider value={contextValues}>
      {children}
    </PropertyContext.Provider>
  );
}
