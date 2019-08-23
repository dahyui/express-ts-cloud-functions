import * as Express from "express";
import { firebaseAuth } from "../../middleware/firebaseAuth";

const router = Express.Router();

// The path `/smaple/*` requires firebase authentication
router.use("/", firebaseAuth);

router.get(
  "/",
  (req: Express.Request, res: Express.Response) => {
    res.status(200).json({
      userId: "1234",
      name: "Mike"
    });
  }
);

export const userinfo = router;
