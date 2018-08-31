import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { RiskItem } from './risk-item.model';
import { Customer } from './customer.model';
import {Policy } from './policy.model';

@Injectable({providedIn: 'root'})
export class RiskItemService {
  // declare arrays
 private riskItem: RiskItem[] = [];
 private customers: Customer[] = [];
 private policies: Policy[] = [];

 private policyUpdated = new Subject<Policy[]>();
 private riskItemUpdated = new Subject<RiskItem[]>();
 private customerUpdated = new Subject<Customer[]>();

  getRiskItem() {
      return [...this.riskItem];
  }
  getCustomer() {
    return [...this.customers];
  }
  getPolicy() {
    return [...this.policies];
  }
  getRiskItemListener() {
    return this.riskItemUpdated.asObservable();
  }
  getCustomerListener() {
    return this.customerUpdated.asObservable();
  }
  getPolicyListerner() {
    return this.policyUpdated.asObservable();
  }

  addRiskItem( Premium: string, RiskItemName: string, RiskStartDate: string) {
    const riskItem: RiskItem = { Premium: Premium, RiskItemName: RiskItemName, RiskStartDate: RiskStartDate};
    this.riskItem.push(riskItem);
    this.riskItemUpdated.next([...this.riskItem]);
  }

  addCustomer(ZAID: string, FirstName: string, Surname: string, DateOfBirth: string) {
    const customer: Customer = {ZAID: ZAID, FirstName: FirstName, Surname: Surname, DateOfBirth: DateOfBirth };
    this.customers.push(customer);
    this.customerUpdated.next([...this.customers]);
  }
// add policy
 addPolicy( DebitOrderDate: string,
            PolicyInceptionDate: string, PolicyNumber: string, PolicyStutas: boolean, Premium: number, TransactionDate: string) {
    const policy: Policy = {DebitOrderDate: DebitOrderDate, PolicyInceptionDate: PolicyInceptionDate,
      PolicyNumber: PolicyNumber, PolicyStutas: PolicyStutas, Premium: Premium, TransactionDate: TransactionDate };
      this.policies.push(policy);
      this.policyUpdated.next([...this.policies]);
 }

 DeriveDateOfBirth(ZAID: string) {
  const date = ZAID.substring(-0 , 2) + '-' + ZAID.substring(2 , 4) + '-' + ZAID.substring(4 , 6);
  return date;
 }
 isValidNumber(ZAID: string): boolean {
  const ex = /^(((\d{2}((0[13578]|1[02])(0[1-9]|[12]\d|3[01])|(0[13456789]|1[012])(0[1-9]|[12]\d|30)|02(0[1-9]|1\d|2[0-8])))|([02468][048]|[13579][26])0229))(( |-)(\d{4})( |-)(\d{3})|(\d{7}))/;

  if (ex.test(ZAID) === false) {
    console.log('the id is wrong');
    return false;
  }
  return true;
 }

}
