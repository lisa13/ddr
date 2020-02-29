import { Component, OnInit } from "@angular/core";
import { FormControl} from '@angular/forms';

@Component({
  selector: "app-reports",
  templateUrl: "./reports.component.html",
  styleUrls: ["./reports.component.scss"]
})
export class ReportsComponent implements OnInit {
  public lastReport = '43 - 29.03.2019';
  date = new FormControl(new Date());
  customDate = new FormControl((new Date()).toISOString());
  constructor() {}

  ngOnInit(): void {}
}
