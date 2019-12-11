import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentComponent } from '../comment/comment.component';
import { Route } from '@angular/compiler/src/core';
import { RouterModule, Routes } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


const router: Routes=[
  {path: 'comment', component: CommentComponent}

]

@NgModule({
  declarations: [
    CommentComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
    RouterModule.forRoot(router,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  exports: [
  RouterModule,
  CommentComponent
  ]
})
export class ReviewModule {}
