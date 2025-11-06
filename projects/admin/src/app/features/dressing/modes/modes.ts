import { Component } from '@angular/core';
import { DresssingToolbar } from '../../../shared/component/dresssing-toolbar/dresssing-toolbar';
import { Mode } from './mode/mode';

@Component({
  selector: 'app-modes',
  imports: [DresssingToolbar, Mode],
  templateUrl: './modes.html',
  styleUrl: './modes.css',
})
export class Modes {}
