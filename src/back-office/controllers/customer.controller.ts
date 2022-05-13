import { CreateCustomerContract } from './../contracts/custromer.contract';
import { ValidatorInterceptor } from './../../interceptors/validator.interceptor';
import { Result } from './../models/result.model';
import { Customer } from './../models/customer.model';
import { Body, Controller, Delete, Get, Param, Post, Put, UseInterceptors } from "@nestjs/common";
import { get } from "http";

@Controller('v1/customers')
export class CustomerController {
    @Get()
    get() {
        return 'Obter os clientes';
    }

    @Get(':document')
    getById(@Param('document') document) {
        return document;
    }

    @Post()
    @UseInterceptors(new ValidatorInterceptor(new CreateCustomerContract()))
    post(@Body() body: Customer) {
        return new Result("Cliente atualizado com sucesso", true, body, "");
    }

    @Put(':document')
    put(@Param('document') document, @Body() body: Customer) {
        return new Result("Cliente atualizado com sucesso", true, body, "");
    }

    @Delete()
    delete() { }
}