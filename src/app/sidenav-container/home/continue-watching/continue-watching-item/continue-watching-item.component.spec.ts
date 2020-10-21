import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContinueWatchingItemComponent } from './continue-watching-item.component';

describe('ContinueWatchingItemComponent', () => {
  let component: ContinueWatchingItemComponent;
  let fixture: ComponentFixture<ContinueWatchingItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContinueWatchingItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContinueWatchingItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
