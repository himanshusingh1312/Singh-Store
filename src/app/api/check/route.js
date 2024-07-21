import { connectionstr } from "@/lib/db";
import { User } from "@/lib/user";
import mongoose from "mongoose";
import { NextResponse } from "next/server";
export async function POST(req){
    try{
        const {email} = await req.json()
        await mongoose.connect(connectionstr)
        const user= await User.findOne({email}).select("_id")
        return NextResponse.json({user})
    }
    catch(error){
        console.log(error)
    }
}