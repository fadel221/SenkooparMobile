import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { Transaction } from '../entity/Transaction';

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

  Retrait(data: any,id)
  {
    return this.http.put(this.link+"transactions/"+id,data)
  }

  GetFrais(montant:any)
  {
    return this.http.get(this.link+"user/frais/"+montant)
  }

  CalculFrais(type:string,montant:number)
  {
    if (type==='depot')
    {
      return montant*0.1
    }
    else
      return montant*0.2
  }

  GetUserCompte(data:any)
  {
    return this.http.get(this.link+"user/"+data+"/compte");
  }

  GetTRansactionByCode(data:any)
  {
    return this.http.get(this.link+"transactions?codeTransfert="+data);
  }

  GetDepotTransactions(id:number)
  {
    return this.http.get(this.link+"transactions?userDepot.id="+id);
  }

  GetRetraitTransactions(id:number)
  {
    return this.http.get(this.link+"transactions?userRetrait.id="+id);
  }

  GetUserByToken()
  {
    return this.http.get(this.link+"user/token");
  }


}
