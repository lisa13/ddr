import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OperationalStatusComponent } from './operational-status.component';

describe('OperationalStatusComponent', () => {
  let component: OperationalStatusComponent;
  let fixture: ComponentFixture<OperationalStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OperationalStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OperationalStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
