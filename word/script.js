const words = [
    "abacus", "abound", "absurd", "accord", "acquit", "admire", "advent", "advice",
    "affect", "afford", "afraid", "agency", "agenda", "ailing", "airman", "alight",
    "allege", "almond", "anchor", "animal", "annual", "appeal", "arouse", "arrive",
    "artful", "artist", "aspect", "assume", "atomic", "attend", "avenue", "aviary",
    "babble", "backer", "bakery", "ballad", "ballet", "banner", "barren", "battle",
    "beacon", "beetle", "belief", "beyond", "bishop", "blithe", "border", "bother",
    "bottle", "bounty", "bovine", "brandy", "bright", "broach", "budget", "burden",
    "butter", "cabana", "candid", "cannon", "canton", "career", "carpet", "carrot",
    "cartel", "castle", "cattle", "cellar", "charge", "charms", "choice", "choose",
    "chorus", "church", "cinema", "circle", "circus", "clinch", "clinic", "closet",
    "clutch", "coerce", "coffee", "collar", "column", "comedy", "commit", "common",
    "compel", "consul", "cookie", "copper", "corner", "cosmic", "costly", "council",
    "course", "coyote", "cradle", "cranky", "crater", "credit", "creepy", "crisis",
    "custom", "dagger", "damage", "danger", "darlin", "debate", "debris", "decade",
    "decent", "decide", "decree", "defeat", "defend", "define", "demand", "depart",
    "deploy", "deputy", "derive", "descend", "desire", "detach", "detail", "device",
    "devote", "dialog", "digest", "dignity", "dilute", "dinner", "direct", "disarm",
    "dismay", "dispel", "distant", "distil", "doctor", "donate", "double", "doubt",
    "dragon", "drawer", "dreamy", "driven", "driver", "drones", "drying", "during",
    "dynamo", "eagle", "easily", "eating", "editor", "effect", "effort", "elapse",
    "elicit", "embody", "emerge", "empire", "employ", "enable", "enamel", "encase",
    "endure", "energy", "engage", "engine", "enlist", "ensign", "entail", "entire",
    "entity", "enrich", "ensue", "ensure", "entire", "equity", "escort", "ethics",
    "evapor", "evolve", "exceed", "except", "excess", "exhort", "exodus", "expand",
    "expect", "expire", "export", "extend", "extent", "fabric", "facing", "factor",
    "failed", "fairly", "family", "famine", "famous", "fancied", "farmer", "fasten",
    "father", "faulty", "favor", "fearing", "feature", "feeble", "fellow", "felony",
    "female", "fender", "fierce", "fifth", "figure", "filter", "final", "finger",
    "finish", "finite", "firmer", "first", "fiscal", "fitted", "flavor", "flood",
    "flower", "flying", "follow", "force", "forget", "formal", "former", "forty",
    "foster", "fourth", "france", "freely", "friend", "fringe", "frozen", "fruit",
    "fulfil", "fungus", "future", "gallon", "gambit", "gather", "gender", "gentle",
    "german", "gifted", "givers", "giving", "gladly", "glance", "global", "gloves",
    "golden", "gospel", "govern", "grace", "grainy", "granny", "gravel", "greedy",
    "groove", "guilty", "guitar", "habit", "hammer", "handle", "harbor", "harden",
    "harmony", "harsh", "hasten", "hazard", "health", "hearing", "heaven", "helmet",
    "herald", "herbal", "heroic", "hidden", "hinder", "hiring", "honest", "horror",
    "humane", "humble", "hungry", "hunter", "hurry", "hustle", "hybrid", "iconic",
    "ignore", "immune", "impact", "import", "inborn", "income", "indeed", "indoor",
    "induce", "infamy", "inform", "ingest", "inhale", "injury", "inning", "insect",
    "insure", "intend", "invade", "invent", "invest", "island", "itself", "jacket",
    "jargon", "jigsaw", "joined", "joking", "jovial", "jungle", "jurist", "keeper",
    "kernel", "kidnap", "kidney", "killer", "kindly", "kitten", "knight", "korean",
    "labor", "ladder", "lament", "laptop", "larger", "lastly", "latter", "launch",
    "lawful", "lawyer", "leader", "league", "legacy", "legend", "length", "lessen",
    "letter", "liable", "lifted", "likely", "lively", "lizard", "locate", "lonely",
    "longer", "loosen", "losing", "louder", "lovely", "loyal", "lucent", "lumber",
    "lunar", "luxury", "lyrics", "magnet", "mainly", "maker", "manage", "manual",
    "marine", "marked", "market", "marvel", "master", "matrix", "matter", "mature",
    "medal", "melody", "mentor", "mercy", "merge", "merit", "method", "metric",
    "middle", "mighty", "mining", "minute", "misery", "mobile", "modern", "modest",
    "moment", "monkey", "morale", "morbid", "mortal", "mother", "motion", "motive",
    "muddle", "muffin", "murder", "museum", "mutual", "myself", "mystic", "nation",
    "native", "nature", "nearby", "nearly", "neatly", "nectar", "needle", "nephew",
    "nervous", "neural", "neuron", "nobody", "noodle", "normal", "notion", "novice",
    "nuance", "number", "nurture", "object", "obtain", "occupy", "ocean", "offend",
    "offer", "office", "offset", "oldest", "onward", "openly", "oppose", "option",
    "orange", "orbit", "origin", "outage", "outfit", "outlet", "output", "overly",
    "oxygen", "packet", "palace", "parade", "parcel", "parent", "partly", "patent",
    "paying", "peanut", "pearly", "pebble", "pepper", "permit", "person", "petal",
    "petty", "phone", "photos", "pillow", "planet", "player", "plenty", "pocket",
    "poetic", "poison", "police", "policy", "polish", "pollen", "ponder", "portal",
    "poster", "potato", "powder", "prayer", "pretty", "pricey", "prince", "prison",
    "profit", "prompt", "proper", "proton", "public", "pulsar", "pulses", "punish",
    "purely", "pursue", "puzzle", "quaint", "quartz", "quench", "quirky", "quoted",
    "rabbit", "racism", "radiant", "radius", "raised", "random", "rarely", "rather"];
  
