import './TeamCard.css';
import footballLogo from './football.png'

const TeamCard = ({ teamData }) => {
    return (
        <div className="card">
            {/* Would have liked to call this from the API as well. However, there were no images in the JSON file so, this is a placeholder for UI purposes */}
            <img className="team-logo" src={footballLogo} title="football placeholder for what would be a team logo"></img>

            <div className="card-body">
                <h1 className="card-title">{teamData.name} {teamData.nickname}</h1> {/* how data from JSON is displayed */}
                <div className="card-info">
                    <p>Conference: {teamData.conference}</p> {/* how data from JSON is displayed */}
                    <p>Division: {teamData.division}</p> {/* how data from JSON is displayed */}
                </div>
            </div>
        </div>
    )
};

export default TeamCard;