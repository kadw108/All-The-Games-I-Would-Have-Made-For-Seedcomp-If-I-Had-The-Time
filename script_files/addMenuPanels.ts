/*
Syntax:

<a class="panelOpener" identifier="test" >Click to make it show up!</a>
<div class="panelFull absoluteAlign hidden" identifier="test">How wonderful. I love my life.</div>

*/

export function openMenuPanel(event) {
    const identifier = event.target.getAttribute("identifier");
    const replacer = document.querySelector(".panelFull[identifier='" + identifier + "']");

    if (replacer === null) {
        console.error("Replacelink without replacer!");
        console.error(event.target);
        return;
    }

    replacer.classList.remove("hidden");

    const bg = document.getElementById("bg");
    if (bg === null) {
        return;
    }
    bg.style.zIndex = "3";
    bg.style.backgroundColor = "rgba(0, 0, 0, 0.4)";
}

function editMenuPanel(menuPanel) {
    const closeButton = document.createElement("button");
    closeButton.innerText = "X";
    closeButton.type = "button";
    closeButton.classList.add("closeButton");
    closeButton.addEventListener("click", () => {
        menuPanel.classList.add("hidden");

        const bg = document.getElementById("bg");
        if (bg === null) {
            return;
        }
        bg.style.zIndex = "0";
    bg.style.backgroundColor = "#eee";
    });

    menuPanel.prepend(closeButton);
}

export function addMenuPanels() {
    Array.from(document.getElementsByClassName("panelOpener")).forEach(e => {
        console.log(e);
        e.addEventListener("click", openMenuPanel);
    });

    Array.from(document.getElementsByClassName("panelFull")).forEach(e => {
        editMenuPanel(e);
    });
}