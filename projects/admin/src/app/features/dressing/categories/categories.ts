import { Component } from '@angular/core';
import { DresssingToolbar } from '../../../shared/component/dresssing-toolbar/dresssing-toolbar';
import { Category } from './category/category';
import { ModeFilter } from '../../../shared/component/mode-filter/mode-filter';
@Component({
  selector: 'app-categories',
  imports: [DresssingToolbar, Category, ModeFilter],
  templateUrl: './categories.html',
  styleUrl: './categories.css',
})
export class Categories {}
