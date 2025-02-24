import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserModule } from "@angular/platform-browser";
import { ReactiveFormsModule, FormsModule, FormControl } from '@angular/forms';

//material modules
import { MatIconModule } from "@angular/material/icon";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatNativeDateModule } from "@angular/material/core";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';

import {
  HeaderComponent,
  ReportsComponent,
  NavbarComponent,
  ActionsComponent,
  WellControlComponent,
  OperationalStatusComponent,
  MudPumpConfigComponent,
  PersonnelComponent,
  GeneralRemarksComponent,
  WellControlDpComponent
} from "../components";

@NgModule({
  declarations: [
    // components
    HeaderComponent,
    ReportsComponent,
    NavbarComponent,
    ActionsComponent,
    WellControlComponent,
    OperationalStatusComponent,
    MudPumpConfigComponent,
    PersonnelComponent,
    GeneralRemarksComponent,
    WellControlDpComponent
  ],
  providers: [],
  imports: [
    CommonModule,
    RouterModule,
    BrowserAnimationsModule,
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    FlexLayoutModule,
    MatIconModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatCheckboxModule,
    MatRadioModule
  ],
  exports: [
    // modules
    BrowserAnimationsModule,
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    MatIconModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatCheckboxModule,
    MatRadioModule,
    // components
    HeaderComponent,
    ReportsComponent,
    NavbarComponent,
    ActionsComponent,
    WellControlComponent,
    OperationalStatusComponent,
    MudPumpConfigComponent,
    PersonnelComponent,
    GeneralRemarksComponent,
    WellControlDpComponent
  ]
})
export class SharedModule { }
