import { useState } from "react";
import axios from "axios";
import "./ticketcard.css"
const TicketCard=()=>{
    const now=new Date()
    const currentMonth=now.toLocaleString('default', { month: 'long' });
    const currentDay=now.getDate().toString()
    const currentYear=now.getFullYear().toString()
    // console.log("Current date is: Month:"+currentMonth+"Day"+currentDay+"Year"+currentYear)
    const [month, setMonth]=useState(currentMonth)
    const [day, setDay]=useState(currentDay)
    const [year, setYear]=useState(currentYear)
    const [description, setDescription]=useState("")
    const [address, setAddress]=useState("")
    const [response, setResponse] = useState("");
    const handleDay=(event)=>{
        setDay(event.target.value)
    }
    const handleMonth=(event)=>{
        setMonth(event.target.value)
    }
    const handleYear=(event)=>{
        setYear(event.target.value)
    }
    const handleDescription=(event)=>{
        setDescription(event.target.value)
    }
    const handleAddress=(event)=>{
        setAddress(event.target.value)
    }
    const handleSubmit=async(event)=>{
        event.preventDefault();
        try {
            // Send a POST request to the server with the input data
            const result = await axios.post('http://localhost:5000/api/solve', { month, day, year, description, address});
            // Set the response state to the server's response
            setResponse(result.data.solution);
        } catch (error) {
            console.error('Error sending data to server:', error);
        }
    }
    return (
        <div className="ticket-card">
            <form onSubmit={handleSubmit}>
                <div>Issue/Ticket</div>
                <div>Date: </div>
                <label htmlFor="">Month:</label>
                <select id="month-select" value={month} onChange={handleMonth}>
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

                <label htmlFor="Day">Day:</label>
                <select name="" id="" value={day} onChange={handleDay}>
                    {Array.from({length:31}, (_, i)=>(
                        <option value={i+1}>{i+1}</option>
                    ))}
                </select>
                <label htmlFor="Year">Year: </label>
                <select id="year-select" value={year} onClick={handleYear}>
                {Array.from({ length: 5 }, (_, i) => (
                    <option key={year-1 + i} value={year-1 + i}>{year-1 + i}</option>
                ))}
                </select>
                <div className="ticket-card-description">
                    <div>Description: </div>
                    <textarea
                    onChange={handleDescription}
                    placeholder="Enter a description"></textarea>
                    {/* <div className="description_text">{description}</div> */}
                </div>
                <div>Address</div>
                <div className="ticket-card-address">
                    <textarea
                    onChange={handleAddress}
                    placeholder="Enter an address"></textarea>
                </div>
                <button>Submit</button>
                {response && (
                    <div className="response">
                        <h3>Response: {response}</h3>
                    </div>
                )}
            </form>
        </div>
    )
}
export default TicketCard;