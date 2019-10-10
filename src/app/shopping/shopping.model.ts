import {EnumValue} from '@angular/compiler-cli/src/ngtsc/metadata';

export class Shopping {
  constructor(
    public purchaseDescription?: string,
    public purchaseAmount?: number,
    public purchaseDate?: string,
    public id?: string
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
