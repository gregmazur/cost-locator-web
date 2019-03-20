import { Component, OnInit, Input, ViewChild, AfterViewInit } from '@angular/core';
import { FetchService } from 'src/app/service/fetch.service';
import { SearchCriteria } from 'src/app/entity/SearchCriteria';
import { Tender } from 'src/app/entity/Tender';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator, MatSort } from '@angular/material';

@Component({
  selector: 'app-tender-list',
  templateUrl: './tender-list.component.html',
  styleUrls: ['./tender-list.component.css'],
  providers: [FetchService]
})
export class TenderListComponent {

  @Input()
  set search(search: SearchCriteria) {
    if (search != null) {
      this.searchCriteria = search;
      this.loadList();
    }
  }

  searchCriteria: SearchCriteria;

  displayedColumns = ['title', 'amount'];

  dataSource: MatTableDataSource<Tender>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;


  constructor(private fetchService: FetchService) {
    this.dataSource = new MatTableDataSource([]);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  loadList() {
    if(SearchCriteria == null){
      return;
    }
    this.searchCriteria.size = this.paginator.pageSize;
    this.searchCriteria.page = this.paginator.pageIndex;
    console.log('load tender list called on city id : ' + this.searchCriteria.city + ' page : '
      + this.searchCriteria.page + ' size : ' + this.searchCriteria.size)
    this.fetchService.getTenders(this.searchCriteria).subscribe(data => {
      console.log(data);
      this.dataSource = new MatTableDataSource(data.tendersPortion);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      this.dataSource.paginator.length = data.size;
    });
  }

}
