import { Injectable } from '@nestjs/common';
import { Flunt } from 'src/utils/flunt';
import { Customer } from '../models/customer.model';
import { Contract } from './contract';
@Injectable()
export class CreateCustomerContract implements Contract {
    errors: any[];
    validate(model: Customer): boolean {
        const flunt = new Flunt();
        flunt.hasMinLen(model.name, 5, "Nome inválido");
        flunt.isEmail(model.email, "E-mail inválido");
        flunt.isFixedLen(model.document, 11, "CPF inválido");
        flunt.hasMinLen(model.password, 6, "Password inválido");

        this.errors = flunt.errors;
        return flunt.isValid();
    }

}