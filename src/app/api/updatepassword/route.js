import { connectionstr } from "@/lib/db";
import { User } from "@/lib/user";
import mongoose from "mongoose";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs"
import jwt from 'jsonwebtoken';

export async function POST(req){
    try{
        const {password,cpassword,token} = await req.json()
        
        await mongoose.connect(connectionstr)
        let user = jwt.verify(token,'jwtsecret')
        const dbuser = await User.findOne({ email:user.email});
        const isMatch = await bcrypt.compare(password, dbuser.password);

        if(!isMatch){
        return  NextResponse.json( {status:500})
        }
        else{
            const hashedpassword= await bcrypt.hash(cpassword,10)
        let pass=await User.findOneAndUpdate({email:dbuser.email},{password:hashedpassword})
        return  NextResponse.json({success:true})
        }
    }
    catch(error){
        return NextResponse.json(
            {message:"an error comes"},
            {status:500}
        )
    }
}