import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserModule } from "@angular/platform-browser";
import { ReactiveFormsModule } from '@angular/forms';

//material modules
import { MatIconModule } from "@angular/material/icon";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatNativeDateModule } from "@angular/material/core";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from '@angular/material/select';

import {
  HeaderComponent,
  ReportsComponent,
  NavbarComponent,
  ActionsComponent
} from "../components";

@NgModule({
  declarations: [
    // components
    HeaderComponent,
    ReportsComponent,
    NavbarComponent,
    ActionsComponent
  ],
  providers: [],
  imports: [
    CommonModule,
    RouterModule,
    BrowserAnimationsModule,
    BrowserModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MatIconModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule
  ],
  exports: [
    // modules
    BrowserAnimationsModule,
    BrowserModule,
    ReactiveFormsModule,
    MatIconModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    // components
    HeaderComponent,
    ReportsComponent,
    NavbarComponent,
    ActionsComponent
  ]
})
export class SharedModule { }
