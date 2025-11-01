import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'dashboard-nav',
  imports: [RouterLink],
  templateUrl: './dashboard-nav.html',
  styleUrl: './dashboard-nav.css',
})
export class DashboardNav {
  @Input() nav: any;
}
