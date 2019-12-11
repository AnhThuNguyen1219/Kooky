import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SlideComponent} from '../slide/slide.component';
import { ProductComponent } from '../product/product.component';
import { PosterComponent } from '../poster/poster.component';
import {FoodListComponent} from '../food-list/food-list.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home.component';
import { ReviewComponent } from '../review/review.component';
import { RouterModule, Routes } from '@angular/router';
import { Route } from '@angular/compiler/src/core';
import { ReviewModule } from '../review/review.module';
import { BreakfastComponent } from '../breakfast/breakfast.component';
import { BreakfastModule } from '../breakfast/breakfast.module';

const router: Routes=[
  {path :'review' , component: ReviewComponent},
  {path:'product', component:ProductComponent},
  {path:'poster', component:PosterComponent},
  {path:'food-list', component:FoodListComponent},
  {path:'slide', component:SlideComponent},
  {path:'breakfast', component: BreakfastComponent}

]

@NgModule({
  declarations: [
    SlideComponent,
    FoodListComponent,
    ProductComponent,
    PosterComponent,
    HomeComponent,
    ReviewComponent,
    BreakfastComponent

  ],
  imports: [
    CommonModule,
    NgbModule,
    ReviewModule,
    BreakfastModule,
    RouterModule.forRoot(router)
  ],
  exports: [RouterModule]
})
export class HomeModule { }
