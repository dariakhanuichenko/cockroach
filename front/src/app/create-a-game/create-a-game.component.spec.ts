import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAGameComponent } from './create-a-game.component';

describe('CreateAGameComponent', () => {
  let component: CreateAGameComponent;
  let fixture: ComponentFixture<CreateAGameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateAGameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateAGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
