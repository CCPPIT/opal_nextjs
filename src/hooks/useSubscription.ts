import { useState } from "react"

export const useSubscritpion=()=>{
    const [isProcessing,setProcessing]=useState(false);
    const onSubscribe=async()=>{
        setProcessing(true)
    }
    return{isProcessing,onSubscribe}
}