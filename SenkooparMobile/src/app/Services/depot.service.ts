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

  GetDepotTransactions(id:number,date_debut:string,date_fin:string)
  {
    if (date_debut=="")
      date_debut=null
    if (date_fin=="")
      date_fin=null
    return this.http.get(this.link+"transactions?userDepot.id="+id+"&dateDepot[after]="+date_debut+"&dateRetrait[before]="+date_fin);
  }

  GetRetraitTransactions(id:number,date_debut:string,date_fin:string)
  {
    if (date_debut=="")
      date_debut=null
    if (date_fin=="")
      date_fin=null
    return this.http.get(this.link+"transactions?userRetrait.id="+id+"&dateDepot[after]="+date_debut+"&dateRetrait[before]="+date_fin);
  }

  TotalMontant(tab:any)
  {
    var total=0
    for (let i=0;i<tab.length;i++)
    {
      total+=tab[i]['montant']
    }
    return total
  }

  TotalFrais(tab:any,key:string)
  {
    var total=0
    for (let i=0;i<tab.length;i++)
    {
      total+=tab[i][key]
    }
    return total
  }

  GetUserByToken()
  {
    return this.http.get(this.link+"user/token");
  }


}
