import { CustomerController } from './controllers/customer.controller';
import { Module } from '@nestjs/common';

@Module({
    controllers: [CustomerController],
})
export class BackOfficeModule { }
