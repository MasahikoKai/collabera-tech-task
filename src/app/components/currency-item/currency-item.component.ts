import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {CurrencyBody} from "../../interfaces";

@Component({
  selector: 'tr[app-currency-item]',
  templateUrl: './currency-item.component.html',
  styleUrls: ['./currency-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CurrencyItemComponent {
  @Input() currencyItem!: CurrencyBody;

  constructor() { }
}
