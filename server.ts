import express from 'express';
const PORT = 3000; 

const app = express();

app.get('/', (req,res) => {
    res.send("Get Hello world hot reloading hell");
})

app.listen(PORT, () => {
    console.log("Server Listening in PORT", PORT);
});