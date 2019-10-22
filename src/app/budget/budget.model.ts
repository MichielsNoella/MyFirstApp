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
  V = 'V',
  VD = 'VD',
  VN = 'VN',
  FC = 'FC',
}
// export enum Genre {
//   V = 'Various',
//   VD = 'Visa Danny',
//   VN = 'Visa Noella',
//   FC = 'Fixed charges',
// }
