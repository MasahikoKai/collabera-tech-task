import { TestBed } from '@angular/core/testing';
import { CurrencyService } from './currency.service';
import {
  HttpClientTestingModule,
  HttpTestingController
} from "@angular/common/http/testing";
import { filter } from 'rxjs/operators';

const MOCK_CURRENCIES_LIST = [
  {
    id: 1,
    instrumentName: 'EUR/USD',
    bid: '1.1000',
    ask: '1.2000',
    timestamp: 1669575272074
  }
];

describe('CurrencyService', () => {
  let service: CurrencyService;
  let httpController: HttpTestingController;
  let spy: any;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    });
    service = TestBed.inject(CurrencyService);
    httpController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('state should be changed after call getAllPrices', (done) => {
    spy = spyOn<any, any>(service, '_instrumentMerge').and.returnValue(() => {});
    service.data$.pipe(filter(Boolean)).subscribe((res) => {
      const expected_mock = {
        1: MOCK_CURRENCIES_LIST[0]
      }
      expect(res).toEqual(expected_mock);
      done();
    });
    service.fetchPrices$.subscribe();


    const req = httpController.expectOne({
      method: 'GET',
      url: `/api/getAllPrices`,
    });

    req.flush(MOCK_CURRENCIES_LIST);
  });

  afterEach(() => {
    spy?.calls?.reset();
  })
});
