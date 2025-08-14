import { Injectable } from '@nestjs/common';
import { Customer } from './interfaces/customer.interface';
import { CreateCustomerDto  } from './dto/create-costomer.dto';

@Injectable()
export class CostomerService {
  private customers: Customer[] = [];

  getAllCustomers(): Customer[] {
    return this.customers;
  }
  addCustomer(createCustomerDto: CreateCustomerDto ): Customer {
    const newCustomer: Customer = {
      id: Date.now(),
      ...createCustomerDto,
    };
    this.customers.push(newCustomer);
    return newCustomer; 
  }
}
