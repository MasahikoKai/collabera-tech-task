import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import {CurrencyService} from "./services/currency.service";
import {BrowserModule} from "@angular/platform-browser";
import { HttpClientTestingModule } from '@angular/common/http/testing';
import {CommonModule} from "@angular/common";

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [
        BrowserModule,
        HttpClientTestingModule,
        CommonModule
      ],
      providers: [
        CurrencyService
      ]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

});
