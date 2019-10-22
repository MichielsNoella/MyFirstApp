export class Budget {
  constructor(
    public description?: string,
    public amount?: number,
    public budgetDate?: string,
    public id?: string,
    public genre?: Genre
  ) {
  }
}

export enum Genre {
  VARIOUS = 'VARIOUS',
  VISA_D = 'VISA_D',
  VISA_N = 'VISA_N',
  FIXED_CHARGES = 'FIXED_CHARGES',
}
