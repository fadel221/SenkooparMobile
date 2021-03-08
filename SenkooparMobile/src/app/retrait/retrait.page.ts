import { Component, OnInit } from '@angular/core';
import { Client } from '../entity/Client';
import { Transaction } from '../entity/Transaction';
import { DepotService } from '../Services/depot.service';

@Component({
  selector: 'app-retrait',
  templateUrl: './retrait.page.html',
  styleUrls: ['./retrait.page.scss'],
})
export class RetraitPage implements OnInit {


  ngOnInit() {
  }

  hide=false;
  show=true;
  code="";
  clientRetrait:Client={
    nomComplet:"",
    numCIN:"",
    telephone:""
  };
  clientDepot:Client={
    nomComplet:"",
    numCIN:"",
    telephone:""
  };
  transaction:Transaction=
  {
    montant:0,
    clientRetrait:this.clientRetrait,
    clientDepot:this.clientDepot,
    compteDepot:
    {
      id:1
    }
  };
  constructor(private servivce:DepotService) 
  {}
  
  ShowAndHide(data:any)
  {
    this.hide=data==1?false:true;   
  }

  GetTransaction()
  {
    if (this.code.length==11)
    {
      this.show=true;
      this.servivce.GetTRansactionByCode(this.code).subscribe(
        (response:Transaction)=>
        {
          this.transaction=response["hydra:member"][0];
          this.clientDepot=this.transaction['clientDepot'];
          this.clientRetrait=this.transaction['clientRetrait']
          console.log(this.transaction);
        }
      )
    }

    else
    {
      this.show=false
    }

    
    
  }

  

}
