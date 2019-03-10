import { Component } from '@angular/core';
import { Region } from './entity/Region';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  name = 'cost-locator-web';
  public region:Region;

  public regionChanged(event){
    this.region = event;
  }
}
