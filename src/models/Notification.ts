import { PaymentRequest } from "./PaymentRequest";
export interface Notification {
    accept(orderId: number);
    reject(orderId: number);
    outOfStock(orderId: number, itemIndex: number);
    updateEta(orderId: number, eta: Date);
    updateCollectionPoint(orderId: number, collectionPoint: string);
    onTheWayBack(orderId: number);
    arrival(paymentRequest: PaymentRequest);
}