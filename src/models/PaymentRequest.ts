import { PaymentStatus } from "./PaymentStatus";
export class PaymentRequest {
    id: number;
    url: string;
    status: PaymentStatus;
    expiration: Date;
}