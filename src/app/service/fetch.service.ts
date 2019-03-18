import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Region } from '../entity/Region';
import { City } from '../entity/City';
import { Street } from '../entity/Street';
import { Address } from '../entity/Address';
import { Tender } from '../entity/Tender';
import { SearchCriteria } from '../entity/SearchCriteria';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class FetchService {
  

  constructor(private http: HttpClient) { }

  getAllRegions(): Observable<Region[]> {
    return this.http.get<Region[]>('//localhost:8000/regions');
  }

  getCities(regionId: number): Observable<City[]> {
    return this.http.get<City[]>('//localhost:8000/regions/' + regionId);
  }

  getStreets(cityId: number): Observable<Street[]> {
    return this.http.get<Street[]>('//localhost:8000/cities/' + cityId);
  }

  getAddresses(streetId: number): Observable<Address[]> {
    return this.http.get<Address[]>('//localhost:8000/streets/' + streetId);
  }

  getTenders(searchCriteria: SearchCriteria): Observable<Tender[]>{
    console.log(searchCriteria);
    return this.http.post<Tender[]>('//localhost:8000/search', searchCriteria, httpOptions);
  }
}