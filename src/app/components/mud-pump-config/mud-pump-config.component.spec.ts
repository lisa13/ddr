import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MudPumpConfigComponent } from './mud-pump-config.component';

describe('MudPumpConfigComponent', () => {
  let component: MudPumpConfigComponent;
  let fixture: ComponentFixture<MudPumpConfigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MudPumpConfigComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MudPumpConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
