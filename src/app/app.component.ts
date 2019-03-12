import { Component } from '@angular/core';
import { Region } from './entity/Region';
import { City } from './entity/City';
import { Street } from './entity/Street';

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

  public regionChanged(event: Region) {
    this.region = event;
  }

  public cityChanged(event: City) {
    this.city = event;
  }

  public streetChanged(event: Street) {
    this.street = event;
  }
}
