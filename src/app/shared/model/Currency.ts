export class Currency {
  public id?: string;
  public attributes: [{
  code: string;
  currency_type: CurrencyType;
  code_iso_numeric3: string;
  code_iso_alpha3: string;
  symbol: string;
  native_symbol: string;
  decimal_e: number;
  category: string; }];

  constructor(id: string, attributes: [{ code: string; currency_type: CurrencyType; code_iso_numeric3: string; code_iso_alpha3: string; symbol: string; native_symbol: string; decimal_e: number; category: string }]) {
    this.id = id;
    this.attributes = attributes;
  }
}
