const express = require( 'express')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { insert_Spectator, get_Spectator, insert_Landlord, get_Landlord, get_Performer } = require('../model/database.js');



const router = express.Router()




router.post('/Spectator', async(req, res)=>{
    console.log(req.body)
    res.send('okay')
    
    console.log('dsafdasfsdaf')
    const {Email, Password} = req.body
    const data = await get_Spectator(Email);

    if(data.length ===0){
        res.send('No email found')
        return;
    }

    const result = await bcrypt.compare(Password, data[0].Password)
    if (result){
        const token = await jwt.sign({id: data[0].ID, email: Email}, process.env.ACCESS_TOKEN_SECRET);
        res.send({status: 'success', token: token});
        
    }
    else{
        res.send("Credentials are incorrect");
    }
    
    
});


router.post('/Landlord', async(req, res)=>{
    
    console.log('asjfn')
    const {Email, Password} = req.body
    
    const data = await get_Landlord(Email);
    if(data.length ===0){
       
        res.send('No email found')
        return;
    }
    console.log(data.length);
    const result = await bcrypt.compare(Password, data[0].Password)
    console.log(result)
    if (result){
 
        const token = await jwt.sign({id: data[0].ID, email: Email}, process.env.ACCESS_TOKEN_SECRET);
        //res.cookie('token', token, { httpOnly: true, sameSite:'none', secure: false}).json();
        res.send({status: "success", token: token})
        
    }
    else{
        res.send("Credentials are incorrect");
    }
    

});



router.post('/Performer', async(req, res)=>{
    
    console.log(req.body)
    const {Email, Password} = req.body
    const data = await get_Performer(Email);

    if(data.length ===0){
        res.send('No email found')
        return;
    }

    const result = await bcrypt.compare(Password, data[0].Password)
    
    if (result){
        const token = await jwt.sign({id: data[0].ID, email: Email}, process.env.ACCESS_TOKEN_SECRET);
      
        //res.cookie('token', token, { httpOnly: true, sameSite:'none', secure: false}).json();
        console.log('Per ', token)
        res.send({status: "success", token: token})
    }
    else{
        res.send("Credentials are incorrect");
    }
    
    
});

module.exports = router ;
