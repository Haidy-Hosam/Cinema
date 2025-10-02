import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pnotfound } from './pnotfound';

describe('Pnotfound', () => {
  let component: Pnotfound;
  let fixture: ComponentFixture<Pnotfound>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pnotfound]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pnotfound);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
