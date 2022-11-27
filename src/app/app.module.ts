import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {AppComponent} from './app.component';
import {CurrencyService} from "./services/currency.service";
import { CommonModule } from '@angular/common';
import { CurrencyItemComponent } from './components/currency-item/currency-item.component';

@NgModule({
  declarations: [
    AppComponent,
    CurrencyItemComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CommonModule
  ],
  providers: [CurrencyService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
