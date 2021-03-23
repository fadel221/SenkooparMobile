import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';


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
    ,canActivate:[AuthGuard],
  },
  {
    
    path: 'accueil', 
    loadChildren: () => import('./accueil/accueil.module').then( m => m.AccueilPageModule)
    ,canActivate:[AuthGuard],
  },
  {
    
    path: 'depot', 
    loadChildren: () => import('./depot/depot.module').then( m => m.DepotPageModule)
    ,canActivate:[AuthGuard],
  },
  
  {
    
    path: 'transactions', 
    loadChildren: () => import('./transactions/transactions.module').then( m => m.TransactionsPageModule)
    ,canActivate:[AuthGuard],
  },
  {
    
    path: 'transaction', 
    loadChildren: () => import('./transaction/transaction.module').then( m => m.TransactionPageModule)
    ,canActivate:[AuthGuard],
  },
  {
    
    path: 'commissions', 
    loadChildren: () => import('./commissions/commissions.module').then( m => m.CommissionsPageModule)
    ,canActivate:[AuthGuard],
  },
  {
    
    path: 'frais', 
    loadChildren: () => import('./frais/frais.module').then( m => m.FraisPageModule)
    ,canActivate:[AuthGuard],
  },
  {
    
    path: 'retrait',
    loadChildren: () => import('./retrait/retrait.module').then( m => m.RetraitPageModule)
    ,canActivate:[AuthGuard],
  },
  {
    path: 'depot-popover',
    loadChildren: () => import('./depot-popover/depot-popover.module').then( m => m.DepotPopoverPageModule)
  },
  {
    path: 'successpopover',
    loadChildren: () => import('./successpopover/successpopover.module').then( m => m.SuccesspopoverPageModule)
  },
  {
    path: 'popup-frais',
    loadChildren: () => import('./popup-frais/popup-frais.module').then( m => m.PopupFraisPageModule)
  },
  {
    path: 'maps',
    loadChildren: () => import('./maps/maps.module').then( m => m.MapsPageModule)
  },
  {
    path: 'share-transaction',
    loadChildren: () => import('./share-transaction/share-transaction.module').then( m => m.ShareTransactionPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
