import { Component, OnInit, Input } from '@angular/core';
import { FetchService } from 'src/app/service/fetch.service';
import { SearchCriteria } from 'src/app/entity/SearchCriteria';
import { Tender } from 'src/app/entity/Tender';

@Component({
  selector: 'app-tender-list',
  templateUrl: './tender-list.component.html',
  styleUrls: ['./tender-list.component.css'],
  providers: [FetchService]
})
export class TenderListComponent {
  @Input() 
  set search(search: SearchCriteria){
    if(search!= null){
     this.loadList(search);
    }
  }

  tenders: Array<Tender>;


  constructor(private fetchService: FetchService) { }

  loadList(searchCriteria: SearchCriteria){
    console.log('load tender list called on city id : ' + searchCriteria.city)
    this.fetchService.getTenders(searchCriteria).subscribe(data => {
      console.log(data);
      this.tenders = data;
    });
  }

}
