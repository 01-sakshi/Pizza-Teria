import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartTabComponent } from './cart-tab.component';

describe('CartTabComponent', () => {
  let component: CartTabComponent;
  let fixture: ComponentFixture<CartTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartTabComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
