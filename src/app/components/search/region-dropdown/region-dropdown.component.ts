import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FetchService } from 'src/app/service/fetch.service';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { Region } from 'src/app/entity/Region';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-region-dropdown',
  templateUrl: './region-dropdown.component.html',
  styleUrls: ['./region-dropdown.component.css'],
  providers:[FetchService]
})
export class RegionDropdownComponent implements OnInit {
  regionControl = new FormControl();
  filteredRegions: Observable<Region[]>;
  regions: Array<Region> = [];
  @Output() region = new EventEmitter<Region>();
  constructor(private fetchService: FetchService) { }

  ngOnInit() {
    this.fetchService.getAllRegions().subscribe(data => {
      this.regions = data;
    });
    this.filteredRegions = this.regionControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this.filterRegions(value))
      );
  }

  private filterRegions(value: string): Region[] {
    console.log('region filter called on ' + value);
    if (typeof value === "string") {
      const filterValue = value.toLowerCase();
      return this.regions.filter(r => r.name.toLowerCase().includes(filterValue));
    } else {
      return this.regions;
    }
  }

  public onChange(region: Region): void {

    console.log('sel reg' + region);
    this.regionControl.setValue(region.name);

    this.region.emit(region);
    console.log('emit region')
  }
}
