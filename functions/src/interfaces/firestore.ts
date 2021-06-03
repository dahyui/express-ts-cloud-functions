import { CloudFunction } from 'firebase-functions'

export interface IFirestore {
  name: string;
  schedule: CloudFunction<any>;
}
