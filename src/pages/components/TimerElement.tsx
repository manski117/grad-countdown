import React from "react";

//set the type of our props so the parent component won't compile error.
interface Props {
    time: number;
    timeType: string;
}


export default function TimerElement({time, timeType}: Props){

    let num: string = (time < 10) ? '0' + `${time}` : `${time}`;

    return(
        <div className="__counter-square flex-col w-100 sm:w-50 h-50 text-center justify-between border-solid border-black border">
            <h2 className="__num-display h-100 sm:h-50 font-calc text-6xl sm:text-s border-solid border-black border bg-black text-red-600">{num}</h2>
            <h3 className="__timeType font-orb">{timeType}</h3>
        </div>
    )
}
