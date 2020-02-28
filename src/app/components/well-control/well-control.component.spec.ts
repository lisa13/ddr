import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WellControlComponent } from './well-control.component';

describe('WellControlComponent', () => {
  let component: WellControlComponent;
  let fixture: ComponentFixture<WellControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WellControlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WellControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
