import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PointsService {
  points: {[key: string]: number} = {};

  constructor() { }

  total(): number {
    return Object.values(this.points).reduce((sum, current) => {
      return sum + current;
    }, 0);
  }

  categories(): string[] {
    return Object.keys(this.points);
  }

  addCategory(cat: string) {
    if (!this.points[cat]) {
      this.points[cat] = 0;
    }
  }

  removeCategory(cat: string) {
    delete this.points[cat];
  }
}
