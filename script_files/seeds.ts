type Seed = {
    id: string,
    name: string
};

const SEEDS: Array<Seed> = [
    {
        id: "nunsWithGuns",
        name: "Nunz With Gunz, by manonamora"
    },
    {
        id: "catherinesLetter",
        name: "Catherine's Letter, by sophiades"
    },
    {
        id: "dearDiary",
        name: "Dear Diary, by Dry Cappuccino Games"
    },
    {
        id: "batteriesNotIncluded",
        name: "Batteries Not Included, by Zed Lopez"
    },
    {
        id: "roomClosedDoor",
        name: "Room: Closed Door, by Charm Cochran"
    },
    {
        id: "moldAndMildew",
        name: "Mold and Mildew, by augustk"
    },
    {
        id: "reverseAPoem",
        name: "Reverse a Poem, by Amanda Walker"
    },
    {
        id: "personalAssistant",
        name: "Personal Assistant, by alyshkalia"
    },
    {
        id: "bringerOfGrainAndSeed",
        name: "Bringer of Grain and Seed, by Rovarsson"
    },
    {
        id: "europa",
        name: "Europa, by oneeyedpizza"
    },
    {
        id: "thing",
        name: "thing, by Kit Riemer"
    }
].sort((a, b) => {
  const nameA = a.name;
  const nameB = b.name;
  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }

  // names must be equal
  return 0;
});

export {
    Seed, SEEDS
};