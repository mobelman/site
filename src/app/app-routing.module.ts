import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ChurchesComponent} from './churches/churches.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {ChurchDetailComponent} from './church-detail/church-detail.component';
import {PrivateProductsComponent} from './private-products/private-products.component';
import {PublicProductsComponent} from './public-products/public-products.component';
import {LegoProductionComponent} from './lego-production/lego-production.component';
import {RequestInfoComponent} from './request-info/request-info.component';

const routes: Routes = [
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  {path: 'churches', component: ChurchesComponent},
  {path: 'church-detail/:id', component: ChurchDetailComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'lego-production', component: LegoProductionComponent},
  {path: 'private-products', component: PrivateProductsComponent},
  {path: 'public-products', component: PublicProductsComponent},
  {path: 'request-info', component: RequestInfoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
