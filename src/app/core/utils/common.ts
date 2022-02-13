import { IPizza, IPizzeria } from '../models';

export enum Country_Tax_Rate {
  '' = '',
  US = 'us_tax_rate',
  AU = 'au_tax_rate',
  NZ = 'nz_tax_rate',
}

/**
 *  Get pizzas sub total (total pizza * pizza price)
 * @param pizzaList list of pizza
 * @returns subtotal
 */
export const getPizzaSubtotal = (pizzaList: IPizza[]): number => {
  return Number(
    pizzaList
      .reduce((total, pizza) => {
        total += (pizza.quantity || 0) * pizza.price;
        return total;
      }, 0)
      .toFixed(2)
  );
};
