'use client'

import { useRouter } from "next/navigation"
import { FaTrash } from 'react-icons/fa';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function DeleteProduct(props){
    const router = useRouter();
    const deleteRecord = async()=>{
        let response = await fetch(`http://localhost:3000/api/product/${props.id}`,{
            method:"delete"
        });
        response = await response.json();
        if(response.success){
            toast.success("Product deleted");
            router.push("/dashboard_show")
        }
        
    }
    return (
        <div>
            <ToastContainer/>
            <button onClick={deleteRecord}><FaTrash className="mx-2"/></button>
        </div>
    )
}