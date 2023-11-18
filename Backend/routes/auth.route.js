import express from 'express';
import { google, signin, signup,signout } from '../controlller/auth.controller.js';


const router=express.Router();

router.post("/signup",signup)
router.post("/signin",signin)
router.post("/google",google)
router.get("/signOut",signout)
export default router;