var mainScript=(()=>{var o=Object.defineProperty;var y=Object.getOwnPropertyDescriptor;var f=Object.getOwnPropertyNames;var v=Object.prototype.hasOwnProperty;var w=(e,n)=>{for(var t in n)o(e,t,{get:n[t],enumerable:!0})},E=(e,n,t,a)=>{if(n&&typeof n=="object"||typeof n=="function")for(let i of f(n))!v.call(e,i)&&i!==t&&o(e,i,{get:()=>n[i],enumerable:!(a=y(n,i))||a.enumerable});return e};var S=e=>E(o({},"__esModule",{value:!0}),e);var x={};w(x,{GAMES:()=>u,SEEDS:()=>m,addMenuPanels:()=>p,addReplaceLink:()=>c,addWrapperHtml:()=>d,genIfdbPage:()=>g,openMenuPanel:()=>l});function d(){if(document.getElementById("contents")===null){let e=document.getElementById("iff-snippet");if(e===null){console.error("iffSnippet is null");return}e.remove();let n=document.createElement("div");n.id="contents";let t=document.createElement("div");t.id="bg",n.appendChild(t);let a=document.createElement("div");a.id="passages",n.appendChild(a);let i=document.createElement("div");i.classList.add("passage"),a.appendChild(i);let s=document.createElement("div");s.id="screenBg",i.appendChild(s);let r=document.createElement("div");r.id="screenContents",r.classList.add("absoluteAlign"),i.appendChild(r),r.appendChild(e),document.getElementById("iff-story")?.appendChild(n)}}function k(e){let n=e.target.getAttribute("identifier"),t=document.querySelectorAll(".linkReplacer[identifier='"+n+"']");if(t.length===0){console.error("Replacelink without replacer! Identifier "+n),console.error(e.target);return}t.forEach(i=>{i.classList.contains("hidden")&&i.classList.remove("hidden")}),document.querySelectorAll(".removedOnClick[identifier='"+n+"']").forEach(i=>{i.classList.add("hidden")})}function A(e){let n=e.target.getAttribute("identifier"),t=document.querySelectorAll(".linkReplacer[identifier='"+n+"']");if(t.length===0){console.error("Replacelink without replacer! Identifier "+n),console.error(e.target);return}t.forEach(i=>{i.classList.contains("hidden")||i.classList.add("hidden")}),document.querySelectorAll(".removedOnClick[identifier='"+n+"']").forEach(i=>{i.classList.remove("hidden")})}function c(){Array.from(document.getElementsByClassName("linkReplaced")).forEach(e=>{e.addEventListener("click",k)}),Array.from(document.getElementsByClassName("linkHider")).forEach(e=>{e.addEventListener("click",A)})}function l(e){let n=e.target.getAttribute("identifier"),t=document.querySelector(".panelFull[identifier='"+n+"']");if(t===null){console.error("Replacelink without replacer!"),console.error(e.target);return}t.classList.remove("hidden");let a=document.getElementById("bg");a!==null&&(a.style.zIndex="3",a.style.backgroundColor="rgba(0, 0, 0, 0.4)")}function C(e){let n=document.createElement("button");n.innerText="X",n.type="button",n.classList.add("closeButton"),n.addEventListener("click",()=>{e.classList.add("hidden");let t=document.getElementById("bg");t!==null&&(t.style.zIndex="0",t.style.backgroundColor="#eee")}),e.prepend(n)}function p(){Array.from(document.getElementsByClassName("panelOpener")).forEach(e=>{console.log(e),e.addEventListener("click",l)}),Array.from(document.getElementsByClassName("panelFull")).forEach(e=>{C(e)})}var m=[{id:"nunsWithGuns",name:"Nunz With Gunz, by manonamora"},{id:"catherinesLetter",name:"Catherine's Letter, by sophiades"},{id:"dearDiary",name:"Dear Diary, by Dry Cappuccino Games"},{id:"batteriesNotIncluded",name:"Batteries Not Included, by Zed Lopez"},{id:"roomClosedDoor",name:"Room: Closed Door, by Charm Cochran"},{id:"moldAndMildew",name:"Mold and Mildew, by augustk"},{id:"reverseAPoem",name:"Reverse a Poem, by Amanda Walker"},{id:"personalAssistant",name:"Personal Assistant, by alyshkalia"},{id:"bringerOfGrainAndSeed",name:"Bringer of Grain and Seed, by Rovarsson"},{id:"europa",name:"Europa, by oneeyedpizza"},{id:"thing",name:"thing, by Kit Riemer"}].sort((e,n)=>{let t=e.name,a=n.name;return t<a?-1:t>a?1:0});var u=[{id:"sisterRoseAndMaryDahmer",seeds:new Set(["nunsWithGuns","catherinesLetter","dearDiary"])},{id:"apocalypseClownCarnival",seeds:new Set(["batteriesNotIncluded"])},{id:"prison",seeds:new Set(["roomClosedDoor"])},{id:"mushroomStory3",seeds:new Set(["moldAndMildew","reverseAPoem","personalAssistant"])},{id:"annihilationOcean",seeds:new Set(["bringerOfGrainAndSeed","europa","thing"])}];var L=`
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
                                ><br /><span class="dlnotes">at itch.\u200Bio<br /></span><span class="fmtnotes">Play this game in your Web browser.</span>
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
`;function g(e,n,t){let a=document.createElement("div");if(a.innerHTML=L,a.querySelector("#title-container")?.append(e),a.querySelector("#description-container")?.append(n),t!==null){let r=()=>{story.showSnippet(t)},b=a.querySelectorAll(".next-snippet-link");Array.from(b).forEach(h=>{h.addEventListener("click",r)})}return a}return S(x);})();
window.mainScript = mainScript;
