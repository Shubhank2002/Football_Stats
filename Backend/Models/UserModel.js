const mongoose = require("mongoose");

const StatsSchema = new mongoose.Schema({
  goals: Number,
  possession: Number,
  passes: Number,
  shots: Number,
  shotsOnTarget: Number,
  corners: Number,
});

const MatchSchema = new mongoose.Schema({
  matchId: {
    type: Number,
  },
  date: {
    type: String,
  },
  stats: {
    teamA:[StatsSchema],
    teamB:[StatsSchema],
  },
});

const MatchModel=mongoose.model('match',MatchSchema)

module.exports=MatchModel