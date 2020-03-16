import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalDashboardComponent } from './final-dashboard.component';

describe('FinalDashboardComponent', () => {
  let component: FinalDashboardComponent;
  let fixture: ComponentFixture<FinalDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinalDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinalDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
