import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FetchService } from 'src/app/service/fetch.service';
import { Region } from 'src/app/entity/Region';
import { City } from 'src/app/entity/City';
import { Observable } from 'rxjs';
import { FormControl } from '@angular/forms';
import { startWith, map } from 'rxjs/operators';

@Component({
  selector: 'app-city-dropdown',
  templateUrl: './city-dropdown.component.html',
  styleUrls: ['./city-dropdown.component.css'],
  providers: [FetchService]
})
export class CityDropdownComponent {
  @Input() 
  set region(region: Region){
    if(region!= null){
     this.loadList(region.id);
    }
  }
  cities: Array<City> = [];
  @Output() city = new EventEmitter<City>();
  filteredCities: Observable<City[]>;
  cityControl = new FormControl();

  constructor(private fetchService: FetchService) { }

  public loadList(regionId: number) {
    this.fetchService.getCities(regionId).subscribe(data => {
      console.log(data);
      this.cities = data;
    });
    this.filteredCities = this.cityControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this.filterCities(value))
      );

  }

  private filterCities(value: string): City[] {
    console.log('city filter called' );
    if (typeof value === "string") {
      const filterValue = value.toLowerCase();
      return this.cities.filter(city => city.name.toLowerCase().includes(filterValue));
    } else {
      return this.cities;
    }
  }

  public onChange(city: City): void {

    console.log('sel reg' + city);
    this.cityControl.setValue(city.name);

    this.city.emit(city);
    console.log('emit city')
  }
}
