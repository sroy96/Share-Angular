import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export class Employee {
  constructor(
    public accId: string,
    public name: string,
    public balance: number,
    public mail: string,
  ) {}
}
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
export class HttpClientService {

  constructor(
    private httpClient: HttpClient
  ) {
     }

     getEmployees() {
    console.log('test call');
    return this.httpClient.get<Employee[]>('http://localhost:8080/v1/acc');
  }

  // public deleteEmployee(employee) {
  //   return this.httpClient.delete<Employee>("http://localhost:8080/em" + "/"+ employee.empId);
  // }

  public createEmployee(employee) {
    return this.httpClient.post<Employee>('http://localhost:8080/v1/member', employee);
  }
 public deleteEmployee() {
    return this.httpClient.delete<Employee>('http://localhost:8080/v1/deleteAcc');
  }
  // getTransaction() {
  //   console.log('test call');
  //   return this.httpClient.get<Transaction[]>('http://localhost:8080/v1/trns');
  // }
  //
  //  public createTransaction(transaction) {
  //   return this.httpClient.post<Transaction>('http://localhost:8080/v1/new', transaction);
  // }

  //  public createallTransaction(transactionall) {
  //   return this.httpClient.post<Transaction>('http://localhost:8080/v1/new/all', transactionall);
  // }



  //  public deleteallTransaction() {
  //   return this.httpClient.delete<Transaction>('http://localhost:8080/v1/deleteTrns');
  // }
  //  public deleteTransaction(transaction) {
  //   return this.httpClient.delete<Transaction>('http://localhost:8080/v1/deleteTrns' + '/' + transaction.Trid);
  // }


}

