import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-join-request-toolbar',
  imports: [MatIconModule, CommonModule],
  templateUrl: './join-request-toolbar.html',
  styleUrl: './join-request-toolbar.css',
})
export class JoinRequestToolbar {}
