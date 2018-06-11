import { CurrenciesListComponent } from './currencies-list/currencies-list.component';
import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {CurrencyDetailsComponent} from './currency-details/currency-details.component';

const routes: Routes = [
  { path: 'currencies', component: CurrenciesListComponent},
  { path: 'currency/:id', component: CurrencyDetailsComponent},
  { path: '**', redirectTo: '404' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
