import { getUser, signOut } from '../services/auth-service.js';
import { addPlayer, getTeams, getPlayers } from '../services/teams-service.js';
import { protectPage, findById } from '../utils.js';
import createUser from '../components/User.js';


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


const User = createUser(
    document.querySelector('#user'), { handleSignOut }
);


function display() {
    User({ user });
}

handlePageLoad();