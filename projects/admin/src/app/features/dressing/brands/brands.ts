import { Component } from '@angular/core';
import { DresssingToolbar } from '../../../shared/component/dresssing-toolbar/dresssing-toolbar';
import { Brand } from './brand/brand';

@Component({
  selector: 'app-brands',
  imports: [DresssingToolbar, Brand],
  templateUrl: './brands.html',
  styleUrl: './brands.css',
})
export class Brands {}
