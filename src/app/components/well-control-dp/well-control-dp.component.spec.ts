import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WellControlDpComponent } from './well-control-dp.component';

describe('WellControlDpComponent', () => {
  let component: WellControlDpComponent;
  let fixture: ComponentFixture<WellControlDpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WellControlDpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WellControlDpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
