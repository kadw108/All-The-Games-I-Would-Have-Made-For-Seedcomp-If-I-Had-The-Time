const ifdbInner = `
    <div class="topctl">
        <a aria-label="Home">
            <div class="topbar"></div>
        </a>
        <div id="main-nav-wrapper">
            <nav id="main-nav" class="main-nav">
                <div class="nav-left">
                    <a id="topbar-home">Home</a>
                    <a id="topbar-browse">Browse</a>
                    <form class="searchbar-wrapper" onsubmit="return false;" name="search">
                        <input id="topbar-searchbar" type="text" name="searchbar" placeholder="Search for games..." />
                        <button type="button" class="" id="topbar-search-go-button" aria-label="Search">
                            <img src="assets/search_small.svg" alt="" />
                        </button>
                    </form>
                </div>
                <div class="nav-right">
                    <ul>
                        <li><a id="topbar-login" class="login-link">Log In</a></li>
                    </ul>
                </div>
            </nav>
        </div>
    </div>

    <div class="main">
        <style nonce="weMcaW4W">
            .reviews__moreOptions {
                display: inline;
                position: relative;
            }
            .reviews__voteMenu {
                display: none;
                position: absolute;
                left: 0px;
                z-index: 20000;
            }
            .reviews__separator {
                height: 1ex;
            }
        </style>
        <div class="downloadfloat">
            <table class="downloads" id="downloadsTable">
                <tr>
                    <td>
                        <table width="100%" border="0" cellpadding="0" cellspacing="0">
                            <tr>
                                <td valign="top">
                                    <h3>External Links</h3>
                                </td>
                                <td align="right" valign="middle" class="viewgame__foundGame">
                                    <style>
                                        .viewgame__foundGame {
                                            position: relative;
                                        }
                                        .viewgame__playOnline {
                                            margin: 0px 0px 0.3em 0px;
                                            cursor: pointer;
                                        }
                                    </style>
                                    <a title="Play this game right now in your browser. No installation is required."><img src="assets/playonlinebtn.gif" class="play-online-button next-snippet-link" /></a><br />
                                </td>
                            </tr>
                        </table>

                        <table class="downloadlist">
                            <a style="box-sizing: border-box; width: 40px; display: inline-block"><img src="assets/fileformat.gif" border="0" /></a>

                            <div class="downloaditem" id="dlItem0" style="display: inline-block">
                                <a class="next-snippet-link"><b>Play online</b></a
                                ><br /><span class="dlnotes">at itch.​io<br /></span><span class="fmtnotes">Play this game in your Web browser.</span>
                            </div>
                        </table>
                    </td>
                </tr>
            </table>

            <p></p>
            <table class="gamerightbar">
                <tr>
                    <td>
                        <h3>Have you played this game?</h3>
                        You can rate this game, record that you've played it, or put it on your wish list after you <a>log in</a>.
                    </td>
                </tr>
            </table>

            <p></p>
            <table class="gamerightbar">
                <tr>
                    <td>
                        <h3>Playlists and Wishlists</h3>
                        <div class="indented">
                            <a class="silent"> <span id="playlistCount"></span></a><br />
                            <a class="silent"> <span id="wishlistCount"></span></a><br />
                        </div>
                    </td>
                </tr>
            </table>
        </div>
        <style nonce="weMcaW4W">
            .viewgame__mainSummary {
                margin: 0;
                padding: 0;
            }
        </style>

        <div class="viewgame__mainSummary">
            <table cellspacing="0" cellpadding="0" border="0">
                <tr valign="top">
                    <td>
                        <p></p>
                        <table cellspacing="0" cellpadding="0" border="0">
                            <tr valign="top">
                                <td>
                                    <div id="title-container"></div>

                                    <b>by <a>KADW</a> </b><a class="authorProfileLink" title="View KADW's profile">profile</a><b></b><br /><br />
                                    <span class="details"> 2024<br /> </span>
                                </td>
                            </tr>
                        </table>

                        <h3>About the Story</h3>
                        <div id="description-container"></div>

                        <br />
                        <h2>Game Details</h2>
                        <div class="indented">
                            <span class="notes">
                                Language: English (en)<br />
                                First Publication Date: March 1, 2024<br />
                                Current Version: <i>Unknown</i><br />
                                Development System: <em>Unknown</em><br />
                            </span>
                            <span class="notes"><a> IFID</a>: <em>Unknown</em></span
                            ><br />
                            <span class="notes"> <a> TUID</a>: <em>Unknown</em> </span><br />
                        </div>
                    </td>
                </tr>
            </table>
        </div>

        <br />
        <h2>Awards</h2>

        <div class="hangindentedMore">
            <p>Entrant, All Games - <a>Seedcomp! - 2024</a></p>
        </div>
        <h2><a name="tags"></a>Tags</h2>
        <div class="indented">
            <p>
                <span id="tagPre" class="details"></span> <span class="details viewgame__commonTags"> - <a>View the most common tags</a> (<a>What's a tag?</a>) </span>
            </p>
            <table id="tagTable" border="0" class="tags"></table>
            <span class="details">(<a>Log in</a> to add your own tags)</span>
        </div>
    </div>
`;

function genIfdbPage(
    title: HTMLElement,
    description: HTMLElement,
    nextSnippet: string | null
) {
    const containerDiv = document.createElement("div");
    containerDiv.innerHTML = ifdbInner;

    const titleContainer = containerDiv.querySelector("#title-container");
    titleContainer?.append(title);

    const descriptionContainer = containerDiv.querySelector("#description-container");
    descriptionContainer?.append(description);

    if (nextSnippet !== null) {
        const showNextSnippet = () => {
            // @ts-expect-error
            story.showSnippet(nextSnippet);
        }

        const nextSnippetLinks = containerDiv.querySelectorAll(".next-snippet-link");
        Array.from(nextSnippetLinks).forEach((element) => {
            element.addEventListener("click", showNextSnippet);
        });
    }

    return containerDiv;
}

export {
    genIfdbPage
};