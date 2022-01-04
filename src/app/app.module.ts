import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactPreviewComponent } from './contact-preview/contact-preview.component';
import { ContactDetailsComponent } from './contact-details/contact-details.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NavbarComponent } from './navbar/navbar.component';
import { StatisticPageComponent } from './statistic-page/statistic-page.component';
import { ContactFilterComponent } from './contact-filter/contact-filter.component';
import { LoginComponent } from './login/login.component';
import { ContactEditComponent } from './contact-edit/contact-edit.component';
import { MoveListComponent } from './move-list/move-list.component';
import { TransferFundComponent } from './transfer-fund/transfer-fund.component';
import { ChartComponent } from './chart/chart.component';
@NgModule({
  declarations: [
    AppComponent,
    ContactPageComponent,
    ContactListComponent,
    ContactPreviewComponent,
    ContactDetailsComponent,
    HomePageComponent,
    NavbarComponent,
    StatisticPageComponent,
    ContactFilterComponent,
    LoginComponent,
    ContactEditComponent,
    MoveListComponent,
    TransferFundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule  ,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
