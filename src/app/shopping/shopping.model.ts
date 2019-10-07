import {EnumValue} from '@angular/compiler-cli/src/ngtsc/metadata';

export class Shopping {
  constructor(
    public id?: number,
    public description?: string,
    public amount?: number,
    public done?: boolean
  //   public date?: Date
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
