import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule, MatAutocompleteModule, MatInputModule } from '@angular/material';
import { AppComponent } from './app.component';
import { RegionDropdownComponent } from './components/search/region-dropdown/region-dropdown.component';
import { CityDropdownComponent } from './components/search/city-dropdown/city-dropdown.component';
import { StreetDropdownComponent } from './components/search/street-dropdown/street-dropdown.component';
import { HouseDropdownComponent } from './components/search/house-dropdown/house-dropdown.component';

export const MODULE_DEPENDENCIES = [
  BrowserModule,
  AppRoutingModule,
  HttpClientModule,
  BrowserAnimationsModule,
  MatAutocompleteModule,
  FormsModule,
  ReactiveFormsModule,
  MatNativeDateModule,
  MatInputModule
];


@NgModule({
  declarations: [
    AppComponent,
    RegionDropdownComponent,
    CityDropdownComponent,
    StreetDropdownComponent,
    HouseDropdownComponent
  ],
  imports: [
     MODULE_DEPENDENCIES
  ],
  exports: [MODULE_DEPENDENCIES],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
