import { Component } from '@angular/core';
import {CurrencyService} from './services/currency.service';
import {Observable} from "rxjs";
import {Currency} from "./interfaces";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public data$: Observable<Currency> = this.currencyService.data$;

  constructor(private readonly currencyService: CurrencyService) {
    currencyService.fetchPrices$.subscribe();
  }

  public userByKey(index: number) {
    return index;
  }
}
