import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ChurchesComponent} from './churches/churches.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {ChurchDetailComponent} from './church-detail/church-detail.component';

const routes: Routes = [
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'churches', component: ChurchesComponent},
  {path: 'church/detail/:id', component: ChurchDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
