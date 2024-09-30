import { IProducer } from "./IProducer";

export interface IProduct {
  title: string;
  coProducers?: IProducer[];
  description?: string[];
  imageLink?: string;
  linkToGooglePlayStore?: string;
  linkToProduct?: string;
  receiveDonations?: boolean;
  showContactForDemo?: boolean;
}
