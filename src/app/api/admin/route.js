

import { NextResponse } from "next/server";
import jwt from 'jsonwebtoken';

import bcrypt from "bcryptjs"
export  async function POST(req, res) {
  // Get token from request headers
  const authorizationHeader = req.headers.get('Authorization');
  const token = authorizationHeader?.replace('Bearer ', '');
  const {email} = await req.json()
  
  
  try {
    // Verify token
    
    const data = jwt.verify(token, 'jwtsecret');
    
    
    if(data.email===email) return NextResponse.json({status:200})

    else return NextResponse.json({status:400})
  } catch (error) {
    // Token is invalid or expired
    return NextResponse.json({ message: 'failed ' });
  }
}