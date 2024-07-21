import { connectionstr } from "@/lib/db";
import { Order } from "@/lib/order";;
import mongoose from "mongoose";
import { NextResponse } from "next/server";
import jwt from 'jsonwebtoken';

export  async function GET(req, res) {
  // Get token from request headers
  const authorizationHeader = req.headers.get('Authorization');
  const token = authorizationHeader?.replace('Bearer ', '');
  if (!token) {
    return NextResponse.json({ message: 'Authorization header missing' });
  }

  try {
    // Verify token
    const data = jwt.verify(token, 'jwtsecret');
    let orders = await Order.find({email:data.email});
    return NextResponse.json({orders})
  } catch (error) {
    // Token is invalid or expired
    return NextResponse.json({ message: 'failed ' });
  }
}