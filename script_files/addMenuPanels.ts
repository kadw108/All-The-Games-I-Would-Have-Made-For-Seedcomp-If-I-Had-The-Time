/*
Syntax:

<a class="panelOpener" identifier="test" >Click to make it show up!</a>
<div class="panelFull absoluteAlign hidden" identifier="test">How wonderful. I love my life.</div>

*/

export function openMenuPanel(event: MouseEvent) {
    if (event.target === null) {
        console.error("openMenuPanel target is null!");
        return;
    }
    const identifier = (event.target as HTMLElement).getAttribute("identifier");
    const replacer = document.querySelector(".panelFull[identifier='" + identifier + "']");

    if (replacer === null) {
        console.error("Replacelink without replacer!");
        console.error(event.target);
        return;
    }

    replacer.classList.remove("hidden");

    const bg = document.getElementById("screenCover");
    if (bg === null) {
        return;
    }
    bg.style.zIndex = "3";
    bg.style.backgroundColor = "rgba(0, 0, 0, 0.4)";
}

function editMenuPanel(menuPanel: Element) {
    const closeButton = document.createElement("button");
    closeButton.innerText = "X";
    closeButton.type = "button";
    closeButton.classList.add("closeButton");
    closeButton.addEventListener("click", () => {
        menuPanel.classList.add("hidden");

        const bg = document.getElementById("screenCover");
        if (bg === null) {
            return;
        }
        bg.style.zIndex = "-1";
    bg.style.backgroundColor = "#eee";
    });

    menuPanel.prepend(closeButton);
}

export function addMenuPanels() {
    Array.from(document.getElementsByClassName("panelOpener")).forEach(e => {
        (e as HTMLElement).addEventListener("click", openMenuPanel);
    });

    Array.from(document.getElementsByClassName("panelFull")).forEach(e => {
        editMenuPanel(e);
    });
}