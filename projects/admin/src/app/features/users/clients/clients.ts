import { Component } from '@angular/core';
import { ClientsToolBar } from './clients-tool-bar/clients-tool-bar';
import { Client } from './client/client';

@Component({
  selector: 'app-clients',
  imports: [ClientsToolBar, Client],
  templateUrl: './clients.html',
  styleUrl: './clients.css',
})
export class Clients {}
