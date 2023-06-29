import { LichKhamChuyenKhoaComponent} from './user/lichkhamchuyenkhoa/lichkhamchuyenkhoa.component';
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
import { CosoyteComponent } from './user/cosoyte/cosoyte.component';
import { ChuyenkhoaComponent } from './user/chuyenkhoa/chuyenkhoa.component';
import { BacsiComponent } from './user/basi/basi.component';
import { LichkhamComponent } from './user/lichkham/lichkham.component';
import { LichTrucComponent} from './user/lichtruc/lichtruc.component';
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
      { path: 'trangchu', component: UserhomeComponent },
      { path: 'hoso', component: HosoComponent },
      { path: 'cosoyte', component: CosoyteComponent },
      { path: 'themhoso', component: FormdesignComponent },
      { path: 'chuyenkhoa/:id', component: ChuyenkhoaComponent },
      { path: 'bacsi/:id', component: BacsiComponent },
      { path: 'lichkham', component: LichkhamComponent },
      { path: 'lichkhamchuyenkhoa', component: LichKhamChuyenKhoaComponent },

      { path: 'lichtruc/:id', component: LichTrucComponent },
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
