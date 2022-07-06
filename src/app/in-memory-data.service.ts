import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 12, name: 'Nicer', salary: 25000 },
      { id: 13, name: 'Bombasto', salary: 55000 },
      { id: 14, name: 'Celeritas', salary: 35000 },
      { id: 15, name: 'Magneta', salary: 45000 },
      { id: 16, name: 'RubberMan', salary: 50000 },
      { id: 17, name: 'Dynama', salary: 15000 },
      { id: 18, name: 'Pikachu', salary: 150000 },
      { id: 19, name: 'Magma', salary: 250000 },
      { id: 20, name: 'Tornado', salary: 22000 }
    ];
    return {heroes};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}