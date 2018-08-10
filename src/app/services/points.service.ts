import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PointsService {
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
    var prev = this.totalPoints;
    this.totalPoints = Object.values(this.points).reduce((sum, current) => {
      return sum + current;
    }, 0);
    
    if (prev != this.totalPoints) {
      this.pointsTotalChanged$.next(this.totalPoints);
    }
  }

  total(): number {
    return this.totalPoints;
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
    this.recalculateTotalPoints();
  }

  prioritised(n: number = 5): string[] {
    return this.sorted((a, b) => {
      return b[1] - a[1]; // sort descending
    }, n);
  }

  deprioritised(n: number = 5): string[] {
    return this.sorted((a, b) => {
      return a[1] - b[1]; // sort descending
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
