import { Component, OnInit, OnDestroy } from '@angular/core';
import { PointsService } from '../services/points.service';
import {trigger, state, style, animate, transition} from '@angular/animations';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-pbar',
  templateUrl: './pbar.component.html',
  styleUrls: ['./pbar.component.css'],
  animations: [
    trigger('totalState', [
      state('green', style({ backgroundColor: '#fff' })),
      state('red',   style({ backgroundColor: '#ff6060' })),
      transition('green => red', animate('100ms ease-in')),
      transition('red => green', animate('100ms ease-out'))
    ])
  ]
})
export class PbarComponent implements OnInit, OnDestroy {
  pointsMaxPercentage = "25";
  state = "green";

  pointsTotal: number;

  private psub: Subscription = null;

  constructor(public pointsService: PointsService) { 
    this.pointsTotal = this.pointsService.total();
  }

  ngOnInit() {
    this.psub = this.pointsService.pointsTotalChanged$.subscribe(newTotal => {
      this.pointsTotal = newTotal;
      this.state = (newTotal > this.maxPoints()) ? "red" : "green";
    });
  }

  ngOnDestroy() {
    if (this.psub) {
      this.psub.unsubscribe();
    }
  }
  
  maxPoints(): number {
    var numcats = this.pointsService.categories().length;
    return Math.ceil(numcats * parseInt(this.pointsMaxPercentage) * 5 / 100);
  }

  projectSizeChanged($event) {
    this.state = (this.pointsTotal > this.maxPoints()) ? "red" : "green";
  }
}
