import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Region } from '../entity/Region';
import { City } from '../entity/City';
import { Street } from '../entity/Street';
import { Address } from '../entity/Address';
import { Tender } from '../entity/Tender';
import { SearchCriteria } from '../entity/SearchCriteria';
import { environment } from 'src/environments/environment';
import { TenderSearchResult } from '../entity/TenderSearchResult';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class FetchService {
  

  constructor(private http: HttpClient) { }

  getAllRegions(): Observable<Region[]> {
    return this.http.get<Region[]>(environment.urlAddress + '/regions');
  }

  getCities(regionId: number): Observable<City[]> {
    return this.http.get<City[]>(environment.urlAddress + '/regions/' + regionId);
  }

  getStreets(cityId: number): Observable<Street[]> {
    return this.http.get<Street[]>(environment.urlAddress + '/cities/' + cityId);
  }

  getAddresses(streetId: number): Observable<Address[]> {
    return this.http.get<Address[]>(environment.urlAddress + '/streets/' + streetId);
  }

  getTenders(searchCriteria: SearchCriteria): Observable<TenderSearchResult>{
    console.log(searchCriteria);
    return this.http.post<TenderSearchResult>(environment.urlAddress + '/search', searchCriteria, httpOptions);
  }
}