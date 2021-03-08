import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicStorageModule } from '@ionic/storage';
import { DepotPipe } from './depot.pipe';
import { TokenAddInterceptor } from './Interceptor/TokenAddInterceptor';
import { AuthGuard } from './auth.guard';
//import { RequestInterceptorProvider } from './Interceptor/TokenAddInterceptor';

@NgModule({
  declarations: [AppComponent, DepotPipe],
  entryComponents: [],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    IonicStorageModule.forRoot(),
    ReactiveFormsModule,
    
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    {provide:HTTP_INTERCEPTORS,useClass: TokenAddInterceptor,multi:true},
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