let guess;
let rand;
let word = document.getElementById('word');
let hints = document.getElementById('hints');
let hintNum;
let checks;

document.addEventListener('DOMContentLoaded', newWord(), false);

function randomize(array) {
    // Shuffles array
    let currentIndex = array.length;

    while (currentIndex != 0) {

    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }
}

function newWord() {
    // Reset some stuffs
    checks = 0;
    hintNum = 0;
    hints.textContent = "Hint >.<";
    // Generate a new scrambled word
    rand = words[Math.floor(Math.random()*words.length)];
    let scrambled = rand.split("");
    randomize(scrambled);
    console.log(scrambled);
    word.textContent = scrambled.join(" ");
}

function hint() {
    // Give the next letter to the word
    let temp = [];
    let randSplit = rand.split("")
    if (hintNum >= randSplit.length) {
        // If already give the whole word
        console.log('i already gave you the whole word...');
    }
    // Else
    else {
        for (let i = 0; i <= hintNum; i++) {
            // Adds the letters already up to hintNum
            temp.push(randSplit[i]);
        }
        hintNum += 1;
        hints.textContent = temp.join(" ");
    }
    // Hint counter, joins elements of the list for each button press until no more
}

function checkWord() {
    // Checks if the word is correct
    checks += 1;
    guess = document.getElementById('guess').value;
    if (guess.length === rand.length) {
        if (guess === rand) {
            console.log('correct');
            window.alert(`${rand} is correct! Took you ${hintNum} hints and ${checks} checks.`);
            newWord();
            document.getElementById('guess').value = "";
        }
        else {
            console.log('incorrect');
            window.alert("you're wrong lmao");
        }
    }

    else {
        console.log('wrong amount of letters...');
        window.alert("bro didn't even count the letters right.")
    }
}
