import { Component, OnInit } from '@angular/core';
import { Transaction } from '../entity/Transaction';
import { DepotService } from '../Services/depot.service';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.page.html',
  styleUrls: ['./transaction.page.scss'],
})
export class TransactionPage implements OnInit {

  constructor(private service:DepotService) { }
  transactions:Transaction
  User:any
  ngOnInit() {
    this.service.GetUserByToken().subscribe(
      (response:any)=>
      {
        this.User=response
        this.service.GetOwnTransactions(this.User['id']).subscribe(
          (success:any)=>
          {
            this.transactions=success['hydra:member'];
            console.log(this.transactions)
          }
        )
      }
    )
  }

}
