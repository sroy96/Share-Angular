import { Component, OnInit } from '@angular/core';

import {HttpClient2Service, Transaction} from '../service/http-client2.service';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {

  transactions: Transaction[];
  constructor(
     private httpClient2Service: HttpClient2Service
  ) { }

  ngOnInit() {
      this.httpClient2Service.getTransaction().subscribe(
     response => this.handleSuccessfulResponse(response),
    );
  }

  handleSuccessfulResponse(response) {
    this.transactions = response;
}

  deleteTransaction(transaction: Transaction): void {
  this.httpClient2Service.deleteTransaction(transaction)
    .subscribe( data => {
      this.transactions = this.transactions.filter(u => u !== transaction);
    });
}

  deleteallTransaction(): void {
  this.httpClient2Service.deleteallTransaction();

}
   // .subscribe( data => {
   //    this.transactions = this.transactions.filter(u => {
   //      return null;
   //    });
   //  });
}
