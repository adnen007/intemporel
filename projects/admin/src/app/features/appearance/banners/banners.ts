import { Component } from '@angular/core';
import { Banner } from './banner/banner';
import { BannersToolbar } from './banners-toolbar/banners-toolbar';
@Component({
  selector: 'app-banners',
  imports: [BannersToolbar, Banner],
  templateUrl: './banners.html',
  styleUrl: './banners.css',
})
export class Banners {}
