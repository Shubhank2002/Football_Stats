const MatchModel = require("../Models/UserModel");

const GetMatchData = async (req, res) => {
  const { matchId } = req.params;
  try {
    const MatchStats = await MatchModel.findOne({ matchId: matchId });
    res.status(200).json(MatchStats);
  } catch (error) {
    res.status(404).json({ message: "Stats not found" });
  }
};

const CreateMatchData = async (req, res) => {
  const new_data = req.body;
  try {
    const postdata = await MatchModel.create(new_data);
    res.status(201).json(postdata);
  } catch (error) {
    res.status(400).json({message:'Data not created'})
  }
};

module.exports = { GetMatchData,CreateMatchData };
