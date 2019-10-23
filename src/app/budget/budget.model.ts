export class Budget {
  id: string;
  description: string;
  amount: number;
  budgetDate: string;
  genre: Genre;
}

export class Sum {
  shopping: number = 0;
  visa: number = 0;
  total: number = 0;
}

export class StartAmount {
  startAmount: number = 0;
}

export enum Genre {
  VARIOUS = 'VARIOUS',
  VISA_D = 'VISA_D',
  VISA_N = 'VISA_N',
  FIXED_CHARGES = 'FIXED_CHARGES',
}
