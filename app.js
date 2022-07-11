import { getUser, signOut } from './services/auth-service.js';
import { getTeamsWithPlayers } from './services/teams-service.js';
import { protectPage } from './utils.js';
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
    
}

// Components 
const User = createUser(
    document.querySelector('#user'),
    { handleSignOut }
);

const Teams = createTeams(document.querySelector('#teams'), { handleAddPlayer, handleRemovePlayer },);

function display() {
    User({ user });
    Teams({ teams });
}

handlePageLoad();
