import { Injectable } from '@angular/core';

import {HttpClient} from '@angular/common/http';

export class Transaction {
  constructor(
    public id: string,
    public Amount: number,
    public GivenBy: string,
    public TakenBY: string,
    public TrId: string,

  ) {}
}
@Injectable({
  providedIn: 'root'
})
export class HttpClient2Service {

  constructor(private httpClient2: HttpClient) { }


    getTransaction() {
    console.log('test call');
    return this.httpClient2.get<Transaction[]>('http://localhost:8080/v1/trns');
  }
   public createTransaction(transaction) {
    return this.httpClient2.post<Transaction>('http://localhost:8080/v1/new', transaction);
  }
    public createallTransaction(transactionall) {
    return this.httpClient2.post<Transaction>('http://localhost:8080/v1/new/all', transactionall);
  }
    public deleteallTransaction() {
    return this.httpClient2.delete<Transaction>('http://localhost:8080/v1/deleteTrns');
  }
   public deleteTransaction(transaction) {
    return this.httpClient2.delete<Transaction>('http://localhost:8080/v1/deleteTrns' + '/' + transaction.Trid);
  }
}
