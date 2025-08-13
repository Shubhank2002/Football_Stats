const express=require('express')
const { GetMatchData, CreateMatchData } = require('../Controllers/MatchController')
const MatchRouter=express.Router()


MatchRouter.post('/get',GetMatchData)
MatchRouter.post('/create',CreateMatchData)

module.exports=MatchRouter