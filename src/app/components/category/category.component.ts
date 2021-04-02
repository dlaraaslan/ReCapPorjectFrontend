import { Component, OnInit } from '@angular/core';
import { Brand } from 'src/app/models/brand';
import { Color } from 'src/app/models/color';
import { BrandService } from 'src/app/services/brand.service';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  categories:string[] = ['Cars','Customers','Rentals'];
  currentCategory: string;
  brands:Brand[];
  colors:Color[];

  constructor(private brandService:BrandService, private colorService:ColorService) { }

  ngOnInit(): void {
    this.getBrands();
    this.getColors();
  }

  setCurrentCategory(category:string){
    this.currentCategory = category;
  }
  getCurrentCategory(category:string){
    if(category ==this.currentCategory){
      return'list-group-item list-group-item-action list-group-item-secondary active';
    } else {
      return 'list-group-item list-group-item-action list-group-item-secondary';
    }
  }
  getBrands(){
    this.brandService.getBrands().subscribe(response=>{
        this.brands=response.data;
    })
  }
  getColors(){
    this.colorService.getColors().subscribe(response=>{
        this.colors=response.data;
    })
  }
}

