import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EndgamereviewComponent } from './endgamereview.component';

describe('EndgamereviewComponent', () => {
  let component: EndgamereviewComponent;
  let fixture: ComponentFixture<EndgamereviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EndgamereviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EndgamereviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
