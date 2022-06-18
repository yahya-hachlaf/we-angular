import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ExercicesComponent } from "./exercices/exercices.component";
import { AboutComponent } from "./about/about.component";


const routes: Routes = [
  { path: 'Home', component: HomeComponent },
  { path: 'Exercices', component: ExercicesComponent },
  { path: 'About', component: AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
