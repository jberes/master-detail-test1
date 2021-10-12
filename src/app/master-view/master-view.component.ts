import { Component, OnInit } from '@angular/core';
import { NorthwindService } from '../services/northwind.service';
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
}
