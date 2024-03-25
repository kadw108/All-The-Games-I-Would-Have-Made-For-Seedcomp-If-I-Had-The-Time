/*
Syntax:

<a class="panelOpener" identifier="test" >Click to make it show up!</a>
<div class="panelFull absoluteAlign hidden" identifier="test">How wonderful. I love my life.</div>

*/

const selectedSeeds = new Set([]);
let matchingGameId = null;

function showSeed(seed) {
    const seedDiv = document.createElement("div");
    seedDiv.classList.add("seedDiv");
    seedDiv.id = seed.id + "-display";

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.id = seed.id;
    checkbox.name = seed.id;
    checkbox.value = seed.id;
    checkbox.addEventListener("click", uponCheckBox);
    seedDiv.append(checkbox);

    const seedName = document.createElement("label");
    seedName.for = seed.id;
    seedName.innerText = seed.name;
    seedDiv.append(seedName);

    const examineButton = document.createElement("button");
    examineButton.type = "button";
    examineButton.innerText = "Examine";
    examineButton.classList.add("panelOpener");
    examineButton.setAttribute("identifier", seed.id);
    seedDiv.append(examineButton);

    const menuDiv = document.querySelector(".menuPanel[identifier='" + seed.id + "']");
    menuDiv.innerHTML = story.renderSnippet(seed.id);

    return seedDiv;
}

function uponCheckBox(event) {
    const seedId = event.target.id;
    if (event.target.checked) {
        selectedSeeds.add(seedId);
    }
    else {
        selectedSeeds.delete(seedId);
    }

    const validSeeds = new Set(selectedSeeds);

    // iterate through all games to get valid seeds
    // also check for matching game
    let canAlchemize = false;
    mainScript.GAMES.forEach((game) => {
        // adopted from https://stackoverflow.com/a/48211214
        // set.isSubsetOf not fully supported in JS
        // selectedSeeds must be subset of game.seeds
        const isSubset = [...selectedSeeds].every(val => game.seeds.has(val));

        if (isSubset) {
            game.seeds.forEach((seed) => {
                validSeeds.add(seed);
            })
        }

        // from https://stackoverflow.com/a/31129384 
        const eqSet = (xs, ys) =>
            xs.size === ys.size &&
            [...xs].every((x) => ys.has(x));
        if (eqSet(selectedSeeds, game.seeds)) {
            canAlchemize = true;
            matchingGameId = game.id;
        }
    });

    const alchemize = document.getElementById("alchemize");
    if (canAlchemize) {
        alchemize.classList.remove("hidden");
    }
    else {
        alchemize.classList.add("hidden");
    }

    // show only valid seeds
    mainScript.SEEDS.forEach((seed) => {
        const seedDisplay = document.getElementById(seed.id + "-display");

        if (!validSeeds.has(seed.id)) {
            seedDisplay.classList.add("hidden");
        }
        else {
            seedDisplay.classList.remove("hidden");
        }
    });
}

function uponAlchemize(event) {
    if (matchingGameId === null) {
        console.error("You can't alchemize anything. This shouldn't actually be happening. Huh.");
    }
    story.showSnippet(matchingGameId);
}

$(function () {
    const seedContainer = document.getElementById("seedContainer");
    mainScript.SEEDS.forEach((seed) => {
        seedContainer.append(showSeed(seed));
    });

    mainScript.addMenuPanels();

    document.getElementById("alchemize").addEventListener("click", uponAlchemize);
});
