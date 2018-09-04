import { Courier } from "./Courier";
import { OrderItem } from "./OrderItem";
export class Order {
    id: number;
    courier: Courier;
    items: OrderItem[];
}