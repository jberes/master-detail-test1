import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { Console } from 'console';
import { FullNorthwindCustomersService } from '../services/full-northwind-customers.service';
=======
import { NorthwindService } from '../services/northwind.service';
>>>>>>> 27fd9fb547786491696369a67702063d2ced6e8d
import { FullNorthwindOrdersService } from '../services/full-northwind-orders.service';

@Component({
  selector: 'app-master-view',
  templateUrl: './master-view.component.html',
  styleUrls: ['./master-view.component.scss']
})
export class MasterViewComponent implements OnInit {
  public northwindCustomers: any[] = [];
  public fullNorthwindOrdersOrders: any[] = [];

  constructor(
    private northwindService: NorthwindService,
    private fullNorthwindOrdersService: FullNorthwindOrdersService,
  ) {}

  ngOnInit() {
    // depending on implementation, data subscriptions might need to be unsubbed later
    this.northwindService.getData('Customers').subscribe(data => this.northwindCustomers = data);
    this.fullNorthwindOrdersService.getData('Orders').subscribe(data => this.fullNorthwindOrdersOrders = data);
  }

  rowSelected(selection: any){
    const customerId = selection[0].CustomerID;
   // this.northwindOrders = this.northwindService.getOrders(customerId);
   //this.fullNorthwindOrdersOrders = this.fullNorthwindOrdersService.getOrders(customerId);
   
  }

}
