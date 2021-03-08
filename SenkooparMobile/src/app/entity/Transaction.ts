import { Client } from "./Client"

export class Transaction
{
    compteDepot:
    {
        id:number
    }
    clientDepot:Client
    clientRetrait:Client
    montant:number
}