import { useState, useEffect } from "react";
import "./App.css";
import TeamCard from "./TeamCard";
import NFLlogo from "./NFLLogo.png";

function App() {
  const [allTeams, setAllTeams] = useState([]);
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    (async () => {
      let teamData;
      try {
        const response = await fetch('http://delivery.chalk247.com/team_list/NFL.JSON?api_key=74db8efa2a6db279393b433d97c2bc843f8e32b0'); //calls API
        teamData = (await response.json()).results; //gives teamData the values from the JSON
      } 
      catch (error) {
        console.log(error);
        teamData = []; //returns nothing incase of error
      }
      setAllTeams(teamData.data.team);
      setTeams(teamData.data.team); 
    })();
  }, []);

  const searchCards = event => {
    const value = event.target.value.toLowerCase(); //handles case sensitivity
    const searchTeams = allTeams.filter(team => (`${team.name} ${team.nickname} ${team.division} ${team.conference}`.toLowerCase().includes(value))); //gives feilds that the user is able to search through
    setTeams(searchTeams); //returns values filtered to setTeams
  }

  return (
    <div className="App">      
      <div className="NFL-teams">
        <div className="left-side">
          <img className="NFL-logo" src={NFLlogo} title="NFL Logo"></img>
          <h1>NFL Teams</h1>
        </div>
        <input className="search-box" onInput={searchCards} placeholder="Search Teams, Conference, Division, etc.."/>
      </div>

      {/* where data is called to display cards, which is passed to TeamCard where data will get formatted into the actual card */}
      <div className="cards-container"> 
        {teams.map((team, index) => (
          <TeamCard key={index} teamData={team} /> // important to remember to set the key in React for unique identification
        ))}
      </div>
    </div>
  );
}

export default App;