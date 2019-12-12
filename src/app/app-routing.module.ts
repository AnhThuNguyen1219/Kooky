import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import {HeaderComponent} from './_components/header/header.component';
import {FooterComponent} from './_components/footer/footer.component';

import {HomeComponent} from './_components/home/home.component';
import { ReviewComponent } from './_components/review/review.component';
import { LoginComponent } from './_components/login/login.component';
import { RegistrationComponent } from './_components/registration/registration.component';


 const routes: Routes = [
 {path:'', redirectTo:'home', pathMatch:'full'},
 {path:'header', component:HeaderComponent},
 {path:'footer', component:FooterComponent},
 {path:'', component:HomeComponent},
 {path :'review/:id', component:ReviewComponent},
 {path:'login', component:LoginComponent},
 {path:'registration', component: RegistrationComponent},
 //{path:'breakfast', component: BreakfastComponent}
 ]
@NgModule({
  imports: [RouterModule.forRoot(routes,{
    preloadingStrategy : PreloadAllModules
  }
    )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
