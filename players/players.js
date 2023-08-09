import { getUser, signOut } from '../services/auth-service.js';
import { addPlayer, getTeams, getPlayers } from '../services/teams-service.js';
import { protectPage, findById } from '../utils.js';
import createUser from '../components/User.js';
import createPlayers from '../components/Players.js';
import createAddPlayer from '../components/AddPlayer.js';


let user = null;
let players = [];
let teams = [];

async function handlePageLoad() {
    user = getUser();
    protectPage(user);

    players = await getPlayers();
    teams = await getTeams();

    display();
}

async function handleSignOut() {
    signOut();
}

async function handleAddPlayer(playerName, teamId) {
    const player = await addPlayer(playerName, teamId);
    const team = findById(teams, player.teamId);
    player.team = team;

    players.unshift(player);

    display();
}


const User = createUser(
    document.querySelector('#user'), { handleSignOut }
);

const AddPlayer = createAddPlayer(document.querySelector('#add-player'), { handleAddPlayer });

const Players = createPlayers(document.querySelector('#players'));


function display() {
    User({ user });
    Players({ players });
    AddPlayer({ teams });
}

handlePageLoad();