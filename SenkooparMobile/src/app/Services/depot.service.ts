import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class DepotService {

  link=environment.url;

  constructor (private http: HttpClient) 
  { 
    
  }

  Depot(data: any)
  {
    return this.http.post(this.link+"transactions",data)
  }

  GetFrais(montant:any)
  {
    return this.http.get(this.link+"user/frais/"+montant)
  }

  GetUserCompte(data:any)
  {
    return this.http.get(this.link+"user/"+data+"/compte");
  }

  GetTRansactionByCode(data:any)
  {
    return this.http.get(this.link+"transactions?codeTransfert="+data);
  }

}
