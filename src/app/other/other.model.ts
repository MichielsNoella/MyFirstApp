export class Sum {
  startToSaveNoella: number = 0;
  total: number = 0;
}

export enum Genre {
  START_TO_SAVE_NOELLA = 'START_TO_SAVE_NOELLA'
}

export class Other {
  id: string;
  description: string;
  amount: number;
  genre: Genre;
}
