import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateHeaderComponent } from './create-header/create-header.component';
import { HeaderImageComponent } from './header-image/header-image.component';


const routes: Routes = [
  {
    path: '',
    component: CreateHeaderComponent,
  },
  {
    path: 'header-image',
    component: HeaderImageComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
