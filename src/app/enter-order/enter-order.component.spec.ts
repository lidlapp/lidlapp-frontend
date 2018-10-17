import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnterOrderComponent } from './enter-order.component';

describe('EnterOrderComponent', () => {
  let component: EnterOrderComponent;
  let fixture: ComponentFixture<EnterOrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnterOrderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnterOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
