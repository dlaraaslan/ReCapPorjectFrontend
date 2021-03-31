import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from '../models/car';
import { listResponseModel } from '../models/listResponseModel';


@Injectable({
  providedIn: 'root'
})
export class CarService {

  apiUrl = "https://localhost:44321/api/cars/getcardetails";

  constructor(private httpClient: HttpClient) { }

  getCars():Observable<listResponseModel<Car>>{
    return this.httpClient.get<listResponseModel<Car>>(this.apiUrl);
    
  }
}
