import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Region } from '../entity/Region';
import { City } from '../entity/City';

@Injectable({
  providedIn: 'root'
})

export class FetchService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Region[]> {
    return this.http.get<Region[]>('//localhost:8000/regions');
  }

  getCities(regionId: number): Observable<City[]> {
    return this.http.get<City[]>('//localhost:8000/regions/' + regionId);
  }
}