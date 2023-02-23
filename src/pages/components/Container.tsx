import React from "react";
import Timer from "./Timer";

export default function Container(){

    return(
        <div className="__container flex flex-col justify-center items-center h-full w-full mx-auto py-2">
            <h1 className="text-4xl font-osw">Days until Naomi graduates residency:</h1>
            <Timer />
        </div>
    )
}