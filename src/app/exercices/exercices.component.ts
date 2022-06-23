import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
@Component({
  templateUrl: './exercices.component.html',
  styleUrls: ['./exercices.component.scss']
})
export class ExercicesComponent implements OnInit {
  topics!: MenuItem[];
  constructor() { }
  ngOnInit(): void {
    this.topics = [
      {
        label: '1. Einführung',
        items: [
          { label: 'Aufgabe 1', routerLink: 'ex11' },
          { label: 'Aufgabe 2', routerLink: 'ex12' },
          { label: 'Aufgabe 3', routerLink: 'ex13' },
          { label: 'Aufgabe 4', routerLink: 'ex14' }
        ]
      },
      {
        label: '2. CSS I',
        items: [
          { label: 'Aufgabe 1', routerLink: 'ex21' },
          { label: 'Aufgabe 2', routerLink: 'ex22' },
          { label: 'Aufgabe 3', routerLink: 'ex23' }
        ]
      },{
        label: '3. CSS II',
        items: [
          { label: 'Aufgabe 1', routerLink: 'ex11' },
          { label: 'Aufgabe 2', routerLink: 'ex12' },
          { label: 'Aufgabe 3', routerLink: 'ex13' }
        ]
      },
      {
        label: '4. JavaScript',
        items: [
          { label: 'Aufgabe 1', routerLink: 'ex11' },
          { label: 'Aufgabe 2', routerLink: 'ex12' },
          { label: 'Aufgabe 3', routerLink: 'ex13' },
          { label: 'Aufgabe 4', routerLink: 'ex14' }
        ]
      },
      {
        label: '5. DOM',
        items: [
          { label: 'Aufgabe 1', routerLink: 'ex11' },
          { label: 'Aufgabe 2', routerLink: 'ex12' },
          { label: 'Aufgabe 3', routerLink: 'ex13' }
        ]
      },
      {
        label: '6. ECMAScript',
        items: [
          { label: 'Aufgabe 1', routerLink: 'ex11' },
          { label: 'Aufgabe 2', routerLink: 'ex12' },
          { label: 'Aufgabe 3', routerLink: 'ex13' },
          { label: 'Aufgabe 4', routerLink: 'ex14' },
          { label: 'Aufgabe 5', routerLink: 'ex11' },

        ]
      },
      {
        label: '7. Functional',
        items: [
          { label: 'Aufgabe 1', routerLink: 'ex11' },
          { label: 'Aufgabe 2', routerLink: 'ex12' }
        ]
      },
      {
        label: '8. Async',
        items: [
          { label: 'Aufgabe 1', routerLink: 'ex11' },
          { label: 'Aufgabe 2', routerLink: 'ex12' }
        ]
      },
      {
        label: '9. SVG',
        items: [
          { label: 'Aufgabe 1', routerLink: 'ex11' },
          { label: 'Aufgabe 2', routerLink: 'ex12' }
        ]
      },
      {
        label: '10. TypeScript',
        items: [
          { label: 'Aufgabe 1', routerLink: 'ex11' },
          { label: 'Aufgabe 2', routerLink: 'ex12' },
          { label: 'Aufgabe 3', routerLink: 'ex11' }
        ]
      },
      {
        label: '11. PHP',
        items: [
          { label: 'Aufgabe 1', routerLink: 'ex111' },
          { label: 'Aufgabe 2', routerLink: 'ex112' },
          { label: 'Aufgabe 3', routerLink: 'ex113' }
        ]
      }
    ];
  }

}
