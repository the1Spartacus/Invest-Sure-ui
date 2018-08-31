import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

import { RiskItemService } from '../../risk-item.service';

@Component({
  selector: 'app-policy-create',
  templateUrl: './policy-create.component.html',
  styleUrls: ['./policy-create.component.css']
})
export class PolicyCreateComponent {
  customer = true;
  policy = false;
  item = false;
  idErrorMsg = 'ID number is invalid';
  id: boolean;
  constructor(public customerService: RiskItemService) {}

  onAddCustomer(form: NgForm) {
    if (form.invalid) {
      return;
    } else if (this.customerService.isValidNumber(form.value.ZAID) === false) {
       return this.idErrorMsg;
     }



    const dataOfBirth = this.customerService.DeriveDateOfBirth(form.value.ZAID);
    this.customerService.addCustomer(form.value.ZAID, form.value.FirstName, form.value.Surname, dataOfBirth);
    form.resetForm();
    this.customer = false;
    this.policy = true;
  }
  onAddPolicy(form: NgForm) {
    if (form.invalid) {
      return;
    }
   this.customerService.addPolicy(form.value.DebitOrderDate,
     form.value.PolicyInceptionDate, form.value.PolicyNumber, form.value.PolicyStutas, form.value.Premium, form.value.TransactionDate);
  form.resetForm();
  this.policy = false;
  this.item = true;
  }
  onAddRisk(form: NgForm) {
    if (form.invalid) {
      return;
    }
   this.customerService.addRiskItem(form.value.Premium, form.value.RiskItemName, form.value.RiskStartDate);
  form.resetForm();
  }
 onFinish() {
  this.item = false;
 }
  }


