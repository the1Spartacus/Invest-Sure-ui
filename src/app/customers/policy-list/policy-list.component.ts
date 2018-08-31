import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { RiskItem } from '../../risk-item.model';
import { Customer} from '../../customer.model';
import { Policy } from '../../policy.model';

import { RiskItemService } from '../../risk-item.service';
@Component({
  selector: 'app-policy-list',
  templateUrl: './policy-list.component.html',
  styleUrls: ['./policy-list.component.css']
})

export class PolicyListComponent implements OnInit, OnDestroy {
ItemRisk: RiskItem[] = [];
customers: Customer[] = [];
policies: Policy[] = [];

private ItemRiskSub: Subscription;
private customerSub: Subscription;
private policySub: Subscription;

 constructor(public riskItemService: RiskItemService) {
 }
 ngOnInit() {
  //  list item risks
    this.ItemRisk = this.riskItemService.getRiskItem();
    this.ItemRiskSub = this.riskItemService.getRiskItemListener().subscribe((ItemRisk: RiskItem[]) => {
      this.ItemRisk = ItemRisk;
    });
  //  list customers
  this.customers = this.riskItemService.getCustomer();
  this.customerSub = this.riskItemService.getCustomerListener().subscribe((customers: Customer[]) => {
  this.customers = customers;
  });
  // list this.policies
  this.policies = this.riskItemService.getPolicy();
  this.policySub = this.riskItemService.getPolicyListerner().subscribe((policies: Policy[]) => {
    this.policies = policies;
  });
}
ngOnDestroy() {
  this.ItemRiskSub.unsubscribe();
  this.customerSub.unsubscribe();
  this.policySub.unsubscribe();
}

}
