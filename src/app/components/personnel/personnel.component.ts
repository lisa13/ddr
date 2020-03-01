import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personnel',
  templateUrl: './personnel.component.html',
  styleUrls: ['./personnel.component.scss']
})
export class PersonnelComponent implements OnInit {
public title = "Personnel on board".toUpperCase();

  constructor() { }

  ngOnInit(): void {
  }

}
