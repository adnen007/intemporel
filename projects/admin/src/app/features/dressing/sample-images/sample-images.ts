import { Component } from '@angular/core';
import { DresssingToolbar } from '../../../shared/component/dresssing-toolbar/dresssing-toolbar';
import { SampleImage } from './sample-image/sample-image';
@Component({
  selector: 'app-sample-images',
  imports: [DresssingToolbar, SampleImage],
  templateUrl: './sample-images.html',
  styleUrl: './sample-images.css',
})
export class SampleImages {}
