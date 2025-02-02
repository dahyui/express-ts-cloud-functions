import { Router, Request, Response } from 'express'
import { genFunctionName } from '../../utils/functions'
import { IRoutes } from '../../interfaces'

const router = Router()

interface ILogin {
  id: string;
  password: string;
}

router.post('/', (req: Request, res: Response) => {
  const credential: ILogin = req.body
  if (credential.id === 'sampleuser' && credential.password === 'passw0rd') {
    res.status(200).json({
      success: true
    })
  } else {
    res.status(401).json({
      success: false
    })
  }
})

export const login: IRoutes = {
  name: genFunctionName(__dirname, __filename),
  router
}
