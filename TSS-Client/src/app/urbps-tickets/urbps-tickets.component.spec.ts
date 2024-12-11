import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UrbpsTicketsComponent } from './urbps-tickets.component';

describe('UrbpsTicketComponent', () => {
  let component: UrbpsTicketsComponent;
  let fixture: ComponentFixture<UrbpsTicketsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UrbpsTicketsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UrbpsTicketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
