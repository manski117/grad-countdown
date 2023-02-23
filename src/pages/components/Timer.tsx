import React from "react";

//types
interface time {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  };

export default function Timer(){
    const [timeRemaining, setTimeRemaining] = React.useState<time>({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      });

    // Set the date we're counting down to
    const countDownDate: number = new Date('Feb 23, 2023 20:12:25').getTime();

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
        }
    }, 1000);

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
        <div className="flex justify-center items-center">
            <h2 className="font-calc">{timeRemaining.days}</h2>
            <h2 className="font-calc">{timeRemaining.hours}</h2>
            <h2 className="font-calc">{timeRemaining.minutes}</h2>
            <h2 className="font-calc">{timeRemaining.seconds}</h2>
            
        </div>
    )
}