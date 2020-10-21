import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayArrowIconComponent } from './play-arrow-icon.component';

describe('PlayArrowIconComponent', () => {
  let component: PlayArrowIconComponent;
  let fixture: ComponentFixture<PlayArrowIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayArrowIconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayArrowIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
