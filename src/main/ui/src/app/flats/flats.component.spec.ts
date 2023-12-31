import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlatsComponent } from './flats.component';

describe('FlatsComponent', () => {
  let component: FlatsComponent;
  let fixture: ComponentFixture<FlatsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FlatsComponent]
    });
    fixture = TestBed.createComponent(FlatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
