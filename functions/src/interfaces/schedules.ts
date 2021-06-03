import { CloudFunction } from 'firebase-functions'

export interface ISchedules {
  name: string;
  schedule: CloudFunction<unknown>;
}
