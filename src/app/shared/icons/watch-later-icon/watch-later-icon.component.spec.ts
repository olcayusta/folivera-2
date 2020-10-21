import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WatchLaterIconComponent } from './watch-later-icon.component';

describe('WatchLaterIconComponent', () => {
  let component: WatchLaterIconComponent;
  let fixture: ComponentFixture<WatchLaterIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WatchLaterIconComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WatchLaterIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
