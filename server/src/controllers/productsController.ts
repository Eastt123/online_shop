import express ,{ Request, Response } from "express";


export const getAllProducts = async (req:Request, res:Response) => {
    
   res.send("Works");
}