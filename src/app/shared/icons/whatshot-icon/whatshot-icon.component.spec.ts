import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatshotIconComponent } from './whatshot-icon.component';

describe('WhatshotIconComponent', () => {
  let component: WhatshotIconComponent;
  let fixture: ComponentFixture<WhatshotIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhatshotIconComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WhatshotIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
