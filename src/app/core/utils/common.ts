import { IPizza } from "../models";

export enum Country_Tax_Rate {
  "" = "",
  US = "us_tax_rate",
  AU = "au_tax_rate",
  NZ = "nz_tax_rate",
}

export enum Tabs {
  PIZZERIAS = 0,
  CHOOSE_PIZZA = 1,
  ORDER_CALCULATION = 2,
  ORDER_CONFIRMATION = 3,
}
