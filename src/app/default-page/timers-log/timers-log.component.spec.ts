import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimersLogComponent } from './timers-log.component';

describe('TimersLogComponent', () => {
  let component: TimersLogComponent;
  let fixture: ComponentFixture<TimersLogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimersLogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimersLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
