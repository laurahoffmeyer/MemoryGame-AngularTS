import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiplayertrackerComponent } from './multiplayertracker.component';

describe('MultiplayertrackerComponent', () => {
  let component: MultiplayertrackerComponent;
  let fixture: ComponentFixture<MultiplayertrackerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultiplayertrackerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiplayertrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
