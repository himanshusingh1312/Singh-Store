import { connectionstr } from "@/lib/db";
import { Product } from "@/lib/product";
import mongoose from "mongoose";
import { NextResponse } from "next/server";
import jwt from 'jsonwebtoken';
export async function GET(){
    let products =[]
    await mongoose.connect(connectionstr)
    products= await Product.find({category:"tshirts"});
    return NextResponse.json({result:products})
}

export async function POST(req){
    try {
        const authorizationHeader = req.headers.get('Authorization');
        const token = authorizationHeader?.replace('Bearer ', '');
        const data = jwt.verify(token, 'jwtsecret');
        
        const payload = await req.json();
        await mongoose.connect(connectionstr);
        
        let product = new Product({
          title: payload.title,
          slug: payload.slug,
          desc: payload.desc,
          img: payload.img,
          category: payload.category,
          size: payload.size,
          color: payload.color,
          price: payload.price,
          availableQty: payload.availableQty,
          email: data.email
        });
        const result = await product.save();
        
        
        return NextResponse.json({ result, success: true });
      } catch (error) {
        return NextResponse.json({ error: error.message, success: false });
      }
}
