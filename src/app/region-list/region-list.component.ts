import { Component, OnInit } from '@angular/core';
import { RegionService } from '../service/regions.service';
import { Region } from '../entity/Region';

@Component({
  selector: 'app-region-list',
  templateUrl: './region-list.component.html',
  styleUrls: ['./region-list.component.css'],
  providers: [RegionService]
})
export class RegionListComponent implements OnInit {
  regions: Array<Region>;

  constructor(private regionsService: RegionService) { }

  ngOnInit() {
    this.regionsService.getAll().subscribe(data => {
        this.regions = data;
        });
  }

}
