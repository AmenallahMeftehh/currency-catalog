import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {CurrenciesListComponent} from './currencies-list/currencies-list.component';
import {AppRoutingModule} from './app.routing';
import {CurrencyService} from './currencies-list/currencies-list.service';
import {HttpClientModule} from '@angular/common/http';
import {CurrencyDetailsComponent} from './currency-details/currency-details.component';
import {CurrencyDetailsService} from './currency-details/currency-details.service';
import {FormsModule} from '@angular/forms';
import { SearchFilterPipe } from './currencies-list/search-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CurrenciesListComponent,
    CurrencyDetailsComponent,
    SearchFilterPipe
  ],
  imports: [
    BrowserModule, // app
    AppRoutingModule,
    HttpClientModule,
    FormsModule],
  providers: [CurrencyService, CurrencyDetailsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
