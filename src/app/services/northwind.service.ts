import { Injectable } from '@angular/core';
import { Northwind } from './northwind';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NorthwindService {
  getData(tableName: string): Observable<any[]> {
    // replace with HttpClient.get(ENDPOINT_URL);
    return of(Northwind[tableName]);
  }
}
