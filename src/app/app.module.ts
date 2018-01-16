import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {ChurchesComponent} from './churches/churches.component';
import {AppRoutingModule} from './/app-routing.module';
import {DashboardComponent} from './dashboard/dashboard.component';
import {ProductionComponent} from './production/production.component';
import {RequestInfoComponent} from './request-info/request-info.component';
import {KitchenBenchComponent} from './products/kitchen-benches/kitchen-bench/kitchen-bench.component';
import {ProductsComponent} from './products/products.component';
import {KitchenBenchesComponent} from './products/kitchen-benches/kitchen-benches.component';
import {ChurchComponent} from './churches/church/church.component';

@NgModule({
  declarations: [
    AppComponent,
    ChurchesComponent,
    ChurchComponent ,
    DashboardComponent,
    ProductsComponent,
    ProductionComponent,
    RequestInfoComponent,
    KitchenBenchesComponent,
    KitchenBenchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
