import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dressing } from './dressing';

describe('Dressing', () => {
  let component: Dressing;
  let fixture: ComponentFixture<Dressing>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Dressing]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Dressing);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
