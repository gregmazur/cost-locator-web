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
      this.loadList(true);
    }
  }

  searchCriteria: SearchCriteria;

  resultSize: number = 0;

  pageSizeOptions = [5, 10, 25, 50];

  displayedColumns = ['title', 'link', 'amount'];

  dataSource: MatTableDataSource<Tender> = new MatTableDataSource();

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;


  constructor(private fetchService: FetchService) {
    this.dataSource = new MatTableDataSource([]);
  }

  loadList(needResultSize: boolean) {
    if (this.searchCriteria == null) {
      return;
    }
    this.searchCriteria.size = this.paginator.pageSize;
    this.searchCriteria.page = this.paginator.pageIndex;
    this.searchCriteria.isResultSizeNeeded = needResultSize;
    console.log('load tender list called on city id : ' + this.searchCriteria.city + ' page : '
      + this.searchCriteria.page + ' size : ' + this.searchCriteria.size)
    this.fetchService.getTenders(this.searchCriteria).subscribe(data => {
      setTimeout(() => {
        console.log(data);
        this.dataSource.data = data.tendersPortion;
        this.dataSource.sort = this.sort;
        if (data.size != null) {
          console.log('size upadeted to ' + data.size);
          this.resultSize = data.size;
        }
        console.log('resultSize is ' + this.resultSize);
      })

    });
  }

}
