import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AirWatcherComponent } from './air-watcher.component';

describe('AirWatcherComponent', () => {
  let component: AirWatcherComponent;
  let fixture: ComponentFixture<AirWatcherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AirWatcherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AirWatcherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
