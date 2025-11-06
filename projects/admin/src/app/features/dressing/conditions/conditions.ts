import { Component } from '@angular/core';
import { DresssingToolbar } from '../../../shared/component/dresssing-toolbar/dresssing-toolbar';
import { Condition } from './condition/condition';

@Component({
  selector: 'app-conditions',
  imports: [DresssingToolbar, Condition],
  templateUrl: './conditions.html',
  styleUrl: './conditions.css',
})
export class Conditions {}
