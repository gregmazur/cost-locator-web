import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { RegionDropdownComponent } from './components/search/region-dropdown/region-dropdown.component';
import { CityDropdownComponent } from './components/search/city-dropdown/city-dropdown.component';
import { StreetDropdownComponent } from './components/search/street-dropdown/street-dropdown.component';
import { HouseDropdownComponent } from './components/search/house-dropdown/house-dropdown.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatAutocompleteModule, MatNativeDateModule, MatInputModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MODULE_DEPENDENCIES } from './app.module';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        RegionDropdownComponent,
        CityDropdownComponent,
        StreetDropdownComponent,
        HouseDropdownComponent
      ],
      imports: [
        MODULE_DEPENDENCIES
    ]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have app-city-dropdown'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('app-city-dropdown').textContent).toBeTruthy();
  });

  it('should have app-region-dropdown', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('app-region-dropdown').textContent).toBeTruthy();
  });
});
