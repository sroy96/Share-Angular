import { Component, OnInit } from '@angular/core';
import {HttpClient2Service, Transaction} from '../service/http-client2.service';


@Component({
  selector: 'app-add-transaction',
  templateUrl: './add-transaction.component.html',
  styleUrls: ['./add-transaction.component.css']
})
export class AddTransactionComponent implements OnInit {

tran: Transaction = new Transaction('', Number(''), '', '', '');

  constructor(
    private httpClient2Service: HttpClient2Service
  ) { }

 ngOnInit() {
  }

   createTransaction(): void {
    this.httpClient2Service.createTransaction(this.tran)
        .subscribe( data => {
          alert('Transaction created successfully.');
        });

  }
  //  createallTransaction(): void {
  //   this.httpClientService.createallTransaction(this.tran)
  //       .subscribe( data => {
  //         alert('Transaction created successfully.');
  //       });
  //
  // }
}
