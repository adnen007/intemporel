import { Component } from '@angular/core';
import { JoinRequestToolbar } from './join-request-toolbar/join-request-toolbar';
import { JoinRequest } from './join-request/join-request';

@Component({
  selector: 'app-join-requests',
  imports: [JoinRequestToolbar, JoinRequest],
  templateUrl: './join-requests.html',
  styleUrl: './join-requests.css',
})
export class JoinRequests {}
