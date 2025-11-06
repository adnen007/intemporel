import { Component } from '@angular/core';
import { DresssingToolbar } from '../../../shared/component/dresssing-toolbar/dresssing-toolbar';
import { SubCategory } from './sub-category/sub-category';
import { ModeFilter } from '../../../shared/component/mode-filter/mode-filter';
@Component({
  selector: 'app-sub-categories',
  imports: [DresssingToolbar, SubCategory, ModeFilter],
  templateUrl: './sub-categories.html',
  styleUrl: './sub-categories.css',
})
export class SubCategories {}
