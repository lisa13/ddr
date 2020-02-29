import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public title = 'Edit and Preview Status Report';
  public platform = 'Osberg B';
  public well= '30/9-B-30-D-T-2 ';

  constructor() { }

  ngOnInit(): void {
  }

}
