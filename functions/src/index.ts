import * as Express from 'express'
import { routes } from './routes'
import { schedules } from './scheduler'
import { cors } from './middleware/cors'
import { initFirebase } from './utils/firebase'
import * as functions from 'firebase-functions'
import { IRoutes } from './interfaces'
import { ISchedules } from './interfaces/schedules'
import * as helmet from 'helmet'

// firebase initialize
initFirebase()

// REST API routes
routes.forEach((routerObj: IRoutes) => {
  const app = Express()

  // add cors middleware
  app.use(cors)
  // add helmet
  app.use(helmet())

  // export routes individually for cloud functions
  app.use(routerObj.router)
  exports[routerObj.name] = functions.https.onRequest(app)
})

// Schedule functions
schedules.forEach((schedule: ISchedules) => {
  exports[schedule.name] = schedule.schedule
})
