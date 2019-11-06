export class Budget {
  id: string;
  description: string;
  extraComment: string;
  amount: number;
  budgetDate: string;
  genre: Genre;
}

export class Revenues {
  id: string;
  amount: number;
  genre: Genre;
  description: string;
}

export class Sum {
  shopping: number = 0;
  visaDanny: number = 0;
  visaNoella: number = 0;
  fixedCharges: number = 0;
  total: number = 0;
}

export class SumRevenues {
  revenues: number = 0;
}

export class StartAmount {
  startAmount: number = 0;
}

export enum Genre {
  VARIOUS = 'VARIOUS',
  VISA_D = 'VISA_D',
  VISA_N = 'VISA_N',
  FIXED_CHARGES = 'FIXED_CHARGES',
  MONTHLY_CHARGES = 'MONTHLY_CHARGES',
  MONTHLY_REVENUES = 'MONTHLY_REVENUES',
  REVENUES= 'REVENUES'
}
