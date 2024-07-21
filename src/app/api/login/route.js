import { connectionstr } from "@/lib/db";
import { User } from "@/lib/user";
import mongoose from "mongoose";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs"
import jwt from 'jsonwebtoken';
export async function POST(req){
    try{
        const {email,password} = await req.json()
        
        await mongoose.connect(connectionstr)
        const user = await User.findOne({ email});
        const isMatch = await bcrypt.compare(password, user.password);
        var token =jwt.sign({success:true,email:user.email,name:user.name},'jwtsecret')
        if(!isMatch){
        return  NextResponse.json( {status:500}
        )
        }
        else{
        return  NextResponse.json(
            
            {token}
        )
        }
    }
    catch(error){
        return NextResponse.json(
            {message:"an error comes"},
            {status:500}
        )
    }
}