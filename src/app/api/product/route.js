import { connectionstr } from "@/lib/db";
import { Product } from "@/lib/product";
import mongoose from "mongoose";
import { NextResponse } from "next/server";
import jwt from 'jsonwebtoken';

export async function GET(req){
    const authorizationHeader = req.headers.get('Authorization');
    const token = authorizationHeader?.replace('Bearer ', '');
    if (!token) {
      return NextResponse.json({ message: 'Authorization header missing' });
    }

    try {
        
      const data = jwt.verify(token, 'jwtsecret');
      let orders = await Product.find({email:data.email});
    
      return NextResponse.json({result:orders})
    } catch (error) {
        
      return NextResponse.json({ message: 'failed ' });
    }
    
}
