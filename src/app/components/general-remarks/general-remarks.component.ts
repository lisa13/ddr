import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-general-remarks',
  templateUrl: './general-remarks.component.html',
  styleUrls: ['./general-remarks.component.scss']
})
export class GeneralRemarksComponent implements OnInit {
  public title = "General remarks".toUpperCase();
  public toggle: boolean;

  constructor() { }

  ngOnInit(): void {
  }

  public toggleDiv() {
    this.toggle = !this.toggle;
  }

}
