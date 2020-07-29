import { ComerciosComponent } from './pages/comercios/comercios.component';
import { ComercioComponent } from './pages/comercio/comercio.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path: 'comercios', component: ComerciosComponent},
  {path: 'comercio/:id', component: ComercioComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'comercios'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
