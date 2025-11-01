import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { LayoutService } from '../layout-service';
@Component({
  selector: 'app-header',
  imports: [MatIconModule, CommonModule],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  showProfileSetting: boolean = false;

  constructor(private layoutService: LayoutService) {}

  openSidebar() {
    this.layoutService.openSideBar();
  }

  switchProfileSetting() {
    this.showProfileSetting = !this.showProfileSetting;
  }
}
