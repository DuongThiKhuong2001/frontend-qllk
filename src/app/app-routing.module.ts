import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormdesignComponent } from './user/formdesign/formdesign.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { AdminhomeComponent } from './admin/adminhome/adminhome.component';
import { RootComponent } from './root.component';
import { TestComponent } from './admin/test/test.component';
import { UserhomeComponent } from './user/userhome/userhome.component';
import { AdminComponent } from './admin/AdminComponent';
import { UserComponent } from './user/UserComponent';
import { FooterComponent } from './user/footer/footer.component';
import { HosoComponent } from './user/hoso/hoso.component';

const routes: Routes = [
  {
    path: '',
    component: RootComponent,
  },
  {
    path: 'quantrivien',
    component: AdminComponent,
    children: [
      { path: '', component: AdminhomeComponent },
      {
        path: 'trangchu',
        component: AdminhomeComponent,
      },
      { path: 'test', component: TestComponent },
    ],
  },
  {
    path: 'nguoidung',
    component: UserComponent,
    children: [
      { path: '', component: UserhomeComponent },
      { path: 'home', component: UserhomeComponent },
      {
        path: 'trangchu',
        component: UserhomeComponent,
      },
      { path: 'hoso', component: HosoComponent },
      { path: 'footer', component: FooterComponent },
      { path: 'themhoso', component: FormdesignComponent},
    ],
  },

  {
    path: 'dangnhap',
    component: LoginComponent,
  },
  {
    path: 'dangky',
    component: RegisterComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
