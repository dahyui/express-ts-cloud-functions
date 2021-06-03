import { pubsub, EventContext, CloudFunction } from 'firebase-functions'
import { genFunctionName } from '../utils/functions'

export interface ISchedules {
  name: string;
  schedule: CloudFunction<unknown>;
}

const sampleSchedule = pubsub.schedule('every day 00:00').onRun(async (context: EventContext) => {
  console.log('sampleSchedule', context)
  return true
})

export const sample: ISchedules = {
  name: genFunctionName(__dirname, __filename),
  schedule: sampleSchedule
}
