import express from 'express';
const PORT = 3000; 

const app = express();

app.get('/', (req,res) => {
    res.send("Get Hello world hello");
})

app.listen(PORT, () => {
    console.log("Server Listening in PORT", PORT);
});