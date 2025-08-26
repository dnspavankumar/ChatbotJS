//imports
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import path from "path";
import {fileURLToPath} from "url";
import {exec} from "child_process";
//initialize path variables
const __filename = fileURLToPath(import.meta.url);
const __dirname=path.dirname(__filename);
// create server and ports
const server = express();
const PORT =3000;
//middleware
server.use(bodyParser.json());
server.use(cors());
server.use(routes);
//server.use(express.static(path.join(__dirname)))
//routes
server.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,"..","frontend","index.html"));
});

server.listen(PORT,()=>{
    console.log("Server is running on port 3000");
});
