import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'auth', 
    loadChildren: () => import('./auth/auth.module').then( m => m.AuthPageModule)
  },
  {
    path: 'accueil', 
    loadChildren: () => import('./accueil/accueil.module').then( m => m.AccueilPageModule)
  },
  {
    path: 'depot', 
    loadChildren: () => import('./depot/depot.module').then( m => m.DepotPageModule)
  },
  
  {
    path: 'transactions', 
    loadChildren: () => import('./transactions/transactions.module').then( m => m.TransactionsPageModule)
  },
  {
    path: 'transaction', 
    loadChildren: () => import('./transaction/transaction.module').then( m => m.TransactionPageModule)
  },
  {
    path: 'commissions', 
    loadChildren: () => import('./commissions/commissions.module').then( m => m.CommissionsPageModule)
  },
  {
    path: 'frais', 
    loadChildren: () => import('./frais/frais.module').then( m => m.FraisPageModule)
  },
  {
    path: 'retrait',
    loadChildren: () => import('./retrait/retrait.module').then( m => m.RetraitPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
