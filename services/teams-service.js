import { client, checkResponse } from './client.js';

export async function getTeamsWithPlayers() {
    const response = await client
        .from('teams')
        .select(`
            id,
            name,
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
            team:teams (
                id,
                name
            )
        `);
    return checkResponse(response);
}

export async function addPlayer(playerName, teamId) {
    const response = await client
        .from('players')
        .insert({
            name: playerName,
            team_id: teamId
        })
        .single();

    const data = checkResponse(response);

    if (data) {
        data.teamId = data.team_id;
    }

    return data;
}

export async function removePlayer(playerId) {
    const response = await client
        .from('players')
        .delete()
        .eq('id', playerId)
        .single();

    return checkResponse(response);
}