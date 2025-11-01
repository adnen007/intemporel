import { Component } from '@angular/core';
import { Admin } from './admin/admin';
import { AdminToolBar } from './admin-toolbar/admin-toolbar';

@Component({
  selector: 'app-admins',
  imports: [AdminToolBar, Admin],
  templateUrl: './admins.html',
  styleUrl: './admins.css',
})
export class Admins {}
