import { Component, OnInit } from '@angular/core';
import { Console } from 'console';
import { FullNorthwindCustomersService } from '../services/full-northwind-customers.service';
import { FullNorthwindOrdersService } from '../services/full-northwind-orders.service';

@Component({
  selector: 'app-master-view',
  templateUrl: './master-view.component.html',
  styleUrls: ['./master-view.component.scss']
})
export class MasterViewComponent implements OnInit {
  public fullNorthwindCustomersCustomers: any[] = [];
  public fullNorthwindOrdersOrders: any[] = [];

  constructor(
    private fullNorthwindCustomersService: FullNorthwindCustomersService,
    private fullNorthwindOrdersService: FullNorthwindOrdersService,
  ) {}

  ngOnInit() {
    // depending on implementation, data subscriptions might need to be unsubbed later
    this.fullNorthwindCustomersService.getData('Customers').subscribe(data => this.fullNorthwindCustomersCustomers = data);
    this.fullNorthwindOrdersService.getData('Orders').subscribe(data => this.fullNorthwindOrdersOrders = data);
  }

  rowSelected(selection: any){
    const customerId = selection[0].CustomerID;
   // this.northwindOrders = this.northwindService.getOrders(customerId);
   //this.fullNorthwindOrdersOrders = this.fullNorthwindOrdersService.getOrders(customerId);
   
  }

}
