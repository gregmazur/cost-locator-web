import { Component, OnInit } from '@angular/core';
import { Region } from 'src/app/entity/Region';
import { RegionService } from 'src/app/service/regions.service';
import { CityDropdownComponent } from '../city-dropdown/city-dropdown.component';

@Component({
  selector: 'app-region-dropdown',
  templateUrl: './region-dropdown.component.html',
  styleUrls: ['./region-dropdown.component.css'],
  providers: [RegionService, CityDropdownComponent]
})
export class RegionDropdownComponent implements OnInit {
  regions: Array<Region>;

  constructor(private regionsService: RegionService, private cityDropDown: CityDropdownComponent) { }

  ngOnInit() {
    this.regionsService.getAll().subscribe(data => {
      this.regions = data;
    });
  }

  public onChange(value: number):void {
    console.log(value);
    this.cityDropDown.loadList(value);
  }

}
