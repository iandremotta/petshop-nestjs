import { Address } from './adress.model';
import { CreditCard } from './credit-card.model';
import { Pet } from "./pet.model";
import { User } from './user.model';

export class Customer {
    constructor(
        public name: string,
        public document: string,
        public pets: Pet[],
        public billingAddress: Address,
        public shippingAddress: Address,
        public creditCard: CreditCard,
        public email: string,
        public user: User
    ) {

    }
}