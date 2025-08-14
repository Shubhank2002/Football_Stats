const express=require('express')
const { GetMatchData, CreateMatchData } = require('../Controllers/MatchController')
const MatchRouter=express.Router()


MatchRouter.get('/get/:matchId',GetMatchData)
MatchRouter.post('/create',CreateMatchData)

module.exports=MatchRouter