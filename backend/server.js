// const express = require('express');
import express from 'express';

const app = express();

//routes
app.get("/",(req,res)=>{
    res.send("Server is Ready!");
});
app.listen(5000, ()=>{
    console.log("Server started at 5000 port!");
});