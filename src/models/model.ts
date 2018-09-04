export class Order {
    id: number;
    courier: Courier;
    items: OrderItem[];
}

export class OrderItem {
    product: Product;
    amount: number;
}

export class Product {
    id: number;
    price: number;
    name: string;
}

export class ChainStore {
    // Winkelketen
    id: number;
    name: string;
    url: string;
    products: Product[];
}

export class Store {
    id: number;
    chain: ChainStore;
    location: [number, number];
}

export class Courier {
    id: number;
    nickname: string;
    eta: Date;
    store: Store;
    collectionPoint: string;
}

export class PaymentRequest {
    id: number;
    url: string;
    status: PaymentStatus;
    expiration: Date;
}

export enum PaymentStatus {
    Open = 0,
    Closed = 1,
    Expired = 2
}

export class Account {
    nickname: string;
    password: string;
    name: string;
    iban: string;
}

export interface Notification {
    accept(orderId: number);
    reject(orderId: number);
    outOfStock(orderId: number, itemIndex: number);
    updateEta(orderId: number, eta: Date);
    updateCollectionPoint(orderId: number, collectionPoint: string)
    onTheWayBack(orderId: number)
    arrival(paymentRequest: PaymentRequest)
}