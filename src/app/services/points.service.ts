import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Category } from '../model/category';

@Injectable({
  providedIn: 'root'
})
export class PointsService {
  private categories: Category[] = [];
  private points: {[key: string]: number} = {};
  private totalPoints: number = 0;

  pointsTotalChanged$ = new Subject<number>();

  constructor() { }

  getPoints(cat: string): number {
    return this.points[cat];
  }

  setPoints(cat: string, amount: number) {
    this.points[cat] = amount;
    this.recalculateTotalPoints();
  }

  private recalculateTotalPoints() {
    const prev = this.totalPoints;
    this.totalPoints = Object.values(this.points).reduce((sum, current) => {
      return sum + current;
    }, 0);

    if (prev !== this.totalPoints) {
      this.pointsTotalChanged$.next(this.totalPoints);
    }
  }

  total(): number {
    return this.totalPoints;
  }

  getCategories(): Category[] {
    return this.categories;
  }

  addCategory(cat: Category) {
    if (!this.points[cat.name]) {
      this.points[cat.name] = 0;
    }
    this.categories.push(cat);
  }

  removeCategory(cat: Category) {
    delete this.points[cat.name];
    const index = this.categories.indexOf(cat);
    if (index >= 0) {
      this.categories.splice(index, 1);
    }
    this.recalculateTotalPoints();
  }

  prioritised(n: number = 5): string[] {
    return this.sorted((a, b) => {
      return b[1] - a[1]; // sort descending
    }, n)
      .filter(catname => this.points[catname] > 0) // don't show zero-point entries
    ;
  }

  deprioritised(n: number = 5): string[] {
    return this.sorted((a, b) => {
      return a[1] - b[1]; // sort ascending
    }, n);
  }

  private sorted(sortFunction: (a,b) => number, n = 5): string[] {
    // https://stackoverflow.com/a/44109065/1271901
    return Array
      .from(Object.entries(this.points)) // ES 2017, may need polyfill
      .sort(sortFunction)
      .slice(0, n)
      .map(entry => entry[0]);
  }
}
