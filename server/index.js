const express = require('express');
const readline = require('readline');
const db = require('./db');
require('dotenv').config();
const app=express()
app.use(express.json())
// app.get("/api/tickets", (req, res)=>{
//     console.log("We receive the request that is"+req)
//     res.send("Handle Ticket")
// })
// Function to generate a random ticket number
function generateTicketNumber() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let ticketNumber = '';
    for (let i = 0; i < 10; i++) { // Adjust the length as needed
        const randomIndex = Math.floor(Math.random() * characters.length);
        ticketNumber += characters[randomIndex];
    }
    return ticketNumber;
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const cors = require('cors');
// client web address certificated by cors
const corsOptions = {
    origin: [ 'http://localhost:3000'],
    credentials: true,
    optionSuccessStatus: 200
}


app.use(cors(corsOptions));

app.get("/api/tickets", async (req, res)=>{
    try {
        const [rows] = await db.execute('SELECT * FROM tickets');
        console.log(rows)
        res.json(rows);
    } catch (error) {
        console.error('Error fetching data from the database:', error);
        res.status(500).send('Internal Server Error');
    }
})

app.post("/api/solve", async (req, res)=>{
    const { month, day, year, description, address } = req.body;
    console.log("Received data:", req.body);
    console.log("Please enter the solution:");
    // Generate a random ticket number
    const ticketNumber = generateTicketNumber();

    try {
        // Insert data into MySQL database
        const [result] = await db.execute(
            'INSERT INTO tickets (ticket_id, month, day, year, description, address) VALUES (?, ?, ?, ?, ?, ?)',
            [ticketNumber, month, day, year, description, address]
        );
        console.log("Insert successfully")
        rl.question('Solution: ', (answer) => {
            // Send back the solution as the response
            res.json({ solution: answer });
        });
    } catch (error) {
        console.error('Error storing data in the database:', error);
        res.status(500).send('Internal Server Error');
    }
    // Prompt the server-side user for input
    
})


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));