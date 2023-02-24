import React from "react";

//set the type of our props so the parent component won't compile error.
interface Props {
    time: number;
    timeType: string;
}


export default function TimerElement({time, timeType}: Props){

    let num: string = (time < 10) ? '0' + `${time}` : `${time}`;

    return(
        <div className="__counter-square flex-col w-190  text-center justify-between">
            <h2 className="__num-display h-150  font-calc text-8xl border-solid border-black border bg-black text-red-600">{num}</h2>
            <h3 className="__timeType font-orb text-red-800">{timeType}</h3>
        </div>
    )
}
