import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';

import { RegionListComponent } from './region-list/region-list.component'
import { AppComponent } from './app.component';
import { RegionDropdownComponent } from './components/region-dropdown/region-dropdown.component';
import { CityDropdownComponent } from './components/city-dropdown/city-dropdown.component';

@NgModule({
  declarations: [
    AppComponent,
    RegionListComponent,
    RegionDropdownComponent,
    CityDropdownComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
