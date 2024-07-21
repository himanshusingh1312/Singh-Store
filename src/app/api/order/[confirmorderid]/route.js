import { connectionstr } from "@/lib/db";
import { Order } from "@/lib/order";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET(req,res){
    const record=res.params.confirmorderid;
    await mongoose.connect(connectionstr);
    const result =await Order.findOne({orderid:record});
    return NextResponse.json({result,success:true})
}