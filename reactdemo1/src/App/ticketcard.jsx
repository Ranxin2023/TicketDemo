import { useState } from "react";
import "./ticketcard.css"
const TicketCard=()=>{
    const now=new Date()
    const currentMonth=now.toLocaleString('default', { month: 'long' });
    const currentDay=now.getDate().toString()
    const currentYear=now.getFullYear().toString()
    console.log("Current date is: Month:"+currentMonth+"Day"+currentDay+"Year"+currentYear)
    const [month, setMonth]=useState(currentMonth)
    const [day, setDay]=useState(currentDay)
    const [year, setYear]=useState()
    const [description, setDescription]=useState("This is a special gift card for you ")
    const handleDescription=(event)=>{
        setDescription(event.target.value)
    }
    return (
        <div className="gift_card">
            <div>Issue/Ticket</div>
            <div>Date: </div>
            <label htmlFor="">Month:</label>
            <select id="select_month" value={month}>
                <option value="January">January</option>
                <option value="Feburary">Feburary</option>
                <option value="March">March</option>
                <option value="April">April</option>
                <option value="May">May</option>
                <option value="June">June</option>
                <option value="July">July</option>
                <option value="August">August</option>
                <option value="September">September</option>
                <option value="October">October</option>
                <option value="November">November</option>
                <option value="December">December</option>
            </select>

            <label>Day:</label>
            <select name="" id="" value={day}>
                {Array.from({length:31}, (_, i)=>(
                    <option value={i+1}>{i+1}</option>
                ))}
            </select>
            <div>Description</div>
             <div className="ticket-card-description">
                <input
                onChange={handleDescription}
                placeholder="Enter a description"></input>
                {/* <div className="description_text">{description}</div> */}
             </div>
             <div>Address</div>
             <div className="ticket-card-address">

                <input
                placeholder="Enter an address"></input>
             </div>
             <button>Submit</button>
        </div>
    )
}
export default TicketCard;