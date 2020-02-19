function returnXpRate(skillName) {
    var currentLevel = getCurrentLevel();
    var xpRate = 1;
    
    if (skillName == "Agility") {
        if (currentLevel < 10) {
            xpRate = 8000;           
        } else if (10 <= currentLevel && currentLevel < 20) {
            xpRate = 9000;
        } else if (20 <= currentLevel && currentLevel < 25) {
            xpRate = 9360;
        } else if (25 <= currentLevel && currentLevel < 30) {
            xpRate = 18000;
        } else if (30 <= currentLevel && currentLevel < 40) {
            xpRate = 13200;
        } else if (40 <= currentLevel && currentLevel < 52) {
            xpRate = 16000;
        } else if (52 <= currentLevel && currentLevel < 60) {
            xpRate = 35000;
        } else if (60 <= currentLevel && currentLevel < 70) {
            xpRate = 54000;
        } else if (70 <= currentLevel && currentLevel < 80) {
            xpRate = 52000;
        } else if (80 <= currentLevel && currentLevel < 90) {
            xpRate = 54800;
        } else if (90 <= currentLevel && currentLevel < 96) {
            xpRate = 59000;
        } else if (currentLevel >= 96) {
            xpRate = 62300;
        } else {
            xpRate = 1;
        }
    }
    
    return xpRate;
       
}

function calculateTTL(skillName) {
    var currentLevel = getCurrentLevel();
    var mainValues = mainProgram(skillName);
    var requiredLevel = mainValues[0];
    var xpRequired = betweenTwoLevels(getCurrentLevel(), requiredLevel); 
    xpRequired = parseInt(xpRequired);
    
    var xpRate = returnXpRate(skillName); 
    var targetLevel = mainProgram(skillName);
    
    var TTL = (xpRequired) / (xpRate);
    
    
    var decimalTimeString = TTL;
    var n = new Date(0,0);
    n.setSeconds(+decimalTimeString * 60 * 60);
    TTL = n.toTimeString().slice(0, 8);

    
    //xprequired is the problem
    //return (xpRequired) / (xpRate);
    return TTL;
}

function writeTTL() {
    document.getElementsByTagName("p")[2].innerHTML="Estimated TTL: " + calculateTTL();
}

function getCurrentLevel() {
    var currentLevel = document.getElementById("level").value;
    return currentLevel;
}





function calculateAllSkills() {
    var arrayThatHoldsAllLevels = [];
    var i;
    for (i = 0; i < listOfSkills.length; i++) {
        var skill = listOfSkills[i];
        arrayThatHoldsAllLevels[i] = mainProgram(skill);
    }
    alert(arrayThatHoldsAllLevels);
}



function clickedHelp() {
    alert("Enter a number from 1-99, and then click on a skill icon to the right to display the next closest Quest or Achievement Diary requirement for that skill. \n\n If you want to see all closest requirements for that level, click the ALL SKILLS button.")
}

function clickedContact() {
    alert("WHy do you want to talk to me?!????!")
}


function increaseBy5() {
    var currentLevel = Number(document.getElementById("level").value);
    currentLevel = currentLevel + 5;
    document.getElementById("level").value = currentLevel;

}

function increaseBy1() {
    var currentLevel = Number(document.getElementById("level").value);
    currentLevel = currentLevel + 1;
    document.getElementById("level").value = currentLevel;

}

function getSkill(skillName) {
    
    //var skillName = document.getElementById("skills-panel").value;
    var levelsList = [];
    
    if (skillName == "Agility") {                       // decide which skill to use 
        levelsList = agilityList;
    } else if (skillName == "Attack") {
        levelsList = attackList;
    } else if (skillName == "Construction") {
        levelsList = constructionList;
    } else if (skillName == "Cooking") {
        levelsList = cookingList;
    } else if (skillName == "Crafting") {
        levelsList = craftingList;
    } else if (skillName == "Defence") {
        levelsList = defenceList;
    } else if (skillName == "Farming") {
        levelsList = farmingList;
    } else if (skillName == "Firemaking") {
        levelsList = firemakingList;
    } else if (skillName == "Fishing") {
        levelsList = fishingList;
    } else if (skillName == "Fletching") {
        levelsList = fletchingList;
    } else if (skillName == "Herblore") {
        levelsList = herbloreList;
    } else if (skillName == "Hitpoints") {
        levelsList = hitpointsList;
    }  else if (skillName == "Hunter") {
        levelsList = hunterList;
    }   else if (skillName == "Magic") {
        levelsList = magicList;
    } else if (skillName == "Mining") {
        levelsList = miningList;
    } else if (skillName == "Prayer") {
        levelsList = prayerList;
    } else if (skillName == "Ranged") {
        levelsList = rangedList;
    } else if (skillName == "Runecraft") {
        levelsList = runecraftList;
    } else if (skillName == "Slayer") {
        levelsList = slayerList;
    } else if (skillName == "Smithing") {
        levelsList = smithingList;
    } else if (skillName == "Strength") {
        levelsList = strengthList;
    } else if (skillName == "Thieving") {
        levelsList = thievingList;
    } else if (skillName == "Woodcutting") {
        levelsList = woodcuttingList;
    }

	return levelsList;
}


