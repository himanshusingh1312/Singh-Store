
import { NextResponse } from "next/server";
import { loadStripe } from '@stripe/stripe-js';
import Stripe from "stripe";
// Function to lazily load Stripe
   const stripe= new Stripe('sk_test_51OiasdSGKOtQ2JJ2oRNvQgmwM45dQhbL62HqdESsFqpn99icpLh0sUc15V21AElif440YOrLCVc3Iiq6R9tja1DD00XtcBEgtc');
    
export async function POST(req){
 
  try {
    const {total,name,email,pincode,address,city,state,cart}= await req.json();
    if (!stripe) {
        console.log('Failed to load Stripe');
      }
      const customer= await stripe.customers.create({
        email:email,
        address:{
            city:city,
            country:"India",
            line1:'panki',
            postal_code:pincode,
            state:state
        },
        name:"himanshu"
      });
      const lineItems = Object.values(cart).map(item => ({
        price_data: {
          currency: 'inr',
          product_data: {
            name: item.name,
            description: 'Best'
          },
          unit_amount: item.price * 100, // Amount in cents
        },
        quantity: item.qty,
      }));

    const check= await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        customer:customer.id,
        line_items: lineItems,
        mode: 'payment',
        success_url: "http://localhost:3000/checkout", // Redirect after successful payment
        cancel_url: 'http://localhost:3000', // Redirect if user cancels
      });
      return  NextResponse.json({url:check.url,success:true});
  } catch (error) {
    console.error('Error processing payment:', error);
    return NextResponse.json({success: false});
  }
}
