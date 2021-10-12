import { Injectable } from '@angular/core';
import { FullNorthwindCustomers } from './full-northwind-customers';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FullNorthwindCustomersService {
  getData(tableName: string): Observable<any[]> {
    // replace with HttpClient.get(ENDPOINT_URL);
    return of(FullNorthwindCustomers[tableName]);
  }
}
