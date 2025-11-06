import { Component } from '@angular/core';
import { SlidesToolbar } from './slides-toolbar/slides-toolbar';
import { Slide } from './slide/slide';

@Component({
  selector: 'app-slides',
  imports: [SlidesToolbar, Slide],
  templateUrl: './slides.html',
  styleUrl: './slides.css',
})
export class Slides {}
