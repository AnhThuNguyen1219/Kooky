import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route } from '@angular/compiler/src/core';
import { LoginComponent } from '../login/login.component';
import { LoginModule } from '../login/login.module';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationModule } from '../registration/registration.module';
import { RegistrationComponent } from '../registration/registration.component';

const router: Routes=[
  {path:'login', component: LoginComponent},
  {path:'registration', component: RegistrationComponent}

]

@NgModule({
  declarations: [
    LoginComponent,
    RegistrationComponent
  ],
  imports: [
    CommonModule,
    LoginModule,
    RegistrationModule,
    RouterModule.forRoot(router)
  ],
  exports: [RouterModule]
})
export class HeaderModule { }
