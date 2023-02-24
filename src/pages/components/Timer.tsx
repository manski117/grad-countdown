import { proseWrap } from "prettier.config.cjs";
import React, { useEffect } from "react";
import TimerElement from "./TimerElement";


//types
interface time {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  };

export default function Timer({onTimeout}: any){
    const [timeRemaining, setTimeRemaining] = React.useState<time>({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      });

    // Set the date we're counting down to
    const countDownDate: number = new Date('June 31, 2024 17:00:00').getTime();

    useEffect(() => {
    // Update the count down every 1 second
    let interval: any = setInterval(function () {
        // Get today's date and time
        let now: number = new Date().getTime();

        // Find the time delta between now and the count down date
        let deltaT: number = countDownDate - now;

        // Time calculations for days, hours, minutes and seconds
        let days: number = Math.floor(deltaT / (1000 * 60 * 60 * 24));
        let hours: number = Math.floor((deltaT % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes: number = Math.floor((deltaT % (1000 * 60 * 60)) / (1000 * 60));
        let seconds: number = Math.floor((deltaT % (1000 * 60)) / 1000);

        // Output the result in an element with id="demo"
        let msg: string = `${days} + ${hours} + ${minutes} + ${seconds}`;

        updateCountdownState(days, hours, minutes, seconds);

        // If the count down is over, run this code instead.
        if (deltaT < 0) {
            clearInterval(interval);
            //TODO: make a fun effect happen here!
            onTimeout();
            console.log('timeout code successfully ran');
        }
    }, 1000);
    },[]);

    function updateCountdownState(days: number, hours: number, minutes: number, seconds: number){
        setTimeRemaining({
            days: days,
            hours: hours,
            minutes: minutes,
            seconds: seconds
        }
            
        );
    };
    

    return(
        
        <div className="__timer flex gap-10 justify-center items-center">
            <TimerElement time={timeRemaining.days} timeType='DAYS' />
            <TimerElement time={timeRemaining.hours} timeType='HOURS' />
            <TimerElement time={timeRemaining.minutes} timeType='MINUTES' />
            <TimerElement time={timeRemaining.seconds} timeType='SECONDS' />
            

        </div>
    )
}