import { Component } from '@angular/core';

import { DresssingToolbar } from '../../../shared/component/dresssing-toolbar/dresssing-toolbar';
import { Color } from './color/color';
@Component({
  selector: 'app-colors',
  imports: [DresssingToolbar, Color],
  templateUrl: './colors.html',
  styleUrl: './colors.css',
})
export class Colors {}
