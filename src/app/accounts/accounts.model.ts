export class Sum {
  startToSaveNoella: number = 0;
  startToSaveDanny: number = 0;
  startToSave: number = 0;
  savingAccount: number = 0;
  total: number = 0;
}

export enum Genre {
  START_TO_SAVE_NOELLA = 'START_TO_SAVE_NOELLA',
  START_TO_SAVE_DANNY = 'START_TO_SAVE_DANNY',
  START_TO_SAVE = 'START_TO_SAVE',
  SAVING_ACCOUNT = 'SAVING_ACCOUNT'
}

export class Account {
  id: string;
  amount: number;
  genre: Genre;
}
