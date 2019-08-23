import * as Express from "express";

const router = Express.Router();

interface ILogin {
  id: string;
  password: string;
}

router.post("/auth/login", (req: Express.Request, res: Express.Response) => {
  const credential: ILogin = req.body;
  if (credential.id === "sampleuser" && credential.password === "passw0rd") {
    res.status(200).json({
      success: true
    });
  } else {
    res.status(401).json({
      success: false
    });
  }
});

export const login = router;
