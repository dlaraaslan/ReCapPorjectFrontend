import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from '../models/car';
import { listResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarDetailService {

  apiUrl="https://localhost:44316/api/"
  constructor(private httpClient:HttpClient) { }

  getCarDetailsById(carId:number):Observable<listResponseModel<Car>>{
    let newPath=this.apiUrl+"cars/getcardetailsbyid?carId="+carId
    return this.httpClient.get<listResponseModel<Car>>(newPath)
  }
  getCarDetail(carId:number):Observable<listResponseModel<Car>> //aykut
  {
    let newPath = this.apiUrl+"cars/getalldetail?carId="+carId
    return this.httpClient.get<listResponseModel<Car>>(newPath)
  }
}
