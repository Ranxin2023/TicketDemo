import { useState } from "react";
import axios from "axios";
import "./tickethistory.css"
const TicketHistory=()=>{
    const [tickets, setTickets]=useState([])
    const fetchTickets= async()=>{
        try{
            const response=await fetch('http://localhost:5000/api/tickets', {headers: {
                'Content-Type': 'application/json',
            },
            credentials: 'include'})
            if(response.ok){
                const data=await response.json()
                setTickets(data)
            }
            else {
                console.error('Error fetching tickets for !response.ok:', response.statusText);
            }
        }
        catch (error) {
            console.error('Error fetching tickets:', error);
        }
    }
    return(
        <div className="ticket-history">
            <button onClick={fetchTickets}>Fetch All Tickets</button>
            {tickets.length > 0 && (
                <ul>
                    {tickets.map(ticket => (
                        <li key={ticket.ticket_id}>
                            {`Ticket ID: ${ticket.ticket_id}, Description: ${ticket.description}, Date: ${ticket.month}/${ticket.day}/${ticket.year}, Address: ${ticket.address}`}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}
export default TicketHistory;