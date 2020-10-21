import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThumbUpIconComponent } from './thumb-up-icon.component';

describe('ThumbUpIconComponent', () => {
  let component: ThumbUpIconComponent;
  let fixture: ComponentFixture<ThumbUpIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThumbUpIconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThumbUpIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
