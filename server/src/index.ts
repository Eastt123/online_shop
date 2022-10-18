import mongoose from "mongoose";

import { app } from "./app";

const PORT:string | undefined = process.env.PORT;

const startServer = async () =>{
    try {
         await mongoose.connect(process.env.MONGODB_URL!).then(()=>{
            console.log("Connected To The Database");
            
         }).then(()=>{
        app.listen(PORT, ()=>{console.log(`Server is up on ${PORT}`);
         })
        })
    } catch (error) {
        console.log(error);
        
    }
}

startServer();