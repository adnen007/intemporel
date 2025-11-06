import { Component } from '@angular/core';
import { DresssingToolbar } from '../../../shared/component/dresssing-toolbar/dresssing-toolbar';
import { Size } from './size/size';
@Component({
  selector: 'app-sizes',
  imports: [DresssingToolbar, Size],
  templateUrl: './sizes.html',
  styleUrl: './sizes.css',
})
export class Sizes {}
