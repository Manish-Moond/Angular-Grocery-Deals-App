import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreshProductComponent } from './fresh-product.component';

describe('FreshProductComponent', () => {
  let component: FreshProductComponent;
  let fixture: ComponentFixture<FreshProductComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FreshProductComponent]
    });
    fixture = TestBed.createComponent(FreshProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
