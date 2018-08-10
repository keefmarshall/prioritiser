import { Component } from '@angular/core';
import { PointsService } from './services/points.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'priorites';

  constructor(public pointsService: PointsService) { 
    pointsService.addCategory("test");
  }
}
