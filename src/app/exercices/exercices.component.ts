import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';
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
        label: 'Einführung',
        items: [
          { label: 'Aufgabe 1', routerLink:""},
          { label: 'Aufgabe 2' },
          { label: 'Aufgabe 3' }
        ]
      },
      {
        label: 'CSS',
        items: [
          { label: 'Aufgabe 1' },
          { label: 'Aufgabe 2' },
          { label: 'Aufgabe 3' }
        ]
      },
      {
        label: 'JavaScript',
        items: [
          { label: 'Aufgabe 1' },
          { label: 'Aufgabe 2' },
          { label: 'Aufgabe 3' }
        ]
      },
      {
        label: 'DOM',
        items: [
          { label: 'Aufgabe 1' },
          { label: 'Aufgabe 2' },
          { label: 'Aufgabe 3' }
        ]
      },
      {
        label: 'ECMAScript',
        items: [
          { label: 'Aufgabe 1' },
          { label: 'Aufgabe 2' },
          { label: 'Aufgabe 3' }
        ]
      },
      {
        label: 'Functional',
        items: [
          { label: 'Aufgabe 1' },
          { label: 'Aufgabe 2' },
          { label: 'Aufgabe 3' }
        ]
      },
      {
        label: 'Async',
        items: [
          { label: 'Aufgabe 1' },
          { label: 'Aufgabe 2' },
          { label: 'Aufgabe 3' }
        ]
      },
      {
        label: 'SVG',
        items: [
          { label: 'Aufgabe 1' },
          { label: 'Aufgabe 2' },
          { label: 'Aufgabe 3' }
        ]
      },
      {
        label: 'TypeScript',
        items: [
          { label: 'Aufgabe 1' },
          { label: 'Aufgabe 2' },
          { label: 'Aufgabe 3' }
        ]
      },
      {
        label: 'Vue',
        items: [
          { label: 'Aufgabe 1' },
          { label: 'Aufgabe 2' },
          { label: 'Aufgabe 3' }
        ]
      },
      {
        label: 'PHP',
        items: [
          { label: 'Aufgabe 1' },
          { label: 'Aufgabe 2' },
          { label: 'Aufgabe 3' }
        ]
      }
    ];
  }

}
