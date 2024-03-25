## [Play Here](https://kanderwund.itch.io/ifdb)

Contains source code for All The Games I Would Have Made For Seedcomp If I Had The Time (Which I Did Not) (Oh Well There's Always Next Year), an interactive fiction game originally made for [Seedcomp 2024](https://itch.io/jam/seedcomp24-sprouting-round).

The game was made with <a href="https://github.com/zehanort/iffinity">iffinity</a>, a Tweego-like interactive fiction engine by Sotiris Niarchos.

Needed but not included in the repository due to being build outputs:

* export/index.html
* src/meta/typescriptMain.js

They are generated with `build`. The files in `src` are the actual source code of the final iffinity project, while the files in `script_files` get compiled by `build` into `src/meta/typescriptMain.js`, which is loaded into the final project (as a story script).

Image and audio assets aren't included in the repo since they'd make it unnecessarily large, but they come with the downloaded version of the game you can get on Itch.
