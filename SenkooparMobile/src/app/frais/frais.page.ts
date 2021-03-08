import { Component, OnInit } from '@angular/core';
import { DepotService } from '../Services/depot.service';

@Component({
  selector: 'app-frais',
  templateUrl: './frais.page.html',
  styleUrls: ['./frais.page.scss'],
})
export class FraisPage implements OnInit {

  constructor(private service:DepotService) { }

  ngOnInit() {
  }

  CalculeFrais(data:any)
  {
    
    console.log(data)
    this.service.GetFrais(data['montant']).subscribe(
      (response:any)=>
      {
        console.log(response);
      }
    )
  }

}
