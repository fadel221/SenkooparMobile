import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-depot',
  templateUrl: './depot.page.html',
  styleUrls: ['./depot.page.scss'],
})
export class DepotPage implements OnInit {
hide=false;
  constructor() { }

  ngOnInit() {
  }

  ShowAndHide(data:any)
  {
    this.hide=data==1?false:true;   
  }

}
