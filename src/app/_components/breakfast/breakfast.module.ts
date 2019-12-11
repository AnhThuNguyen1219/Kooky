import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReviewModule } from '../review/review.module';
import { RouterModule, Routes } from '@angular/router';
import { SlideBreakfastComponent } from '../slide-breakfast/slide-breakfast.component';
import { FoodListBreakfastComponent } from '../food-list-breakfast/food-list-breakfast.component';
import { ProductBreakfastComponent } from '../product-breakfast/product-breakfast.component';
import { PosterBreakfastComponent } from '../poster-breakfast/poster-breakfast.component';

const router: Routes=[
  {path:'slide-breakfast', component: SlideBreakfastComponent},
  {path:'food-list-breakfast', component: FoodListBreakfastComponent},
  {path:'product-breakfast', component: ProductBreakfastComponent},
  {path:'poster-breakfast', component:PosterBreakfastComponent}
]

@NgModule({
  declarations: [
    SlideBreakfastComponent,
    FoodListBreakfastComponent,
    ProductBreakfastComponent,
    PosterBreakfastComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
    ReviewModule,
    RouterModule.forRoot(router,
      { enableTracing: true }
    )
  ],
  exports: [
    RouterModule,
    SlideBreakfastComponent,
    FoodListBreakfastComponent,
    ProductBreakfastComponent,
    PosterBreakfastComponent
  ]
})
export class BreakfastModule { }
