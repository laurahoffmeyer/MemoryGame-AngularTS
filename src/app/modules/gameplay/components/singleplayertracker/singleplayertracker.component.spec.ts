import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleplayertrackerComponent } from './singleplayertracker.component';

describe('SingleplayertrackerComponent', () => {
  let component: SingleplayertrackerComponent;
  let fixture: ComponentFixture<SingleplayertrackerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleplayertrackerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleplayertrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
