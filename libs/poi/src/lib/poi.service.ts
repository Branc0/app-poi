import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PoiEntity } from './+state/poi.models';

@Injectable({
  providedIn: 'root',
})
export class PoiService {
  constructor(private readonly httpClient: HttpClient) {}

  getAll(): Observable<PoiEntity[]> {
    return this.httpClient.get<PoiEntity[]>('assets/poi.json');
  }
}
