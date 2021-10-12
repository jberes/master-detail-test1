import { Injectable } from '@angular/core';
import { FullNorthwindOrders } from './full-northwind-orders';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FullNorthwindOrdersService {
  getData(tableName: string): Observable<any[]> {
    // replace with HttpClient.get(ENDPOINT_URL);
    return of(FullNorthwindOrders[tableName]);
  }
}
