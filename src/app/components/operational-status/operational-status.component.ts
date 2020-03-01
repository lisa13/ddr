import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-operational-status',
  templateUrl: './operational-status.component.html',
  styleUrls: ['./operational-status.component.scss']
})
export class OperationalStatusComponent implements OnInit {
 public title = "operational status".toUpperCase();
  constructor() { }

  ngOnInit(): void {
  }

}
