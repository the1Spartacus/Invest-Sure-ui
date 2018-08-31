import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { Customer} from '../../customer.model';
import { RiskItemService } from '../../risk-item.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})

export class CustomerListComponent implements OnInit, OnDestroy {
  customers: Customer[] = [];
  private customerSub: Subscription;

  constructor(public customerService: RiskItemService) {}

  ngOnInit() {
  this.customers = this.customerService.getCustomer();
  this.customerSub = this.customerService.getCustomerListener().subscribe((customers: Customer[]) => {
  this.customers = customers;
  });
  }
  ngOnDestroy() {
    this.customerSub.unsubscribe();
  }
}
