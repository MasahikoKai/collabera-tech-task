import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrencyItemComponent } from './currency-item.component';
import {Component} from "@angular/core";

const MOCK_CURRENCY = {
    id: 1,
    instrumentName: 'EUR/USD',
    bid: '1.1000',
    ask: '1.2000',
    timestamp: 1669575272074
  };

@Component({
  selector: 'app-parent',
  template: `
    <table>
        <tr app-currency-item [currencyItem]="currency"></tr>
    </table>
  `,
  styleUrls: []
})
export class ParentComponent {
  public currency = MOCK_CURRENCY;

  constructor() { }
}


describe('CurrencyItemComponent', () => {
  let component: ParentComponent;
  let fixture: ComponentFixture<ParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParentComponent, CurrencyItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('td length should be 5', function () {
    const tdElements = fixture.debugElement.nativeElement.querySelectorAll('td');
    expect(tdElements.length).toBe(5);
  });

  it('id of first element should be 1', function () {
    const tdElements = fixture.debugElement.nativeElement.querySelector('td');
    expect(tdElements.textContent.trim()).toBe('1');
  });
});
