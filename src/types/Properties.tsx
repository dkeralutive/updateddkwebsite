import { imgListProps } from "./contexts";

export interface NoOfPropertiesByCatProp {
  PROLAN: number;
  PROSHO: number;
  PROAPA: number;
}


export interface PropertyResponseProps {
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

export interface TotalNoOfPropertiesResponseProps {
  responseDto: {
    code: string;
    message: string;
  };
  productDescriptionDtoList: PropertyResponseProps[];
  productDescriptionDto: PropertyResponseProps;
  values: NoOfPropertiesByCatProp;
}