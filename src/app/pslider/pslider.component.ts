import { Component, OnInit, Input } from '@angular/core';
import { PointsService } from '../services/points.service';

@Component({
  selector: 'app-pslider',
  templateUrl: './pslider.component.html',
  styleUrls: ['./pslider.component.css']
})
export class PsliderComponent implements OnInit {
  @Input() category: string;

  constructor(public pointsService: PointsService) { }

  ngOnInit() {
  }

  valueChange(event: any) {
    this.pointsService.setPoints(this.category, event.value);
  }
}
