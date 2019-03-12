import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FetchService } from 'src/app/service/fetch.service';
import { Street } from 'src/app/entity/Street';
import { City } from 'src/app/entity/City';
import { Observable } from 'rxjs';
import { FormControl } from '@angular/forms';
import { startWith, map } from 'rxjs/operators';

@Component({
  selector: 'app-street-dropdown',
  templateUrl: './street-dropdown.component.html',
  styleUrls: ['./street-dropdown.component.css']
})
export class StreetDropdownComponent {
  @Input()
  set city(city: City) {
    if (city != null) {
      this.loadList(city.id);
    }
  }
  streets: Array<Street> = [];
  @Output() street = new EventEmitter<Street>();
  filteredStreets: Observable<Street[]>;
  streetControl = new FormControl();

  constructor(private fetchService: FetchService) { }

  public loadList(cityId: number) {
    this.fetchService.getStreets(cityId).subscribe(data => {
      console.log(data);
      this.streets = data;
    });
    this.filteredStreets = this.streetControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this.filterStreets(value))
      );

  }

  private filterStreets(value: string): Street[] {
    console.log('street filter called');
    if (typeof value === "string") {
      const filterValue = value.toLowerCase();
      return this.streets.filter(street => street.name.toLowerCase().includes(filterValue));
    } else {
      return this.streets;
    }
  }

  public onChange(street: Street): void {

    console.log('sel reg ' + street.name);
    this.streetControl.setValue(street.name);

    this.street.emit(street);
    console.log('emit street')
  }
}

