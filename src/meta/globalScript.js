$(function () {
    if (!snippet.tags.includes("noWrapper")) {
        console.log("tag", snippet.tags);
        window.mainScript.addWrapperHtml();
    }
    window.mainScript.addReplaceLink();

    const bottomHalf = document.querySelector("div.absoluteAlign.bottomHalf");
    if (story.transitionMessage !== null) {
        const message = document.createElement("p");
        message.classList.add("transitionMessage");
        message.innerText = story.transitionMessage;
        bottomHalf.prepend(message);
        story.transitionMessage = null;
    }
});