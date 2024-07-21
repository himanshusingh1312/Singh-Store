import { connectionstr } from "@/lib/db";
import mongoose from "mongoose";
import { NextResponse } from "next/server";
import { User } from "@/lib/user";
import jwt from 'jsonwebtoken';
export async function POST(req){
    try{
        const {token} = await req.json()
        await mongoose.connect(connectionstr)
       let user = jwt.verify(token,'jwtsecret')
        user= await User.findOne({email:user.email})
     //   console.log(user)
        return  NextResponse.json(
            
            {user}
        )
    }
    catch(error){
        return NextResponse.json(
            {message:"an error comes"},
            {status:500}
        )
    }
}