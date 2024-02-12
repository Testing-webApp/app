import express from 'express'
import cors from 'cors';
import dotenv from 'dotenv'
dotenv.config()
const port = process.env.PORT || 3002
const app = express()



app.use(cors());
app.post('/', (req, res) =>{
    res.send("HELLO")
})

app.listen(port, () =>{
console.log('Server is listening on port '+ `${port}` +'...')
});