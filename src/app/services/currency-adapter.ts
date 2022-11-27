import {CurrencyBody} from "../interfaces";
import {CurrencyService} from "./currency.service";

export function currencyAdapter(this: CurrencyService, items: CurrencyBody[]): void {
  const currencyWithKeys = Object.create(null);
  items.forEach((currency) => {
    const {id, instrumentName} = currency;
    currencyWithKeys[id] = currency;
    this.addInstrumentTimer(instrumentName);
  });
  this.setData(currencyWithKeys);
}
