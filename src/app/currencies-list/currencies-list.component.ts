import {Component, OnInit} from '@angular/core';
import {Currency} from '../shared/model/Currency';
import {CurrencyService} from './currencies-list.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
    selector: 'app-currencies-list',
    templateUrl: './currencies-list.component.html',
    styleUrls: ['./currencies-list.component.css']
})
export class CurrenciesListComponent implements OnInit {
    error: string;
    currenciesList: Currency[];
    filter: string;
    selectedValue: string;

    constructor(private currencyService: CurrencyService, private route: ActivatedRoute, private router: Router) {
    }

    ngOnInit() {
        // Call getCurrencies function to load currencies data
        this.getCurrencies();
    }

    getCurrencies() {
        this.currencyService.getCurrencies().subscribe(currencies => {
            this.currenciesList = currencies.data;
        }, (response) => {
            this.error = 'ERROR';
        });
    }

    navigateToDetailsInterface(currencyId) {
        this.router.navigate(['currency', currencyId]);
    }

}
