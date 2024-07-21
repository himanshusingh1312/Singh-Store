import { connectionstr } from "@/lib/db";
import { User } from "@/lib/user";
import mongoose from "mongoose";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs"
export async function POST(req){
    try{
        const {name,email,password} = await req.json()
        const hashedpassword= await bcrypt.hash(password,10)
        await mongoose.connect(connectionstr)
        await User.create({name,email,password:hashedpassword})
        return  NextResponse.json(
            {message:"user register",success:true},
            {status:200}
        )
    }
    catch(error){
        return NextResponse.json(
            {message:"an error comes"},
            {status:500}
        )
    }
}