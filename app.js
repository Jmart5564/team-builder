import { getUser, signOut } from './services/auth-service.js';
import { addPlayer, getTeamsWithPlayers, removePlayer } from './services/teams-service.js';
import { protectPage, findById } from './utils.js';
import createUser from './components/User.js';
import createTeams from './components/Teams.js';

// State
let user = null;
let teams = [];

// Action Handlers
async function handlePageLoad() {
    user = getUser();
    protectPage(user);

    teams = await getTeamsWithPlayers();

    display();
}

async function handleSignOut() {
    signOut();
}

async function handleAddPlayer(playerName, teamId) {
    const player = await addPlayer(playerName, teamId);
    teamId.players.push(player);

    display();
}

async function handleRemovePlayer(player) {
    const message = `Remove Player?`;
    if (!confirm(message)) return;

    await removePlayer(player.id);

    const team = findById(teams, player.teamId);

    const index = team.players.indexOf(player);

    if (index !== -1) {
        team.players.splice(index, 1);
    }

    display();
}

// Components 
const User = createUser(
    document.querySelector('#user'),
    { handleSignOut }
);

const Teams = createTeams(document.querySelector('#teams'), { handleAddPlayer, handleRemovePlayer });

function display() {
    User({ user });
    Teams({ teams });
}

handlePageLoad();
