import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-operational-status',
  templateUrl: './operational-status.component.html',
  styleUrls: ['./operational-status.component.scss']
})
export class OperationalStatusComponent implements OnInit {
  public title = "operational status".toUpperCase();
  public operationalStatusForm: FormGroup;

  public status: FormControl;
  public days: FormControl;
  public wellClass: FormControl;
  public lengthOh: FormControl;Validators
  public midnightDepth: FormControl;
  public progress: FormControl;
  public section: FormControl;
  public startTime: FormControl;
  public fitLot: FormControl;
  public startDepth: FormControl;
  public lastCasing: FormControl;
  public mudType: FormControl;
  public ecd: FormControl;
  public mwOut: FormControl;
  public mwIn: FormControl;
  public summary: FormControl;
  public operations: FormControl;
  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.createFormControls();
  }

  private createFormControls(): void {
    this.status = new FormControl('Maintenance');
    this.days = new FormControl('- 7,3');
    this.wellClass = new FormControl('Oil Producer');
    this.lengthOh = new FormControl('0');
    this.midnightDepth = new FormControl('0');
    this.progress = new FormControl('0');
    this.startTime = new FormControl('0');
    this.fitLot = new FormControl('0');
    this.startDepth = new FormControl('0');
    this.lastCasing = new FormControl('2678 4884');
    this.mudType = new FormControl('Soft');
    this.ecd = new FormControl('0');
    this.mwOut = new FormControl('0');
    this.mwIn = new FormControl('0');
    this.summary = new FormControl('');
    this.operations = new FormControl('');

    this.createFormGroup();
  }

  private createFormGroup(): void {
    this.operationalStatusForm = this.fb.group({
      status: this.status,
      days: this.days,
      wellClass: this.wellClass,
      lengthOh: this.lengthOh,
      midnightDepth: this.midnightDepth,
      progress: this.progress,
      startTime: this.startTime,
      fitLot: this.fitLot,
      startDepth: this.startDepth,
      lastCasing: this.lastCasing,
      mudType: this.mudType,
      ecd: this.ecd,
      mwOut: this.mwOut,
      mwIn: this.mwIn,
      summary: this.summary,
      operations: this.operations
    });
  }

}
