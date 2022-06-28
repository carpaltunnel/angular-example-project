import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WidgetsComponent } from './widgets/widgets.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { WidgetDetailComponent } from './widget-detail/widget-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'widgets', component: WidgetsComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'widgets/:id', component: WidgetDetailComponent },
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
