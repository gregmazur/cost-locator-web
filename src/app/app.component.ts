import { Component, Input } from '@angular/core';
import { Region } from './entity/Region';
import { City } from './entity/City';
import { Street } from './entity/Street';
import { Tender } from './entity/Tender';
import { SearchCriteria } from './entity/SearchCriteria';
import { Address } from './entity/Address';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  name = 'cost-locator-web';
  public region: Region;
  public city: City;
  public street: Street;
  public address: Address;
  public searchCriteria: SearchCriteria;

  public regionChanged(event: Region) {
    this.region = event;
  }

  public cityChanged(event: City) {
    this.city = event;
  }

  public streetChanged(event: Street) {
    this.street = event;
  }

  public addressChanged(event: Address){
    this.address = event;
  }

  public search(){
    this.searchCriteria = new SearchCriteria(this.city, this.street, this.address);
  }
}
