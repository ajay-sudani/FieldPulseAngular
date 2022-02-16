import { IPizza } from "../models";

export enum Country_Tax_Rate {
  "" = "",
  US = "us_tax_rate",
  AU = "au_tax_rate",
  NZ = "nz_tax_rate",
}

export enum Steps {
  PIZZERIA = "pizzeria",
  PIZZA = "pizza",
  ORDER_CALCULATION = "order_calculation",
  ORDER_CONFIRMATION = "order_confirmation",
}
