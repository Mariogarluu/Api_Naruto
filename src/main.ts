const { fromEvent } = rxjs;
const { map, debounceTime, distinctUntilChanged } = rxjs.operators;

let allCharacters = [];
let allVillages = [];

async function initApp() {
    const appElement = document.getElementById('app');
    if (!appElement) return;

    const menu = document.createElement('div');
    menu.className = 'menu';

    const btnCharacters = document.createElement('button');
    btnCharacters.textContent = 'Characters';
    const btnVillages = document.createElement('button');
    btnVillages.textContent = 'Villages';

    menu.appendChild(btnCharacters);
    menu.appendChild(btnVillages);
    appElement.innerHTML = '';
    appElement.appendChild(menu);

    const content = document.createElement('div');
    content.id = 'content';
    appElement.appendChild(content);

    btnCharacters.addEventListener('click', () => showCharacters(content));
    btnVillages.addEventListener('click', () => showVillages(content));

    await loadData();
    showCharacters(content);
}

async function loadData() {
    const [charactersRes, villagesRes] = await Promise.all([
        fetch('http://localhost:3000/characters'),
        fetch('http://localhost:3000/villages')
    ]);
    allCharacters = await charactersRes.json();
    allVillages = await villagesRes.json();
}

async function showCharacters(container) {
    container.innerHTML = '';
    const filterContainer = document.createElement('div');
    filterContainer.className = 'filter-container';

    const input = document.createElement('input');
    input.type = 'text';
    input.placeholder = 'Filter by name...';
    input.className = 'filter-input';
    filterContainer.appendChild(input);

    const gridContainer = document.createElement('div');
    gridContainer.className = 'grid-container';
    container.appendChild(filterContainer);
    container.appendChild(gridContainer);

    const enriched = await Promise.all(
        allCharacters.map(async c => {
            const res = await fetch(`http://localhost:3000/villages/${c.villageId}`);
            const v = await res.json();
            return { ...c, villageName: v.name };
        })
    );

    enriched.forEach(character => {
        const card = renderCharacter(character);
        gridContainer.appendChild(card);
    });

    fromEvent(input, 'input')
        .pipe(
            map(e => e.target.value.toLowerCase()),
            debounceTime(300),
            distinctUntilChanged()
        )
        .subscribe(text => {
            gridContainer.innerHTML = '';
            const filtered = enriched.filter(c =>
                c.name.toLowerCase().includes(text)
            );
            filtered.forEach(character => {
                const card = renderCharacter(character);
                gridContainer.appendChild(card);
            });
        });
}

function showVillages(container) {
    container.innerHTML = '';
    const gridContainer = document.createElement('div');
    gridContainer.className = 'grid-container';
    container.appendChild(gridContainer);
    allVillages.forEach(village => {
        const card = renderVillage(village);
        gridContainer.appendChild(card);
    });
}

function renderCharacter(character) {
    const card = document.createElement('div');
    card.className = 'card';

    const img = document.createElement('img');
    img.src = character.image;
    img.alt = character.name;

    const name = document.createElement('h3');
    name.textContent = character.name;

    const rank = document.createElement('p');
    rank.textContent = `Rank: ${character.rank}`;

    const chakra = document.createElement('p');
    chakra.textContent = `Chakra Affinity: ${character.chakraAffinity}`;

    const techniques = document.createElement('p');
    techniques.textContent = `Techniques: ${character.techniques.join(', ')}`;

    const village = document.createElement('p');
    village.textContent = `Village: ${character.villageName}`;

    card.appendChild(img);
    card.appendChild(name);
    card.appendChild(rank);
    card.appendChild(chakra);
    card.appendChild(techniques);
    card.appendChild(village);

    return card;
}

function renderVillage(village) {
    const card = document.createElement('div');
    card.className = 'card';

    const name = document.createElement('h3');
    name.textContent = village.name;

    const country = document.createElement('p');
    country.textContent = `Country: ${village.country}`;

    const leader = document.createElement('p');
    leader.textContent = `Leader: ${village.leader}`;

    const symbol = document.createElement('p');
    symbol.textContent = `Symbol: ${village.symbol}`;

    card.appendChild(name);
    card.appendChild(country);
    card.appendChild(leader);
    card.appendChild(symbol);

    return card;
}

initApp();
