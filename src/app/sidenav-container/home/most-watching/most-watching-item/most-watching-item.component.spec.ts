import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MostWatchingItemComponent } from './most-watching-item.component';

describe('MostWatchingItemComponent', () => {
  let component: MostWatchingItemComponent;
  let fixture: ComponentFixture<MostWatchingItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MostWatchingItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MostWatchingItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
