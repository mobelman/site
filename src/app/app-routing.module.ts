import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ChurchesComponent} from './churches/churches.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {ChurchComponent} from './churches/church/church.component';
import {ProductionComponent} from './production/production.component';
import {RequestInfoComponent} from './request-info/request-info.component';
import {KitchenBenchComponent} from './products/kitchen-benches/kitchen-bench/kitchen-bench.component';
import {ProductsComponent} from './products/products.component';

const routes: Routes = [
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  {path: 'churches', component: ChurchesComponent},
  {path: 'churches/:location/:name', component: ChurchComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'kitchen-benches/:id', component: KitchenBenchComponent},
  {path: 'production', component: ProductionComponent},
  {path: 'products', component: ProductsComponent},
  {path: 'request-info', component: RequestInfoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
