import { Component } from '@angular/core';
import { PointsService } from './services/points.service';
import { Category } from './model/category';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'priorites';

  private all_categories: Category[] = [
    { name: "Stability", desc: "Fewer bugs and incorrect behaviours" },
    { name: "Scalability", desc: "Ready to handle many users/sessions without loss of performance"},
    {
      name: "High Availability",
      desc: "Will you lose money if the service is down for 5 minutes at 3am?"
    },
    { name: "Performance / Speed", desc: "Responds / loads quickly" },
    { name: "Polished look and feel", desc: "Professional design" },
    { name: "User experience", desc: "Easy to use, intuitive flows" },
    { name: "Number of features", desc: "Amount of functionality provided" },
    { name: "Ease of adding new features", desc: "How easy/quick it is to add new stuff" },
    { name: "Security", desc: "Application security and network security - you need some, but how much resource will you commit?" },
    { name: "Accessibility", desc: "Can people with disabilities use your app?" },
    {
      name: "Avoiding vendor lock-in",
      desc: "Some commercial software offers major benefits, but are you prepared to commit to always using them?"
    },
    { name: "White-label branding", desc: "Are you selling this as a service to clients, who may want their own brand?" },
    { name: "Mobile apps", desc: "Are you building mobile apps that need to use the application?" },
    { name: "APIs for 3rd parties", desc: "Do you need to expose features other companies can use remotely?" },
    { name: "Low running costs", desc: "Are you trying to minimise monthly fees for software or infrastructure?" }
  ];

  constructor(public pointsService: PointsService) {
    this.all_categories.forEach(cat =>
      this.pointsService.addCategory(cat)
    );
  }
}
