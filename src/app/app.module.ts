import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule,
         MatCardModule,
         MatButtonModule,
         MatToolbarModule,
         MatExpansionModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';


import { AppComponent } from './app.component';

import { PolicyCreateComponent } from './customers/policy-create/policy-create.component';

import { HeaderComponent } from './header/header.component';
import { PolicyListComponent } from './customers/policy-list/policy-list.component';
import { CustomerListComponent } from './customers/customer-list/customer-list.component';


@NgModule({
  declarations: [
    AppComponent,
    PolicyCreateComponent,
    HeaderComponent,
    PolicyListComponent,
    CustomerListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatInputModule,
    FormsModule,
    MatFormFieldModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatExpansionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
