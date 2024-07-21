import { connectionstr } from "@/lib/db";
import { Order } from "@/lib/order";
import mongoose from "mongoose";
import { NextResponse } from "next/server";
export async function POST(req){
    try{
        const {email,address,orderid,cart,amount,status,phone,pincode,city,state} = await req.json()
        await mongoose.connect(connectionstr)
        await Order.create({email,address,orderid,cart,amount,status,phone,pincode,city,state})
        return  NextResponse.json(
            
            {stat:200}
        )
    }
    catch(error){
        return NextResponse.json(
            {message:"an error comes"},
            {status:500}
        )
    }
}