import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Fils1Component } from './fils1.component';

describe('Fils1Component', () => {
  let component: Fils1Component;
  let fixture: ComponentFixture<Fils1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Fils1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Fils1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
