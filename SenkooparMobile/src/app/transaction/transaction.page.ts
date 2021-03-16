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
  transactions:any[]
  depots:any[]
  retraits:any[]
  User:any
  type:string
  ngOnInit() {
    this.service.GetUserByToken().subscribe(
      (response:any)=>
      {
        this.User=response
        this.service.GetDepotTransactions(this.User.id).subscribe(
          (success:any)=>
          {
            this.depots=success["hydra:member"];
            console.log(this.depots)
          }
        )
        this.service.GetRetraitTransactions(this.User.id).subscribe(
          (success:any)=>
          {
            this.retraits=success["hydra:member"];
          }
        )
      }
    )
  }

}
