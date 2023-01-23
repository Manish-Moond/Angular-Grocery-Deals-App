import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreshProductCardComponent } from './fresh-product-card.component';

describe('FreshProductCardComponent', () => {
  let component: FreshProductCardComponent;
  let fixture: ComponentFixture<FreshProductCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FreshProductCardComponent]
    });
    fixture = TestBed.createComponent(FreshProductCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
