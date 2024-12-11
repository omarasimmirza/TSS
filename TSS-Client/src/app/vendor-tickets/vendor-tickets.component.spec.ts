import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorTicketsComponent } from './vendor-tickets.component';

describe('VendorTicketsComponent', () => {
  let component: VendorTicketsComponent;
  let fixture: ComponentFixture<VendorTicketsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VendorTicketsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VendorTicketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
