import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { listResponseModel } from '../models/listResponseModel';
import { Rental } from '../models/rental';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class RentalService {
  apiUrl= "https://localhost:44321/api/"
  constructor(private httpClient:HttpClient) { }

  getRentals():Observable<listResponseModel<Rental>>{
    let newPath=this.apiUrl + "rentals/getall"
    return this.httpClient.get<listResponseModel<Rental>>(newPath)
  }
  addRental(rent: Rental): Observable<ResponseModel> {
    let path = this.apiUrl+"rentals/add";
    return this.httpClient.post<ResponseModel>(path,rent);
  }
  getRentalsByCarId(carId:number):Observable<listResponseModel<Rental>>
  {
    let newPath=this.apiUrl+"getrentaldetailsbycarid?carId="+carId;
    return this.httpClient.get<listResponseModel<Rental>>(newPath);
  }
}
