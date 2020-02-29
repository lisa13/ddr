import { Component, OnInit } from '@angular/core';
import { MatFormFieldModule } from "@angular/material/form-field";

@Component({
  selector: 'app-well-control',
  templateUrl: './well-control.component.html',
  styleUrls: ['./well-control.component.scss']
})
export class WellControlComponent implements OnInit {
public title="Well Control".toLocaleUpperCase();
  constructor() { }

  ngOnInit(): void {
  }

}
