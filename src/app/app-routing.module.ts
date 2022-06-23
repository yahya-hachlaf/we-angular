import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ExercicesComponent } from "./exercices/exercices.component";
import { AboutComponent } from "./about/about.component";
import { Ex11Component } from "./exercices/tasks/ex11/ex11.component";
import { Ex12Component } from './exercices/tasks/ex12/ex12.component';
import { Ex13Component } from './exercices/tasks/ex13/ex13.component';
import { Ex14Component } from './exercices/tasks/ex14/ex14.component';
import { Ex21Component } from './exercices/tasks/ex21/ex21.component';
import { Ex22Component } from './exercices/tasks/ex22/ex22.component';
import { Ex23Component } from './exercices/tasks/ex23/ex23.component';




const routes: Routes = [
  { path: 'Home', component: HomeComponent },
  {
    path: 'Exercices', component: ExercicesComponent, children:
      [
        { path: 'ex11', component: Ex11Component },
        { path: 'ex12', component: Ex12Component },
        { path: 'ex13', component: Ex13Component },
        { path: 'ex14', component: Ex14Component },
        { path: 'ex21', component: Ex21Component },
        { path: 'ex22', component: Ex22Component },
        { path: 'ex23', component: Ex23Component },
        { path: 'ex21', component: Ex21Component },
        { path: 'ex21', component: Ex21Component },
        { path: 'ex21', component: Ex21Component },
        { path: 'ex21', component: Ex21Component },
        { path: 'ex21', component: Ex21Component },
        { path: 'ex21', component: Ex21Component },
        { path: 'ex21', component: Ex21Component },
        { path: 'ex21', component: Ex21Component },
        { path: 'ex21', component: Ex21Component },

      ]
  },
  { path: 'About', component: AboutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
