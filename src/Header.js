import './Header.css';
import ACMElogo from './ACMESportsWhite.png';
import meatballMenu from './meatballWhite.png';

/*  NOT functional, for context reasons only*/

const Header = () => {
    
    return (
        <div title="Only for context, not functional">
            <div className="header">
                <div className="left-content"> {/* Divides header into 2 parts for spacing */}
                    <img className="logo" src={ACMElogo}></img>
                    <h1 className="leagues">NFL</h1>
                    <h1 className="leagues">NHL</h1>
                    <h1 className="leagues">NBA</h1>
                    <h1 className="leagues">MLB</h1>
                    <h1 className="leagues">Soccer</h1>
                    <img className="menu-icon" src={meatballMenu}></img> {/* If functional would open a dropdown menu for the other sports */}
                </div>

                <input className="search" placeholder="Search Sports, Teams, Players, etc.." readOnly/> 
            </div>

            <div className="square"></div> {/* Creates triangle piece for dropdown menu */}

            {/* Done simply for context reasons, I would have otherwise made this functional but this is just for show */}
            <div className="drop-menu">
                <h2 className="options">Home</h2>
                <h2 className="options">Scores</h2>
                <h2 className="options">Schedule</h2>
                <h2 className="options">Standings</h2>
                <h2 className="options">Stats</h2>
                <h2 className="options-selected">Teams</h2>
                <h2 className="options">Fantasy Football</h2>
            </div>
        </div>
    )
};

export default Header;