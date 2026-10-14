import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

import { NotificationBannerComponent } from '../../components/notification-banner/notification-banner.component';

@Component({
  selector: 'app-home',
  imports: [RouterOutlet, NotificationBannerComponent],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
