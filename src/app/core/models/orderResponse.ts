export interface IOrderResponse {
  result: {
    pizzeria_id: number;
    pizza_items: IOrderedPizza[];
    subtotal: number;
    tax: number;
    total: number;
  };
}

export interface IOrderedPizza {
  pizza_id: number;
  quantity: number;
  subtotal: number;
  tax: number;
  total: number;
}
