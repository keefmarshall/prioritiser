import { Component } from '@angular/core';
import { PointsService } from './services/points.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'priorites';

  private all_categories: string[] = [
    "Stability",
    "Scalability",
    "Performance / Speed",
    "Polished look and feel",
    "User experience",
    "Number of features",
    "Ease of adding new features",
    "Security",
    "Avoiding vendor lock-in",
    "White-label branding",
    "Mobile apps",
    "APIs for 3rd parties"
  ];

  constructor(public pointsService: PointsService) {
    this.all_categories.forEach(cat =>
      this.pointsService.addCategory(cat)
    )
  }
}
