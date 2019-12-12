import { Component, OnInit } from '@angular/core';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { from } from 'rxjs';
import { Food } from 'src/app/_entities/food';
import { FoodService } from 'src/app/_service/food.service';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
foods:Food[];
selectedFood:Food;
  constructor(private foodService:FoodService) { }
    onSelect(food:Food):void
    {
      this.selectedFood=food;
    }
  ngOnInit() {
    this.foodService.getFoods().subscribe(foods=>this.foods=foods);
  }



}
