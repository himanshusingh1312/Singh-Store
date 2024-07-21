import mongoose from "mongoose";
import { connectionstr } from "@/lib/db";
import { NextResponse } from "next/server";
import { Product } from "@/lib/product";
export async function PUT(req,res){
    
    const productId=res.params.productid;
    const filter ={_id:productId};
    const payload = await req.json();
    console.log(payload);
    await mongoose.connect(connectionstr);
    const result = await Product.findOneAndUpdate(filter,payload)
    return NextResponse.json({result})
}

export async function GET(req,res){
    
    const productId=res.params.productid;
    const record ={_id:productId};
    await mongoose.connect(connectionstr);
    const result =await Product.findById(record);
    return NextResponse.json({result,success:true})
}