import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListReceiversComponent } from './app.list-receivers.component';
import { AddReceiverComponent } from './app.add-receiver.component';
import { ListBatchComponent } from './app.list-batch.component';
import { DetailsBatchComponent } from './app.details-batch.component';
import { DashboardComponent } from './app.dashboard.component';
import { ListDocumentsComponent } from './app.list-documents.component';
import { AdministrationComponent } from './app.administration.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'list-receivers',
    component: ListReceiversComponent
  },
  {
    path: 'add-receiver',
    component: AddReceiverComponent
  },
  {
    path: 'list-batch',
    component: ListBatchComponent
  },
  {
    path: 'details-batch',
    component: DetailsBatchComponent
  },
  {
    path: 'list-documents',
    component: ListDocumentsComponent
  },
  {
    path: 'administration',
    component: AdministrationComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
