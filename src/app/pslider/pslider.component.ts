import { Component, OnInit, Input } from '@angular/core';
import { PointsService } from '../services/points.service';
import { Category } from '../model/category';

@Component({
  selector: 'app-pslider',
  templateUrl: './pslider.component.html',
  styleUrls: ['./pslider.component.css']
})
export class PsliderComponent implements OnInit {
  @Input() category: Category;

  constructor(public pointsService: PointsService) { }

  ngOnInit() {
  }

  valueChange(event: any) {
    this.pointsService.setPoints(this.category.name, event.value);
  }
}
