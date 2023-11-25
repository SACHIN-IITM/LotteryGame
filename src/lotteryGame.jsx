import { useState } from "react";
import { genTicket, sum } from "./helper";
import Ticket from "./Ticket";
import Button from "./Button";


export default function LotteryGame({n=3, winCondition}) {


    let [ticket , setTicket] = useState(genTicket(n));
    let isWinning = winCondition(ticket);


    let getTicket = () => {
        setTicket(genTicket(n));
      };

    return (
        <div>
            
            <h2><b>Lottery Game!</b></h2>
            <Ticket ticket={ticket}></Ticket>
            <h3> {isWinning && "Congratulations, you won!"} </h3>
            <Button action={getTicket} ></Button>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <h3><b>&amp;Developed By Sachin </b></h3>
        </div>
    );
}
