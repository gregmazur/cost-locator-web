import { Component, OnInit } from '@angular/core';
import { City } from 'src/app/entity/City';
import { RegionService } from 'src/app/service/regions.service';
import { Region } from 'src/app/entity/Region';

@Component({
  selector: 'app-city-dropdown',
  templateUrl: './city-dropdown.component.html',
  styleUrls: ['./city-dropdown.component.css'],
  providers: [RegionService]
})
export class CityDropdownComponent implements OnInit {

  cities: Array<City>;

  constructor(private regionsService: RegionService) { }

  ngOnInit() {

  }

  public loadList(regionId: number) {
    this.regionsService.getCities(regionId).subscribe(data => {
      console.log(data);
      // for (let item of data) {
      //   this.cities.push(item);
      // }
      this.cities = data;
    });
  }

}
