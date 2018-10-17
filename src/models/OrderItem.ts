import { Product } from './Product';
import { Account } from './Account';
export class OrderItem {
  id: number;
  product: string;
  consumerId: string;
  accepted: boolean;
  actualPrice: number;
  outOfStock: boolean;
}
