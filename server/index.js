const express = require('express')
const readline = require('readline');
require('dotenv').config();
const app=express()
app.use(express.json())
// app.get("/api/tickets", (req, res)=>{
//     console.log("We receive the request that is"+req)
//     res.send("Handle Ticket")
// })

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
app.post("/api/solve", (req, res)=>{
    currentReq = req;
    currentRes = res;
    console.log("Received data:", req.body);
    console.log("Please enter the solution:");

    // Prompt the server-side user for input
    rl.question('Solution: ', (answer) => {
        // Send back the solution as the response
        res.json({ solution: answer });
    });
})


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));