function writeAllValues(skillName) {
    var mainValues = mainProgram(skillName);
    var requiredLevel = mainValues[0];
    var task = mainValues[1];
    
    var xpRequired = numberWithCommas(betweenTwoLevels(getCurrentLevel(), requiredLevel));
    
    document.getElementsByTagName("p")[0].innerHTML="Train " + skillName + " to level " + requiredLevel + " for " + task;
    
    document.getElementsByTagName("p")[1].innerHTML="EXP required: " + xpRequired;
    
    
    var TTL = calculateTTL(skillName);
        
    document.getElementsByTagName("p")[2].innerHTML="Estimated TTL: " + TTL;
}


function mainProgram(skillName) {
    var currentLevel = getCurrentLevel();
    
    
    var skillName = skillName;
    
    var requiredLevel;
	var i;
    var levelsList = getSkill(skillName);
    
	for (i = 0; i < levelsList.length; i++) {
        levelsListIndex = levelsList[i]
        levelsListTupleIndex0 = levelsListIndex[0];     // skill-level
        levelsListTupleIndex1 = levelsListIndex[1];     // task name

        if (currentLevel < levelsListTupleIndex0) {
        requiredLevel = levelsListTupleIndex0;
        var task = levelsListTupleIndex1;
		break;
        }
    }  
    
//    document.getElementsByTagName("p")[0].innerHTML="Train " + skillName + " to level " + requiredLevel + " for " + task;
    
//document.getElementsByTagName("p")[2].innerHTML="Estimated TTL " + calculateTTL(skillName, currentLevel);

//    writeTTL();

//    
//    betweenTwoLevels(currentLevel, requiredLevel);
    
    //calculateTTL();
    
    return [requiredLevel, task];
    
}

function writeRequiredLevel() {
        document.getElementsByTagName("p")[0].innerHTML="Train " + skillName + " to level " + mainProgram() + " for " + task;
}



function calculateXP(targetLevel)
{
    var i;
    var sum = 0;

    for (i = 1; i <= targetLevel - 1; ++i) {
        var x = i;
        sum += Math.floor((300.0 * (Math.pow(2.0, (x / 7.0))) + x));
    }
    sum /= 4;
    sum = Math.floor(sum);
    return sum;

}

function betweenTwoLevels(requiredLevel, currentLevel) {
    var result = (calculateXP(currentLevel) - calculateXP(requiredLevel));
    //result = numberWithCommas(result); 
    return result;
}


//function writeBetweenTwoLevels(x, y) {
//    document.getElementsByTagName("p")[1].innerHTML="EXP required: " + betweenTwoLevels(x, y);
//}



function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

8

function whenEnterPressed(event){
                if (event.keyCode == 13 || event.which == 13){
                    mainProgram();
                }
            }



