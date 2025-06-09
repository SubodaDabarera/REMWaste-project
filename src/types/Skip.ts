interface Skip {
  id: number;
  allowed_on_road: boolean;
  allows_heavy_waste: boolean;
  area: string;
  created_at: Date;
  forbidden: boolean;
  hire_period_days: number;
  per_tonne_cost: number;
  postcode: string;
  price_before_vat: number;
  size: number;
  transport_cost: number;
  updated_at: Date;
  vat: number;
}

export type { Skip };
