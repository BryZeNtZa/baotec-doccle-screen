import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatDialogModule} from '@angular/material/dialog';
import {MatTabsModule} from '@angular/material/tabs';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {HttpClientModule} from '@angular/common/http';
import {MatNativeDateModule} from '@angular/material/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListReceiversComponent } from './app.list-receivers.component';
import { AddReceiverComponent } from './app.add-receiver.component';
import {SendDocumentsDialogComponent} from './send-documents-dialog.component';
import { ListBatchComponent } from './app.list-batch.component';
import { DetailsBatchComponent } from './app.details-batch.component';
import { DashboardComponent } from './app.dashboard.component';
import { ListDocumentsComponent } from './app.list-documents.component';
import { AddDocumentDialogComponent } from './app.add-document-dialog.component';
import { SendReceiversDialogComponent } from './send-receivers-dialog.component';
import { AdministrationComponent } from './app.administration.component';

@NgModule({
  declarations: [
    AppComponent,
    ListReceiversComponent,
    AddReceiverComponent,
    SendDocumentsDialogComponent,
    ListBatchComponent,
    DetailsBatchComponent,
    DashboardComponent,
    ListDocumentsComponent,
    AddDocumentDialogComponent,
    SendReceiversDialogComponent,
    AdministrationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule,
    MatCheckboxModule,
    MatTableModule,
    MatPaginatorModule,
    MatNativeDateModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatDatepickerModule,
    MatDialogModule,
    MatTabsModule,
    MatButtonToggleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
