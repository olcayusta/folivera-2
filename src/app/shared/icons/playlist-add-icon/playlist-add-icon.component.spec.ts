import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaylistAddIconComponent } from './playlist-add-icon.component';

describe('PlaylistAddIconComponent', () => {
  let component: PlaylistAddIconComponent;
  let fixture: ComponentFixture<PlaylistAddIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlaylistAddIconComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaylistAddIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
