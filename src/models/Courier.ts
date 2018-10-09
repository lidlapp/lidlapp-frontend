import { Store } from './Store';
export class Courier {
    id: number;
    nickname: string;
    eta: Date;
    store: Store;
    pickUpLocation: string;
}
