import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomBusyComponent } from './room-busy.component';

describe('RoomBusyComponent', () => {
  let component: RoomBusyComponent;
  let fixture: ComponentFixture<RoomBusyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoomBusyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomBusyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
