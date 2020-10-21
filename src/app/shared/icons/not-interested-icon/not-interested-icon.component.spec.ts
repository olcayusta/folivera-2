import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotInterestedIconComponent } from './not-interested-icon.component';

describe('NotInterestedIconComponent', () => {
  let component: NotInterestedIconComponent;
  let fixture: ComponentFixture<NotInterestedIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotInterestedIconComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotInterestedIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