var listOfSkills = ["Agility", "Attack", "Construction", "Cooking", "Crafting"
                        , "Defence", "Farming", "Firemaking", "Fishing", "Fletching", "Herblore", "Hunter", "Magic", "Mining", "Prayer", "Ranged", "Runecraft", "Slayer"
                        , "Smithing", "Strength", "Thieving", "Woodcutting"];

    // LIST BEGIN OF ALL SKILLS AND TASKS

    // AGILITY

    p1 = [10, "The Dig Site"];
    p2 = [13, "The Lost Tribe"];
    p3 = [15, "Haunted Mine"];
    p4 = [15, "Tai Bwo Wannai Trio"];
    p5 = [15, "Troll Stronghold"];
    p6 = [18, "The Depths of Despair"];
    p7 = [20, "Mountain Daughter"];
    p8 = [23, "Death to the Dorgeshuun"];
    p9 = [25, "Ghosts Ahoy"];
    p10 = [25, "The Grand Tree"];
    p11 = [25, "In Search of the Myreque"];
    p12 = [25, "Watchtower"];
    p13 = [26, "Darkness of Hallowvale"];
    p14 = [28, "Troll Romance"];
    p15 = [30, "Cold War"];
    p16 = [32, "Shilo Village"];
    p17 = [35, "Horror from the Deep"];
    p18 = [36, "One Small Favour"];
    p19 = [40, "The Fremennik Isles"];
    p20 = [40, "Royal Trouble"];
    p21= [42, "Cabin Fever"];
    p22 = [48, "Recipe for Disaster - Awowogei subquest"];
    p23 = [50, "Legend's Quest"];
    p24 = [55, "Monkey Madness II"];
    p25 = [56, "Regicide"];
    p26 = [59, "Grim Tales"];
    p27 = [60, "Dragon Slayer II"];
    p28 = [68, "Making Friends with My Arm"];
    p29 = [70, "Song of the Elves"];
    p30 = [99, "Skillcape"];

    var agilityList = [p1,p2,p3,p4,p5,p6,p7,p8,p9,p10,p11,p12,p13,p14,p15,p16,p17,p18,p19,p20,p21,p22,p23,p24,p25,p26,p27,p28,p29,p30];
    agilityList = agilityList.sort();

    // ATTACK 

    p31 = [15, "Another slice of HAM"];
    p32 = [20, "Holy Grail"];
    p33 = [40, "A Taste of Hope"];
    p34 = [42, "Western Provinces - Elite"];
    p35 = [50, "Another slice of HAM"];
    p36 = [99, "Skillcape"];

    var attackList = [p31,p32,p33,p34,p35,p36];
    attackList = attackList.sort();


	// CONSTRUCTION
    p37 = [5, "Darkness of Hallowvale"];
    p38 = [5, "The Eyes of Glouphrie"];
    p39 = [10, "Tower of Life"];
    p40 = [20, "The Fremennik Isles"];
    p41 = [30, "The Great Brain Robbery"];
    p42 = [34, "Cold War"];
    p43 = [35, "Making Friends with My Arm"];
    p44 = [50, "Dragon Slayer II"];
    p45 = [70, "Song of the Elves"];

    var constructionList = [p37,p38,p39,p40,p41,p42,p43,p44,p45];
    constructionList = constructionList.sort();

    // COOKING 

    var cookingList = [
        [10, "Recipe for Disaster - Beginning"],
        [20, "Ghosts Ahoy"],
        [22, "Forgettable Tale of a Drunken Dwarf"],
        [25, "Recipe for Disaster - Evil Dave subquest"],
        [30, "Big Chompy Bird Hunting"],
        [30, "Tai Bwo Wannai Trio"],
        [31, "Recipe for Disaster - Pirate Pete "],
        [40, "Recipe for Disaster - Lumbridge Guide subquest"],
        [41, "Recipe for Disaster - Skrach Uglogwee subquest"],
        [53, "Heroes' Quest*"],
        [62, "Swan Song"],
        [70, "Recipe for Disaster - Awowogei subquest*"],
        [99, "Skillcape"]
    ].sort();


    // CRAFTING 

    var craftingList = [
        [10,"Observatory Quest"],
        [12,"The Giant Dwarf"],
        [16,"The Great Brain Robbery"],
        [19,"Animal Magnetism"],
        [20,"Creature of Fenkenstrain"],
        [20,"Elemental Workshop I"],
        [20,"The Golem"],
        [20,"Shades of Mort'ton"],
        [20,"Shilo Village"],
        [20,"Tears of Guthix"],
        [25,"In Aid of the Myreque"],
        [25,"One Small Favour"],
        [30,"Cold War"],
        [30,"Shadow of the Storm"],
        [30,"Slug Menace"],
        [31,"Lost City*"],
        [32,"Darkness of Hallowvale"],
        [35,"Haunted Mine"],
        [36,"Enlightened Journey"],
        [40,"Family Crest"],
        [40, "The Fremennik Trials*"],
        [40,"Swan Song"],
        [42,"Rum Deal"],
        [45,"Cabin Fever"],
        [46,"The Fremennik Isles"],
        [48,"A Taste of Hope"],
        [49,"The Hand in the Sand"],
        [50,"Enakhra's Lament"],
        [50,"Legends' Quest"],
        [61,"Lunar Diplomacy"],
        [62, "Dragon Slayer II"],
        [65, "The Fremennik Exiles"],
        [70,"Monkey Madness II"],
        [99, "Skillcape"]
    ].sort();

    // DEFENCE

    var defenceList = [
        [20,"Rag and Bone Man II"],
        [30,"Between a Rock..."],
        [40,"Lunar Diplomacy"],
        [65,"King's Ransom"],
        [99, "Skillcape"]
    ].sort();

    // FARMING 
    var farmingList = [
        [17,"Forgettable Tale of a Drunken Dwarf"],
        [25,"Garden of Tranquillity"],
        [29,"My Arm's Big Adventure"],
        [30,"Enlightened Journey"],
        [40,"Rum Deal*"],
        [45,"Grim Tales*"],
        [49,"Fairytale II - Cure a Queen*"],
        [70,"Song of the Elves"],
        [99, "Skillcape"]
    ].sort();

    // FIREAMKING
    var firemakingList = [
        [5,"Shades of Mort'ton"],
        [16,"The Giant Dwarf"],
        [20,"Enlightened Journey"],
        [20,"Recipe for Disaster - Skrach Uglogwee subquest"],
        [30,"Sea Slug"],
        [40,"Olaf's Quest"],
        [42,"Swan Song"],
        [45,"Enakhra's Lament"],
        [49,"Lunar Diplomacy"],
        [49,"Tears of Guthix"],
        [50,"Desert Treasure"],
        [60,"Monkey Madness II*"],
        [66,"Making Friends with My Arm"],
        [99, "Skillcape"]
    ].sort();

    // FISHING
    var fishingList = [
        [5,"Tai Bwo Wannai Trio"],
        [10,"Fishing Contest"],
        [50,"Rum Deal*"],
        [53,"Heroes' Quest*"],
        [60,"The Fremennik Exiles"],
        [62,"Swan Song*"],
        [99, "Skillcape (provides unlimited teleports to either the Fishing Guild or Otto's Grotto)"]
    ].sort();

    var fletchingList = [
        [5,"Big Chompy Bird Hunting"],
        [10,"The Tourist Trap"],
        [25,"The Fremennik Trials*"],
        [30,"Zogre Flesh Eaters"],
        [50,"Devious Minds"],
        [99, "Skillcape"]
    ].sort();

    var herbloreList = [
        [3,"Jungle Potion"],
        [5,"Lunar Diplomacy"],
        [8,"Zogre Flesh Eaters"],
        [10,"The Dig Site"],
        [14,"Watchtower"],
        [15,"Shades of Mort'ton"],
        [18,"One Small Favour"],
        [25,"Heroes' Quest*"],
        [31,"Eadgar's Ruse"],
        [45,"Legends' Quest"],
        [52,"Grim Tales*"],
        [57,"Fairytale II - Cure a Queen*"],
        [70,"Song of the Elves"],
        [99, "Skillcape"]
    ].sort();

    var hitpointsList = [[50,"Dragon Slayer II"], [99, "Skillcape"]];

    var hunterList = [
        [10,"Cold War"],
        [12,"The Ascent of Arceuus"],
        [27,"Eagles' Peak"],
        [60,"Monkey Madness II"],
        [70," Song of the Elves"],
        [99, "Skillcape"]
    ].sort();

    var magicList = [
        [7,"In Aid of the Myreque"],
        [15,"Watchtower"],
        [20,"Elemental Workshop II"],
        [33,"Darkness of Hallowvale"],
        [33,"The Giant Dwarf"],
        [33,"Spirits of the Elid*"],
        [39,"Enakhra's Lament"],
        [45,"King's Ransom"],
        [46,"The Eyes of Glouphrie"],
        [50,"Desert Treasure"],
        [56,"Legends' Quest"],
        [59,"Family Crest*"],
        [65,"Lunar Diplomacy"],
        [66,"Swan Song*"],
        [75,"Dragon Slayer II"],
        [99, "Skillcape"]
    ].sort();

    var miningList = [
        [10,"The Knight's Sword"],
        [15,"In Aid of the Myreque"],
        [17,"The Lost Tribe"],
        [20,"Darkness of Hallowvale"],
        [20,"Elemental Workshop I"],
        [20,"Tears of Guthix"],
        [37,"Spirits of the Elid"],
        [40,"Between a Rock...*"],
        [40,"Family Crest"],
        [40,"Watchtower*"],
        [50,"Heroes' Quest*"],
        [52,"Legends' Quest*"],
        [60,"Lunar Diplomacy"],
        [68,"Dragon Slayer II"],
        [70,"Song of the Elves"],
        [72,"Making Friends with My Arm*"],
        [99, "Skillcape"]
    ].sort();

    var prayerList = [
        [25, "Another Slice of H.A.M."],
        [31,"Scorpion Catcher"],
        [42,"Legends' Quest"],
        [43,"Enakhra's Lament"],
        [47,"Rum Deal*"],
        [50,"The Great Brain Robbery"],
        [99,"Skillcape"]
    ].sort();

    var rangedList = [
        [25,"Underground Pass"],
        [30,"Animal Magnetism"],
        [30,"Big Chompy Bird Hunting"],
        [30,"Zogre Flesh Eaters"],
        [37,"Spirits of the Elid*"],
        [40,"Cabin Fever"],
        [40,"Temple of Ikov"],
        [60,"Mourning's End Part I"],
        [99, "Skillcape"]
    ].sort();

    var runecraftList = [
        [13,"The Eyes of Glouphrie"],
        [30,"The Slug Menace"],
        [35,"What Lies Below"],
        [50,"Devious Minds"],
        [55,"The Fremennik Exiles"],
        [99,"Skillcape"]
    ].sort();

    var slayerList = [
        [10,"Desert Treasure"],
        [18,"Animal Magnetism"],
        [30,"The Slug Menace"],
        [38,"A Taste of Hope"],
        [40,"Rag and Bone Man II"],
        [40,"Royal Trouble"],
        [42,"Rum Deal"],
        [60,"The Fremennik Exiles"],
        [69,"Monkey Madness II"],
        [99,"Skillcape"]
    ].sort();

    var smithingList = [
        [4,"Zogre Flesh Eaters"],
        [20,"Elemental Workshop I"],
        [20,"The Tourist Trap"],
        [30,"Elemental Workshop II"],
        [30,"One Small Favour"],
        [40,"Family Crest"],
        [45,"Swan Song"],
        [50,"Between a Rock...*"],
        [50,"Cabin Fever"],
        [50,"Legends' Quest"],
        [60,"The Fremennik Exiles"],
        [65,"Devious Minds*"],
        [70,"Dragon Slayer II"],
        [70,"Song of the Elves"],
        [99,"Skillcape"]
    ].sort();

    var strengthList = [
        [20,"Zogre Flesh Eaters"],
        [40,"Darkness of Hallowvale"],
        [50,"Legends' Quest"],
        [99,"Skillcape"]
    ].sort();

    var thievingList = [
        [13,"The Lost Tribe"],
        [14,"The Giant Dwarf"],
        [15,"Cold War"],
        [15,"Watchtower"],
        [17,"The Hand in the Sand"],
        [21,"Tribal Totem"],
        [22,"Darkness of Hallowvale"],
        [23,"Death to the Dorgeshuun"],
        [25,"Creature of Fenkenstrain"],
        [25,"The Dig Site"],
        [25,"The Golem"],
        [30,"The Feud"],
        [30,"The Slug Menace"],
        [37,"Spirits of the Elid*"],
        [40,"Fairytale II - Cure a Queen"],
        [42,"Temple of Ikov"],
        [50,"Legends' Quest"],
        [50,"Mourning's End Part I"],
        [53,"Desert Treasure"],
        [55,"Monkey Madness II"],
        [58,"Grim Tales*"],
        [60,"Dragon Slayer II"],
        [99,"Skillcape"]
    ].sort();

    var woodcuttingList = [
        [10,"My Arm's Big Adventure"],
        [35,"Animal Magnetism"],
        [36,"Lost City"],
        [40,"The Fremennik Trials"],
        [50,"Legends' Quest"],
        [50,"Olaf's Quest"],
        [55,"Lunar Diplomacy"],
        [56,"The Fremennik Isles"],
        [70,"Song of the Elves"],
        [71,"Grim Tales*"],
        [99, "Skillcape"]
    ].sort();