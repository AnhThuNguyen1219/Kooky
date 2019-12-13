import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './_components/header/header.component';
import { FooterComponent } from './_components/footer/footer.component';

import { HomeModule } from './_components/home/home.module';
import { ReviewModule } from './_components/review/review.module';
import { LoginComponent } from './_components/login/login.component';
import { LoginModule } from './_components/login/login.module';
import { RegistrationComponent } from './_components/registration/registration.component';
import { RegistrationModule } from './_components/registration/registration.module';
import { BreakfastModule } from './_components/breakfast/breakfast.module';
import { UserComponent } from './_components/user/user.component';
import { HeaderUserComponent } from './_components/header-user/header-user.component';
import { GerneComponent } from './_components/gerne/gerne.component';





@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    RegistrationComponent,
    UserComponent,
    HeaderUserComponent,
    GerneComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatIconModule,
    NgbModule,
    HomeModule,
    ReviewModule,
    LoginModule,
    RegistrationModule,
    BreakfastModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
