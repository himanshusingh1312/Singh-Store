import { connectionstr } from "@/lib/db";
import mongoose from "mongoose";
import { NextResponse } from "next/server";
import { User } from "@/lib/user";
import jwt from 'jsonwebtoken';
export async function PUT(req){
    try{
        const {token,name,phone,address,pincode} = await req.json()
        await mongoose.connect(connectionstr)
       let user = jwt.verify(token,'jwtsecret')
       let dbuser= await User.findOneAndUpdate({email:user.email},{name,phone,address,pincode})
      // console.log(user)
        return  NextResponse.json(
            
            {success:true}
        )
    }
    catch(error){
        return NextResponse.json(
            {message:"an error comes"},
            {status:500}
        )
    }
}