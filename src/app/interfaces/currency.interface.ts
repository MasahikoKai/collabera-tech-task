export interface Currency {
  [key: string]: CurrencyBody
}

export interface CurrencyBody {
  readonly id: number,
  readonly instrumentName: string,
  readonly bid: string,
  readonly ask: string,
  readonly timestamp: number
}
