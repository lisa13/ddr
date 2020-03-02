import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-well-control-dp',
  templateUrl: './well-control-dp.component.html',
  styleUrls: ['./well-control-dp.component.scss']
})
export class WellControlDpComponent implements OnInit {
  public title = 'Well control'.toUpperCase();
  public toggle: boolean;

  public number = '34-RFT-45';
  public btm = '46';
  public pumping = '36';
  public tons = '5067';

  constructor() { }

  ngOnInit(): void {
  }

  
  public toggleDiv() {
    this.toggle = !this.toggle;
  }

}
