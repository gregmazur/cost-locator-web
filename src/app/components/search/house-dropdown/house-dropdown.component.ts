import { Component, Input } from '@angular/core';
import { FetchService } from 'src/app/service/fetch.service';
import { Street } from 'src/app/entity/Street';
import { Observable } from 'rxjs';
import { FormControl } from '@angular/forms';
import { startWith, map } from 'rxjs/operators';
import { Address } from 'src/app/entity/Address';

@Component({
  selector: 'app-house-dropdown',
  templateUrl: './house-dropdown.component.html',
  styleUrls: ['./house-dropdown.component.css']
})
export class HouseDropdownComponent {
  @Input()
  set street(street: Street) {
    if (street != null) {
      this.loadList(street.id);
    }
  }
  houses: Array<Address> = [];
  filteredHouses: Observable<Address[]>;
  houseControl = new FormControl();

  constructor(private fetchService: FetchService) { }

  public loadList(streetId: number) {
    this.fetchService.getAddresses(streetId).subscribe(data => {
      console.log(data);
      this.houses = data;
    });
    this.filteredHouses = this.houseControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this.filterHouses(value))
      );

  }

  private filterHouses(value: string): Address[] {
    console.log('address filter called');
    const filterValue = value.toLowerCase();
    return this.houses.filter(address => address.houseNumber.toLowerCase().includes(filterValue));
  }

  public onChange(house: Address): void {

    console.log('sel reg ' + house.houseNumber);
    this.houseControl.setValue(house.houseNumber);

    // this.street.emit(street);
    // console.log('emit street')
  }
}