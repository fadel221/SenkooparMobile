import { Component, OnInit } from '@angular/core';
import { DepotService } from '../Services/depot.service';

@Component({
  selector: 'app-share-transaction',
  templateUrl: './share-transaction.page.html',
  styleUrls: ['./share-transaction.page.scss'],
})
export class ShareTransactionPage implements OnInit {

  constructor(private service:DepotService) { }
  transactions:any[]
  depots:any[]
  retraits:any[]
  User:any
  type='depot'
  dateDebut:string
  dateFin:string
  sommeDepot:number
  sommeRetrait:number
  ngOnInit() {
    this.service.GetUserByToken().subscribe(
      (response:any)=>
      {
        this.User=response
        this.service.GetDepotTransactions(this.User.id,this.dateDebut,this.dateFin).subscribe(
          (success:any)=>
          {
            this.depots=success["hydra:member"];
            this.sommeDepot=this.service.TotalMontant(this.depots)
          }
        )
        this.service.GetRetraitTransactions(this.User.id,this.dateDebut,this.dateFin).subscribe(
          (success:any)=>
          {
            this.retraits=success["hydra:member"];
            this.sommeRetrait=this.service.TotalMontant(this.retraits)
          }
        )
      }
    )
  }

  DateFilter()
  {
    
    console.log(String(this.dateDebut))
    this.service.GetDepotTransactions(this.User.id,this.dateDebut,this.dateFin).subscribe(
      (response:any)=>
      {
        this.depots=response["hydra:member"]
        this.sommeDepot=this.service.TotalMontant(this.depots)
      }
    )

    this.service.GetRetraitTransactions(this.User.id,this.dateDebut,this.dateFin).subscribe(
      (response:any)=>
      {
        this.retraits=response["hydra:member"]
        this.sommeRetrait=this.service.TotalMontant(this.retraits)
      }
    )
    console.log(this.depots)
  }

}

