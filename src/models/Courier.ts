import { Store } from './Store';
import { OrderItem } from './OrderItem';
export class Courier {
    id: number;
    nickname: string;
    eta: string;
    store: Store;
    pickUpLocation: string;
    orderItems: OrderItem[];
}
