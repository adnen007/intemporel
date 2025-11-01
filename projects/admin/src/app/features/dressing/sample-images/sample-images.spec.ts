import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleImages } from './sample-images';

describe('SampleImages', () => {
  let component: SampleImages;
  let fixture: ComponentFixture<SampleImages>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SampleImages]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SampleImages);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
