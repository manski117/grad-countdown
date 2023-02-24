import React from "react";
import Timer from "./Timer";

export default function Container({onGraduation}: any){

    function timesUp(){
        onGraduation();
    }

    return(
        <div className="__container flex flex-col justify-center items-center h-full w-full mx-auto py-2">
            <h1 className="text-4xl font-osw">Days until Naomi finishes residency:</h1>
            <Timer onTimeout={timesUp}/>
        </div>
    )
}