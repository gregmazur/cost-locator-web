import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Region } from '../entity/Region';
import { City } from '../entity/City';
import { Street } from '../entity/Street';
import { Address } from '../entity/Address';

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
}