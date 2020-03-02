import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-mud-pump-config',
  templateUrl: './mud-pump-config.component.html',
  styleUrls: ['./mud-pump-config.component.scss']
})
export class MudPumpConfigComponent implements OnInit {
  public title = "mud pump configuration".toUpperCase();
  public toggle: boolean;

  public mudPumpConfigForm: FormGroup;
  public output: FormControl;
  public pressure: FormControl;
  public linerSize: FormControl;
  public rentOutput: FormControl;
  public rentPressure: FormControl;

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.createFormControls();
  }


  private createFormControls(): void {
    this.output = new FormControl('22,17');
    this.pressure = new FormControl('01.06.2019');
    this.linerSize = new FormControl('-');
    this.rentOutput = new FormControl('-');
    this.rentPressure = new FormControl('-');

    this.createFormGroup();
  }


  private createFormGroup(): void {
    this.mudPumpConfigForm = this.fb.group({
      output: this.output,
      pressure: this.pressure,
      linerSize: this.linerSize,
      rentOutput: this.rentOutput,
      rentPressure: this.rentPressure,
    });
  }

  public toggleDiv() {
    this.toggle = !this.toggle;
  }
}
