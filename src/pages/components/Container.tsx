import React from "react";
import Timer from "./Timer";

export default function Container(){

    return(
        <div className="flex flex-col justify-center items-center h-full w-full mx-auto py-2">
            <h1>Days until Naomi graduates residency:</h1>
            <Timer />
        </div>
    )
}