import { connectionstr } from "@/lib/db";
import { User } from "@/lib/user";
import mongoose from "mongoose";
import { NextResponse } from "next/server";
export async function POST(req){
    try{
        const {email} = await req.json()
    
        await mongoose.connect(connectionstr)
        let user= await User.findOne({email})
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