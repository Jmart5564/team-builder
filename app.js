import { getUser, signOut } from './services/auth-service.js';
import { getTeamsWithPlayers } from './services/teams-service.js';
import { protectPage } from './utils.js';
import createUser from './components/User.js';

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

// Components 
const User = createUser(
    document.querySelector('#user'),
    { handleSignOut }
);

function display() {
    User({ user });

}

handlePageLoad();
