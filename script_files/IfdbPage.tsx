import { h } from "dom-chef";

export default function IfdbPage(title: string, author: string, description: JSX.Element, reviews: Array<JSX.Element>) {
    const containerDiv = (
        <div>
            <div className="topctl">
                <a aria-label="Home">
                    <div className="topbar"></div>
                </a>
                <div id="main-nav-wrapper">
                    <nav id="main-nav" className="main-nav">
                        <div className="nav-left">
                            <a id="topbar-home">Home</a>
                            <a id="topbar-browse">Browse</a>
                            <form
                                className="searchbar-wrapper"
                                onSubmit={() => {
                                    return false;
                                }}
                                name="search"
                            >
                                <input id="topbar-searchbar" type="text" name="searchbar" placeholder="Search for games..." />
                                <button type="button" className="" id="topbar-search-go-button" aria-label="Search">
                                    <img src="assets/search_small.svg" alt="" />
                                </button>
                            </form>
                        </div>
                        <div className="nav-right">
                            <ul>
                                <li>
                                    <a id="topbar-login" className="login-link">
                                        Log In
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>

            <div className="main">
                <div className="downloadfloat">
                    <table className="downloads" id="downloadsTable">
                        <tr>
                            <td>
                                <table width="100%" cellPadding="0" cellSpacing="0">
                                    <tr>
                                        <td valign="top">
                                            <h3>External Links</h3>
                                        </td>
                                        <td align="right" valign="middle" className="viewgame__foundGame">
                                            <a title="Play this game right now in your browser. No installation is required.">
                                                <img src="assets/playonlinebtn.gif" className="play-online-button next-snippet-link" />
                                            </a>
                                            <br />
                                        </td>
                                    </tr>
                                </table>

                                <table className="downloadlist">
                                    <a
                                        style={{
                                            boxSizing: "border-box",
                                            width: "40px",
                                            display: "inline-block",
                                        }}
                                    >
                                        <img src="assets/fileformat.gif" />
                                    </a>

                                    <div className="downloaditem" id="dlItem0" style={{ display: "inline-block" }}>
                                        <a className="next-snippet-link">
                                            <b>Play online</b>
                                        </a>
                                        <br />
                                        <span className="dlnotes">
                                            at itch.​io
                                            <br />
                                        </span>
                                        <span className="fmtnotes">Play this game in your Web browser.</span>
                                    </div>
                                </table>
                            </td>
                        </tr>
                    </table>

                    <p></p>
                    <table className="gamerightbar">
                        <tr>
                            <td>
                                <h3>Have you played this game?</h3>
                                You can rate this game, record that you've played it, or put it on your wish list after you <a>log in</a>.
                            </td>
                        </tr>
                    </table>

                    <p></p>
                    <table className="gamerightbar">
                        <tr>
                            <td>
                                <h3>Playlists and Wishlists</h3>
                                <div className="indented">
                                    <a className="silent">
                                        {" "}
                                        <span id="playlistCount"></span>
                                    </a>
                                    <br />
                                    <a className="silent">
                                        {" "}
                                        <span id="wishlistCount"></span>
                                    </a>
                                    <br />
                                </div>
                            </td>
                        </tr>
                    </table>
                </div>

                <div className="viewgame__mainSummary">
                    <table cellSpacing="0" cellPadding="0">
                        <tr>
                            <td>
                                <p></p>
                                <table cellSpacing="0" cellPadding="0">
                                    <tr>
                                        <td>
                                            <h1 id="title-container">{title}</h1>

                                            <b>
                                                by <a>{author}</a>{" "}
                                            </b>
                                            <a className="authorProfileLink" title={"View " + author + "'s profile"}>
                                                profile
                                            </a>
                                            <b></b>
                                            <br />
                                            <br />
                                            <span className="details">
                                                {" "}
                                                2024
                                                <br />{" "}
                                            </span>
                                        </td>
                                    </tr>
                                </table>

                                <h3>About the Story</h3>
                                <div id="description-container">{description}</div>

                                <br />
                                <h2>Game Details</h2>
                                <div className="indented">
                                    <span className="notes">
                                        Language: English (en)
                                        <br />
                                        First Publication Date: March 4, 2024
                                        <br />
                                        Current Version: <i>Unknown</i>
                                        <br />
                                        Development System: <em>Unknown</em>
                                        <br />
                                    </span>
                                    <span className="notes">
                                        <a> IFID</a>: <em>Unknown</em>
                                    </span>
                                    <br />
                                    <span className="notes">
                                        {" "}
                                        <a> TUID</a>: <em>Unknown</em>{" "}
                                    </span>
                                    <br />
                                </div>
                            </td>
                        </tr>
                    </table>
                </div>

                <br />
                <h2>Awards</h2>

                <div className="hangindentedMore">
                    <p>
                        Entrant, All Games - <a>Seedcomp! - 2024</a>
                    </p>
                </div>
                <h2>
                    <a></a>Tags
                </h2>
                <div className="indented">
                    <p>
                        <span id="tagPre" className="details"></span>{" "}
                        <span className="details viewgame__commonTags">
                            {" "}
                            - <a>View the most common tags</a> (<a>What's a tag?</a>){" "}
                        </span>
                    </p>
                    <table id="tagTable" className="tags"></table>
                    <span className="details">
                        (<a>Log in</a> to add your own tags)
                    </span>
                </div>

                <h2>Member Reviews</h2>
                <div id="reviewContainer" className="indented">
                    <table cellSpacing="0" cellPadding="0">
                        <tbody>
                            <tr>
                                <td valign="top"></td>
                                <td className="viewgame__histogramEnd" valign="top">
                                    <br />
                                    <span className="details">
                                        Number of Reviews: {reviews.length}
                                        <br />
                                        <a href="review?id=d5k4zk54m4iqxhvc&amp;userid=">Write a review</a>
                                    </span>
                                </td>
                            </tr>
                        </tbody>
                    </table>

                    <br />

                    {reviews}
                </div>

                <button
                    type="button"
                    id="returnButton"
                    onClick={() => {
                        story.showSnippet("brewer");
                    }}
                >
                    <h3>RETURN</h3>
                </button>
            </div>
        </div>
    );
    return containerDiv;
}
