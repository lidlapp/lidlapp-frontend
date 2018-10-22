import { Store } from './Store';
import { OrderItem } from './OrderItem';
import { Account } from './Account';
export class Courier {
  id: number;
  nickname: string;
  eta: string;
  store: Store;
  pickUpLocation: string;
  orderItems: OrderItem[];
  user: Account;
}
