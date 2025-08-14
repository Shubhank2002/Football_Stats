import axios from "axios";
import React, { useEffect, useState } from "react";

const Home = () => {
  const [stats, setstats] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.post("https://football-stats-5iin.onrender.com/match/get", {
          matchId: 1,
        });
        setstats(res.data);
      } catch (error) {}
    };
    fetchData();
  }, []);
  if (!stats) {
    return <div>loading...</div>;
  }
  return (
    <div className="flex flex-col gap-25 p-14 items-center">
      <h1 className="text-4xl font-bold">Football Stats</h1>
      <div className="flex flex-col gap-5 border-1 rounded-lg p-5 ">
        <div className="grid grid-cols-3 gap-5 border-1 rounded-lg divide-x  divide-y">
          <h1 className="text-center">Date</h1>
          <h1 className="col-span-2 text-center">{stats.date}</h1>
        </div>
        <div className="grid grid-cols-3 gap-5 border-1 rounded-lg divide-x divide-y">
          <h1 className="text-center"></h1>
          <h1 className="text-center">Team A</h1>
          <h1 className="text-center">Team B</h1>
        </div>
        <div className="grid grid-cols-3 gap-5 border-1 rounded-lg divide-x divide-y">
          <h1 className="text-center">Goals</h1>
          <h1 className="text-center">{stats.stats.teamA.goals}</h1>
          <h1 className="text-center">{stats.stats.teamB.goals}</h1>
        </div>
        <div className="grid grid-cols-3 gap-5 border-1 rounded-lg divide-x divide-y">
          <h1 className="text-center">Possession</h1>
          <h1 className="text-center">{stats.stats.teamA.possession}</h1>
          <h1 className="text-center">{stats.stats.teamB.possession}</h1>
        </div>
        <div className="grid grid-cols-3 gap-5 border-1 rounded-lg divide-x divide-y">
          <h1 className="text-center">Total passes</h1>
          <h1 className="text-center">{stats.stats.teamA.passes}</h1>
          <h1 className="text-center">{stats.stats.teamB.passes}</h1>
        </div>
        <div className="grid grid-cols-3 gap-5 border-1 rounded-lg divide-x divide-y">
          <h1 className="text-center">Shots</h1>
          <h1 className="text-center">{stats.stats.teamA.shots}</h1>
          <h1 className="text-center">{stats.stats.teamB.shots}</h1>
        </div>
        <div className="grid grid-cols-3 gap-5 border-1 rounded-lg divide-x divide-y">
          <h1 className="text-center">Shots on Target</h1>
          <h1 className="text-center">{stats.stats.teamA.shotsOnTarget}</h1>
          <h1 className="text-center">{stats.stats.teamB.shotsOnTarget}</h1>
        </div>
        <div className="grid grid-cols-3 gap-5 border-1 rounded-lg divide-x divide-y">
          <h1 className="text-center">Corners</h1>
          <h1 className="text-center">{stats.stats.teamA.corners}</h1>
          <h1 className="text-center">{stats.stats.teamB.corners}</h1>
        </div>
      </div>
    </div>
  );
};

export default Home;
