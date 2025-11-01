import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { Sidebar } from './sidebar/sidebar';
import { LayoutService } from './layout-service';
@Component({
  selector: 'main-layout',
  imports: [Header, Sidebar, CommonModule, RouterOutlet],
  templateUrl: './main-layout.html',
  styleUrl: './main-layout.css',
})
export class MainLayout {
  constructor(public layoutService: LayoutService) {}
}
