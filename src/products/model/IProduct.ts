import { IProducer } from "./IProducer";

export interface IProduct {
  title: string;
  description?: string[];
  imageLink?: string;
  linkToGooglePlayStore?: string;
  linkToProduct: string;
  coProducers?: IProducer[];
}
