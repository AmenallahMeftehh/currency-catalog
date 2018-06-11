import {Component, OnInit} from '@angular/core';
import {CurrencyDetailsService} from './currency-details.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-currency-details',
  templateUrl: './currency-details.component.html',
  styleUrls: ['./currency-details.component.css']
})
export class CurrencyDetailsComponent implements OnInit {
  error: string;
  currency: any;
  currencyId: string;

  constructor(private currencyDetailsService: CurrencyDetailsService, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    // Call getCurrencyDetailsById function to load currency details
    this.route.params.subscribe((params) => {
      this.currencyId = params['id'];
      this.getCurrencyDetailsById(this.currencyId);
    });
  }

  getCurrencyDetailsById(currencyId: string) {
    this.currencyDetailsService.getCurrencyDetailsById(currencyId).subscribe(currency => {
      this.currency = currency.data;
    }, (response) => {
      this.error = 'ERROR';
    });
  }

}
