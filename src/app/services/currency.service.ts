import {Injectable, OnDestroy} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Currency, CurrencyBody} from '../interfaces';
import {Observable, timer, mergeWith, Subject} from 'rxjs';
import {tap, switchMap, takeUntil, filter} from 'rxjs/operators';
import {BaseState} from "../store/base-state";
import {randomIntIntervalHelper} from '../helpers/random-int-interval.helper';
import {currencyAdapter} from "./currency-adapter";


@Injectable({
  providedIn: 'root'
})
export class CurrencyService extends BaseState<Currency> implements OnDestroy {
  private readonly _instrument$: Observable<CurrencyBody>[] = [];
  private readonly stopPolling = new Subject();

  private readonly _instrumentMerge = () => {
    const [first, ...others] = this._instrument$;
    return first.pipe(
      mergeWith(...others),
      tap(item => {
        this.updateCurrency(item, item.id);
      }),
      takeUntil(this.stopPolling)
    );
  }

  public readonly fetchPrices$ = this.http.get<CurrencyBody[]>('/api/getAllPrices').pipe(
    filter(items => Boolean(items.length)),
    tap(currencyAdapter.bind(this)),
    switchMap(this._instrumentMerge)
  );

  constructor(private http: HttpClient) {
    super();
  }

  private updateCurrency(itemToChange: CurrencyBody, key: number): void {
    const items = {...this.data} as any;
    items[key] = {...itemToChange};
    this.setData(items);
  }

  public addInstrumentTimer(instrumentName: string): void {
    const timer$ = timer(0, randomIntIntervalHelper(2000, 10000)).pipe(
      switchMap(_ => this.http.get<CurrencyBody>(`/api/getLatestPrice?instrument=${instrumentName}`))
    );
    this._instrument$.push(timer$);
  }

  ngOnDestroy() {
    this.stopPolling.next(1);
    this.stopPolling.complete();
  }
}
