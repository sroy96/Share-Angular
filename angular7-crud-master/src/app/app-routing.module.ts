import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import {TransactionComponent} from './transaction/transaction.component';
import {AddTransactionComponent} from './add-transaction/add-transaction.component';

const routes: Routes = [

  { path: '', component: EmployeeComponent},
  { path: 'addemployee', component: AddEmployeeComponent},
  {path: 'transaction', component: TransactionComponent},
  {path: 'addtransaction', component: AddTransactionComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

