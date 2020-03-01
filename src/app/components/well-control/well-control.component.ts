import { Component, OnInit } from '@angular/core';
import { MatFormFieldModule } from "@angular/material/form-field";
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-well-control',
  templateUrl: './well-control.component.html',
  styleUrls: ['./well-control.component.scss']
})
export class WellControlComponent implements OnInit {
  public title = "Well Control".toUpperCase();
  public toggle: boolean;
  public dt =  new Date().toISOString().split('T')[0];



  //form controls
  public wellControlForm: FormGroup;
  public bopTest: FormControl;
  public pressureTest: FormControl;
  public firstCrew: FormControl;
  public secondCrew: FormControl;
  public chokeManifold: FormControl;
  public functionTest: FormControl;
  public nextTest: FormControl;
  public chokeDrill: FormControl;
  public secondChokedrill: FormControl;
  public standPipe: FormControl;
  public kickDrill: FormControl;
  public secondKickDrill: FormControl;
  public topDrive: FormControl;
  public pitDrill: FormControl;
  public secondPitDrill: FormControl;
  public looseKelly: FormControl;
  public summary: FormControl;


  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.createFormControls();
  }

  public toggleDiv() {
    this.toggle = !this.toggle;
  }

  private createFormControls(): void {
    this.bopTest = new FormControl(this.dt);
    this.pressureTest = new FormControl(this.dt);
    this.firstCrew = new FormControl('A05');
    this.secondCrew = new FormControl('A04');
    this.chokeManifold = new FormControl(this.dt);
    this.functionTest = new FormControl(this.dt);
    this.nextTest = new FormControl(178);
    this.chokeDrill = new FormControl(this.dt);
    this.secondChokedrill = new FormControl(this.dt);
    this.standPipe = new FormControl(this.dt);
    this.kickDrill = new FormControl(this.dt);
    this.secondKickDrill = new FormControl(this.dt);
    this.topDrive = new FormControl(this.dt);
    this.pitDrill = new FormControl(this.dt);
    this.secondPitDrill = new FormControl(this.dt);
    this.looseKelly = new FormControl(this.dt);
    this.summary = new FormControl('maintenance rig'.toUpperCase());

    this.createFormGroup();
  }

  private createFormGroup(): void {
    this.wellControlForm = this.fb.group({
      bopTest: this.bopTest,
      pressureTest: this.pressureTest,
      firstCrew: this.firstCrew,
      secondCrew: this.secondCrew,
      chokeManifold: this.chokeManifold,
      functionTest: this.functionTest,
      nextTest: this.nextTest,
      chokeDrill: this.chokeDrill,
      secondChokedrill: this.secondChokedrill,
      standPipe: this.standPipe,
      kickDrill: this.kickDrill,
      secondKickDrill: this.secondKickDrill,
      topDrive: this.topDrive,
      pitDrill: this.pitDrill,
      secondPitDrill: this.secondPitDrill,
      looseKelly: this.looseKelly,
      summary: this.summary
    });
  }

}
