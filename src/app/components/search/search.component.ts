import { Component, OnInit } from '@angular/core';
import { Region } from 'src/app/entity/Region';
import { FetchService } from 'src/app/service/fetch.service';
import { City } from 'src/app/entity/City';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers: [FetchService]
})
export class SearchComponent implements OnInit {
  cityControl = new FormControl();
  regionControl = new FormControl();
  filteredCities: Observable<City[]>;
  filteredRegions: Observable<Region[]>;
  regions: Array<Region> = [];
  cities: Array<City> = [];

  constructor(private regionsService: FetchService) { }

  ngOnInit() {
    this.regionsService.getAll().subscribe(data => {
      this.regions = data;
    });
    this.filteredRegions = this.regionControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this.filterRegions(value))
      );
    this.filteredCities = this.cityControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this.filterCities(value))
      );
  }

  private filterCities(value: string): City[] {
    const filterValue = value.toLowerCase();
    return this.cities.filter(city => city.name.toLowerCase().includes(filterValue));
  }

  private filterRegions(value: string): Region[] {
    const filterValue = value.toLowerCase();
    return this.regions.filter(r => r.name.toLowerCase().includes(filterValue));
  }

  onChange(value: number): void {
    console.log(value);
    this.regionsService.getCities(value).subscribe(data => {
      console.log(data);
      this.cities = data;
    });
  }

  getSelectedCity(city: City) {
    console.log(city.id);
  }
  getSelectedRegion(region: Region) {
    console.log(region.id);
  }
}
