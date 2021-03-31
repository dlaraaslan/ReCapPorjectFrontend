import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../models/customer';
import { listResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  apiUrl= "https://localhost:44321/api/customers/getcustomerdetails"
  constructor(private httpClient:HttpClient) { }

  getCustomers():Observable<listResponseModel<Customer>>{
    return this.httpClient.get<listResponseModel<Customer>>(this.apiUrl)
  }
}
