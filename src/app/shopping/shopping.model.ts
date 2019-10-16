export class Shopping {
  constructor(
    public purchaseDescription?: string,
    public purchaseAmount?: number,
    public purchaseDate?: string,
    public id?: string,
    public genre?: Genre
  ) {
  }
}

export enum Genre {
  V = 'Various',
  VD = 'Visa Danny',
  VN = 'Visa Noella',
  FC = 'Fixed charges',
}
