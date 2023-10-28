import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwicherLangComponent } from './swicher-lang.component';

describe('SwicherLangComponent', () => {
  let component: SwicherLangComponent;
  let fixture: ComponentFixture<SwicherLangComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SwicherLangComponent]
    });
    fixture = TestBed.createComponent(SwicherLangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
