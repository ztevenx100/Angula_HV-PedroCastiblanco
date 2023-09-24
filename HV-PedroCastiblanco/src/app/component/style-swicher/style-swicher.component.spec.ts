import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StyleSwicherComponent } from './style-swicher.component';

describe('StyleSwicherComponent', () => {
  let component: StyleSwicherComponent;
  let fixture: ComponentFixture<StyleSwicherComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StyleSwicherComponent]
    });
    fixture = TestBed.createComponent(StyleSwicherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
