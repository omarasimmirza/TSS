import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WRSTicketsComponent } from './wrs-tickets.component';

describe('ManageTicketsComponent', () => {
  let component: WRSTicketsComponent;
  let fixture: ComponentFixture<WRSTicketsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WRSTicketsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WRSTicketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
