import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ChurchesComponent } from './churches/churches.component';
import { ChurchDetailComponent } from './church-detail/church-detail.component';
import { AppRoutingModule } from './/app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PublicProductsComponent } from './public-products/public-products.component';
import { PrivateProductsComponent } from './private-products/private-products.component';
import { LegoProductionComponent } from './lego-production/lego-production.component';
import { RequestInfoComponent } from './request-info/request-info.component';

@NgModule({
  declarations: [
    AppComponent,
    ChurchesComponent,
    ChurchDetailComponent,
    DashboardComponent,
    PublicProductsComponent,
    PrivateProductsComponent,
    LegoProductionComponent,
    RequestInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
