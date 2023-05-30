import { ReactNode } from "react";

export interface contextProvider {
  children: ReactNode;
}

// ** ================ ADMIN CONTEXT =================== ** //
export interface loginStatesProp {
  isLoginSuccessful: boolean;
  isLoginFailed: boolean;
  user: string;
}

// product category response prop
export interface productCategoryProps {
  category: string;
  code: string;
  productCode: string;
  id: number;
  version: number;
}

// ImageList type
export interface imgListProps {
  id: number;
  version: number;
  delFlag: string;
  createdOn: string;
  modifiedOn: string;
  imageUrl: string;
}

// Product description response prop
export interface productDescriptionProps {
  id: number;
  amount: number;
  description: string;
  currency: string;
  imageUrl: string;
  productCode: string;
  code: string;
  location: string;
  productCategoryCode: string;
  recent: string;
  multipartFile: string;
  productCodeList: string;
  productSize: string;
  price: number;
  multipartFileList: string;
  imagesList: imgListProps[];
}

// Admin customers response props
export interface adminCustomerProps {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
  userType: string;
  userName: string;
  phoneNumber: string;
  id: string;
}

// Admin stock response props
export interface stockProps {
  id: number;
  productDescriptionCode: string;
  dateTimeStock: string;
  quantity: number;
  productDescription: string;
  productType: string;
  productCategoryCode: string;
  stockStatus: boolean;
  stockCode: string;
}

export interface AdminContextProps {
  loginStates: loginStatesProp;
  setLoginStates: React.Dispatch<
    React.SetStateAction<loginStatesProp | undefined>
  >;

  token: string;
  setToken: React.Dispatch<React.SetStateAction<string>>;

  productCategories: productCategoryProps[];
  setProductCategories: React.Dispatch<
    React.SetStateAction<productCategoryProps[]>
  >;

  productImgs: string[];
  setProductImgs: React.Dispatch<React.SetStateAction<string[]>>;

  productDescription: productDescriptionProps[];
  setProductDescription: React.Dispatch<
    React.SetStateAction<productDescriptionProps[]>
  >;

  customers: adminCustomerProps[];
  setCustomers: React.Dispatch<React.SetStateAction<adminCustomerProps[]>>;

  stockList: stockProps[];
  setStockList: React.Dispatch<React.SetStateAction<stockProps[]>>;
}