import {EnumValue} from '@angular/compiler-cli/src/ngtsc/metadata';

export class Shopping {
  constructor(
    public id?: string,
    public purchaseDescription?: string,
    public purchaseAmount?: number,
    public purchaseDate?: string
  // public genre?: EnumValue
  ) {
  }
}

export enum Direction {
  Up = 'UP',
  Down = 'DOWN',
  Left = 'LEFT',
  Right = 'RIGHT',
}
