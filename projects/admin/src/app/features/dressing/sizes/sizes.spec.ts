import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sizes } from './sizes';

describe('Sizes', () => {
  let component: Sizes;
  let fixture: ComponentFixture<Sizes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Sizes]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Sizes);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
