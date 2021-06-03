import * as Express from 'express'
import * as admin from 'firebase-admin'

export const firebaseAuth = async (
    req: Express.Request,
    res: Express.Response,
    next: Express.NextFunction
): Promise<void | Express.Response> => {
  if (!req.headers || !req.headers.authorization) {
    return res.status(400).json({
      message: 'Authorization Header is required.'
    })
  }

  const token: string = req.headers.authorization.split('Bearer ')[1]

  try {
    await admin.auth().verifyIdToken(token)
    return next()
  } catch (err) {
    console.warn(err)
    return res.status(401).json({
      message: 'credential is not correct.'
    })
  }
}
