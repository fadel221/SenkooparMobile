import { Component, OnInit } from '@angular/core';
import { DepotService } from '../Services/depot.service';

@Component({
  selector: 'app-commissions',
  templateUrl: './commissions.page.html',
  styleUrls: ['./commissions.page.scss'],
})
export class CommissionsPage implements OnInit {

  constructor(private service:DepotService) { }
  transactions:any[]
  depots:any[]
  retraits:any[]
  User:any
  type='depot'
  dateDebut:string
  dateFin:string
  sommeDepots:number;
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
            this.sommeDepots=this.service.TotalFrais(this.depots,'fraisDepot')
            console.log(this.depots)
          }
        )
        this.service.GetRetraitTransactions(this.User.id,this.dateDebut,this.dateFin).subscribe(
          (success:any)=>
          {
            this.retraits=success["hydra:member"];
            this.sommeRetrait=this.service.TotalFrais(this.retraits,'fraisRetrait')
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
        this.sommeDepots=this.service.TotalFrais(this.depots,'fraisDepot')
      }
    )

    this.service.GetRetraitTransactions(this.User.id,this.dateDebut,this.dateFin).subscribe(
      (response:any)=>
      {
        this.retraits=response["hydra:member"]
        this.sommeRetrait=this.service.TotalFrais(this.retraits,'fraisRetrait')
      }
    )
    console.log(this.depots)
  }

}
