import { client, checkResponse } from './client.js';

export async function getTeamsWithPlayers() {
    const response = await client
        .from('teams')
        .select(`
            id,
            name
            players:players(
                id,
                teamId:team_id,
                name
            )
        `);

    return checkResponse(response);
}

export async function getTeams() {
    const response = await client
        .from('teams')
        .select(`
            id,
            name
        `);

    return checkResponse(response);
}

export async function getPlayers() {
    const response = await client 
        .from('players')
        .select(`
            id,
            name,
            teams:teams (
                id,
                name
            )
        `);
    return checkResponse(response);
}