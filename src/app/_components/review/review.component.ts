import { Component, OnInit, Input } from '@angular/core';
import { FoodService } from 'src/app/_service/food.service';
import { Food, Step } from 'src/app/_entities/food';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { StepService } from 'src/app/_service/step.service';
@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})

export class ReviewComponent implements OnInit {
@Input() food:Food;
  constructor(private foodService:FoodService,
    private route:ActivatedRoute,
    private location:Location,
    private stepService:StepService
    ) { }
  steps:Step[];
  ngOnInit() {
    this.getFoodById();
  }
  getFoodById()
  {
    const id= +this.route.snapshot.paramMap.get('id');
    this.foodService.getFoodById(id).subscribe(food=>this.food=food);
  }
  getStepByFoodId()
  {
    const id= +this.route.snapshot.paramMap.get('id');
    this.stepService.getStepByFoodId(id).subscribe(steps=>this.steps=steps);
  }
}
