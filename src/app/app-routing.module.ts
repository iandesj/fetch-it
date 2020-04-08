import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FetchImageComponent } from './fetch-image/fetch-image.component';


const routes: Routes = [
  {
    path: 'fetch',
    component: FetchImageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
