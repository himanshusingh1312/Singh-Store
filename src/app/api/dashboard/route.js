import { connectionstr } from "@/lib/db";
import { Order } from "@/lib/order";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET(){
    let products =[]
    await mongoose.connect(connectionstr)
    products= await Order.find();
    return NextResponse.json({result:products})
}
