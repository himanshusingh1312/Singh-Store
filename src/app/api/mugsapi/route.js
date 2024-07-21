import { connectionstr } from "@/lib/db";
import { Product } from "@/lib/product";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET(){
    let products =[]
    await mongoose.connect(connectionstr)
    products= await Product.find({category:"mugs"});
    return NextResponse.json({result:products})
}