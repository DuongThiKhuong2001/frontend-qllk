import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material-module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FormdesignComponent } from './user/formdesign/formdesign.component';
import { ToastrModule } from 'ngx-toastr';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './auth/register/register.component';
import { httpInterceptorProviders } from './_helpers/http.interceptor';
import { LoginComponent } from './auth/login/login.component';
import { MenubarComponent } from './admin/menubar/menubar.component';
import { RootComponent } from './root.component';
import { AdminhomeComponent } from './admin/adminhome/adminhome.component';
import { UserhomeComponent } from './user/userhome/userhome.component';
import { TestComponent } from './admin/test/test.component';
import { AdminComponent } from './admin/AdminComponent';
import { UserComponent } from './user/UserComponent';
import { HeaderComponent } from './user/header/header.component';
import { FooterComponent } from './user/footer/footer.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { HosoComponent } from './user/hoso/hoso.component';
import { MainComponent } from './user/main/main.component';
@NgModule({
  declarations: [
    AppComponent,
    RootComponent,
    MenubarComponent,
    FormdesignComponent,
    LoginComponent,
    RegisterComponent,
    AdminhomeComponent,
    UserhomeComponent,
    TestComponent,
    AdminComponent,
    UserComponent,
    HeaderComponent,
    FooterComponent,
    HosoComponent,
    MainComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    ToastrModule.forRoot({
      timeOut: 1500, // Thiết lập thời gian tồn tại là 1,5 giây
    }),
    CommonModule,
    CarouselModule,
  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent],
})
export class AppModule {}
