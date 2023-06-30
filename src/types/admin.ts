/* eslint-disable @typescript-eslint/no-explicit-any */
import { ResponseDto } from './Properties';


export interface ReceiptTransaction {
  currency: string;
  userName: string;
  descriptionCode: string;
  reference: string;
  id: number;
  amount: string;
  multipartFile: string;
  imageUrl: string;
  transactionStatus: string;
}

export interface ReceiptResponseProp {
  responseDto: ResponseDto;
  transactionList: ReceiptTransaction[];
  transactionDto: any;
  transaction: any;
}