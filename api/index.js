import express from 'express'
import cors from 'cors';
import dotenv from 'dotenv'
import path from 'path'
dotenv.config()
const port = process.env.PORT || 3002
const app = express()



app.use(cors());
app.post('/', (req, res) =>{
    res.send("HELLO")
})

app.use(express.static("../client/build"))
app.get('*', (req, res)=>{
    res.sendFile(path.resolve(__dirname, '../', 'client', 'build'))
})

app.listen(port, () =>{
console.log('Server is listening on port '+ `${port}` +'...')
});