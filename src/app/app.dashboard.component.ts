import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './app.dashboard.component.html',
})
export class DashboardComponent {
  title = 'baotec-doccle-screens';

  constructor(
    private router: Router
  ) {}
 
  gotoReceiversList() {
    this.router.navigate(['/list-receivers']);
  }

}
