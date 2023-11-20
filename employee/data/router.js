import { Router } from "express";


import * as rh from "./request-handlers.js";

import multer from 'multer'
import path from 'path'
const storage =multer.diskStorage({
    destination:"./files",
    filename:(req,file,cb)=>{
    cb(null,file.originalname);
}})
const upload=multer({storage:storage});
const router = Router()

// router.route("/register").post(rh.register);
// router.route("/login").post(rh.login);

router.route("/upload").post(rh.uploadFile)

router.route("/file").post(upload.single("myfile"),(req,res)=>{
    console.log(req.file);
    res.json("file stored")
    
})//myfile is a input filed name
// router.route("/get-file/:file").get((req,res)=>{
//     let fileName=req.params;
//     res.sendFile(path.resolve(`./files/${fileName.file}`));
// })
export default router;