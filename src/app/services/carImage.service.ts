import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarImage } from '../models/carImage';
import { listResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarImageService {

  apiUrl="https://localhost:44316/api/"
  constructor(private httpClient:HttpClient) { }

  getCarImagesById(id:number):Observable<listResponseModel<CarImage>>{
    let newPath=this.apiUrl+"carImages/getimagesbycarid?CarId="+id
    return this.httpClient.get<listResponseModel<CarImage>>(newPath)
  }
}
