

export default function createPlayers(tbody) {

    return ({ players }) => {
        tbody.innerHTML = '';

        for (const player of players) {
            const item = Player({ player });
            tbody.append(item);
        }
    };
}

function Player({ player }) {
    const tr = document.createElement('tr');
    tr.classList.add('player');

    const name = document.createElement('td');
    const h2 = document.createElement('h2');
    h2.textContent = player.name;
    name.append(h2);

    const team = document.createElement('td');
    team.textContent = player.team.name;

    // const created = document.createElement('td');
    // created.textContent = new Date(player.created).toLocaleDateString();

    tr.append(name, team);

    return tr;
}