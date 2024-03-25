type Game = {
    id: string,
    seeds: Set<string>
};

const GAMES: Array<Game> = [
    {
        id: "sisterRoseAndMaryDahmer",
        seeds: new Set(["nunsWithGuns", "catherinesLetter", "dearDiary"])
    },
    {
        id: "apocalypseClownCarnival",
        seeds: new Set(["batteriesNotIncluded"])
    },
    {
        id: "prison",
        seeds: new Set(["roomClosedDoor"])
    },
    {
        id: "mushroomStory3",
        seeds: new Set(["moldAndMildew", "reverseAPoem", "personalAssistant"])
    },
    {
        id: "annihilationOcean",
        seeds: new Set(["bringerOfGrainAndSeed", "europa", "thing"])
    },
    {
        id: "utopianPsycho",
        seeds: new Set(["thing"])
    }
];

export {
    GAMES
}