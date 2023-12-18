import {APP_INITIALIZER, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerComponent } from './customer/customer.component';
import { ProductComponent } from './product/product.component';
import { HomeComponent } from './home/home.component';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {KeycloakAngularModule, KeycloakService} from "keycloak-angular";

export function kcFactory(kcService : KeycloakService){
  return ()=>{
    kcService.init({
      config : {
        realm :"sdia-realm",
        clientId : "ng-inventory-client",
        url : "http://localhost:8080"
      },
      initOptions : {
        onLoad : "check-sso",
        checkLoginIframe : true,
        silentCheckSsoRedirectUri:
          window.location.origin + '/assets/silent-check-sso.html'
      }
    })
  }
}

@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    ProductComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    KeycloakAngularModule
  ],
  providers: [{provide : APP_INITIALIZER, deps : [KeycloakService],useFactory : kcFactory, multi : true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
