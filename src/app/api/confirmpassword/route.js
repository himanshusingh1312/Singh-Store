import { connectionstr } from "@/lib/db";
import { User } from "@/lib/user";
import mongoose from "mongoose";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs"
export async function PUT(req){
    try{
        const {email,password} = await req.json()
    
        await mongoose.connect(connectionstr)
        const hashedpassword= await bcrypt.hash(password,10)
        
        let user= await User.findOneAndUpdate({email},{password:hashedpassword})
       // console.log(user)
        if(user){
        return  NextResponse.json(
            {success:true},
        )
        }
        else {
            return  NextResponse.json(
                {message:"no user"},
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