import { NextResponse } from "next/server";
export function GET(req){

    let pincodes={
        "208020":["Kanpur","Uttar Pradesh"],
        "221010":["Varanasi","Uttar Pradesh"],
        "100000":["Delhi","Delhi"]
    }
    return NextResponse.json(pincodes)
}