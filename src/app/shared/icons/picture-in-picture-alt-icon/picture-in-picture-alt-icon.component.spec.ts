import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PictureInPictureAltIconComponent } from './picture-in-picture-alt-icon.component';

describe('PictureInPictureAltIconComponent', () => {
  let component: PictureInPictureAltIconComponent;
  let fixture: ComponentFixture<PictureInPictureAltIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PictureInPictureAltIconComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PictureInPictureAltIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
