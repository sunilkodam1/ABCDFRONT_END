import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanTrackComponent } from './loan-track.component';

describe('LoanTrackComponent', () => {
  let component: LoanTrackComponent;
  let fixture: ComponentFixture<LoanTrackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoanTrackComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoanTrackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
