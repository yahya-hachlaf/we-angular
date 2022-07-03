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
import { Ex31Component } from './exercices/tasks/ex31/ex31.component';
import { Ex32Component } from './exercices/tasks/ex32/ex32.component';
import { Ex33Component } from './exercices/tasks/ex33/ex33.component';
import { Ex41Component } from './exercices/tasks/ex41/ex41.component';
import { Ex42Component } from './exercices/tasks/ex42/ex42.component';
import { Ex43Component } from './exercices/tasks/ex43/ex43.component';
import { Ex44Component } from './exercices/tasks/ex44/ex44.component';
import { Ex51Component } from './exercices/tasks/ex51/ex51.component';
import { Ex52Component } from './exercices/tasks/ex52/ex52.component';
import { Ex53Component } from './exercices/tasks/ex53/ex53.component';
import { Ex61Component } from './exercices/tasks/ex61/ex61.component';
import { Ex62Component } from './exercices/tasks/ex62/ex62.component';
import { Ex63Component } from './exercices/tasks/ex63/ex63.component';
import { Ex64Component } from './exercices/tasks/ex64/ex64.component';
import { Ex65Component } from './exercices/tasks/ex65/ex65.component';
import { Ex71Component } from './exercices/tasks/ex71/ex71.component';
import { Ex72Component } from './exercices/tasks/ex72/ex72.component';
import { Ex81Component } from './exercices/tasks/ex81/ex81.component';
import { Ex82Component } from './exercices/tasks/ex82/ex82.component';
import { Ex91Component } from './exercices/tasks/ex91/ex91.component';
import { Ex92Component } from './exercices/tasks/ex92/ex92.component';
import { Ex101Component } from './exercices/tasks/ex101/ex101.component';
import { Ex102Component } from './exercices/tasks/ex102/ex102.component';
import { Ex103Component } from './exercices/tasks/ex103/ex103.component';




const routes: Routes = [
  { path: 'Home', component: HomeComponent },
  { path: '', component: HomeComponent },
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
        { path: 'ex31', component: Ex31Component },
        { path: 'ex32', component: Ex32Component },
        { path: 'ex33', component: Ex33Component },
        { path: 'ex41', component: Ex41Component },
        { path: 'ex42', component: Ex42Component },
        { path: 'ex43', component: Ex43Component },
        { path: 'ex44', component: Ex44Component },
        { path: 'ex51', component: Ex51Component },
        { path: 'ex52', component: Ex52Component },
        { path: 'ex53', component: Ex53Component },
        { path: 'ex61', component: Ex61Component },
        { path: 'ex62', component: Ex62Component },
        { path: 'ex63', component: Ex63Component },
        { path: 'ex64', component: Ex64Component },
        { path: 'ex65', component: Ex65Component },
        { path: 'ex71', component: Ex71Component },
        { path: 'ex72', component: Ex72Component },
        { path: 'ex81', component: Ex81Component },
        { path: 'ex82', component: Ex82Component },
        { path: 'ex91', component: Ex91Component },
        { path: 'ex92', component: Ex92Component },
        { path: 'ex101', component: Ex101Component },
        { path: 'ex102', component: Ex102Component },
        { path: 'ex103', component: Ex103Component },


      ]
  },
  { path: 'About', component: AboutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
