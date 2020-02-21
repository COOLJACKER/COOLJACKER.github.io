function setList() {
    var choices = document.getElementsByName("choose"); 
    var choice;
    
    for(var i = 0; i < choices.length; i++){
    if(choices[i].checked){
        choice = choices[i].value;
        }
    }
    //document.getElementById("testing").innerHTML=choice;
    return choice;
}




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
    
        if (skillName == "Construction") {
        if (currentLevel < 20) {
            xpRate = 20000;           
        } else if (20 <= currentLevel && currentLevel < 34) {
            xpRate = 45000;
        } else if (20 <= currentLevel && currentLevel < 34) {
            xpRate = 200000;
        } else if (33 <= currentLevel && currentLevel < 51) {
            xpRate = 200000;
        } else if (51 <= currentLevel && currentLevel < 74) {
            xpRate = 300000;
        } else if (74 <= currentLevel && currentLevel < 99) {
            xpRate = 450000;
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

function decreaseBy5() {
    var currentLevel = Number(document.getElementById("level").value);
    currentLevel = currentLevel - 5;
    document.getElementById("level").value = currentLevel;

}

function increaseBy1() {
    var currentLevel = Number(document.getElementById("level").value);
    currentLevel = currentLevel + 1;
    document.getElementById("level").value = currentLevel;

}


function decreaseBy1() {
    var currentLevel = Number(document.getElementById("level").value);
    currentLevel = currentLevel - 1;
    document.getElementById("level").value = currentLevel;

}


function getSkill(skillName) {
    
    //var skillName = document.getElementById("skills-panel").value;
    var levelsList;
    var choice = setList();
    
    
    switch(skillName) {
        case "Agility":
            switch(choice) {
                case "diary-only":
                  levelsList = agilityDiary;
                    break;
                    
                case "quests-only":
                    levelsList = agilityQuests;
                    break;
                    
                case "quest+diary":
                    levelsList = agilityQuests.concat(agilityDiary).sort(function(a, b){return a - b});
                    break;
            } 
            break;
            
        case "Attack":
            switch(choice) {
                case "diary-only":
                  levelsList = attackDiary;
                    break;
                    
                case "quests-only":
                    levelsList = attackQuests;
                    break;
                    
                case "quest+diary":
                    levelsList = attackQuests.concat(attackDiary).sort(function(a, b){return a - b});
                    break;
            }   
            break;
            
        case "Construction":
            switch(choice) {
                case "diary-only":
                  levelsList = constructionDiary;
                    break;
                    
                case "quests-only":
                    levelsList = constructionQuests;
                    break;
                    
                case "quest+diary":
                    levelsList = constructionQuests.concat(constructionDiary).sort(function(a, b){return a - b});
                    break;
            }   
            break;

        case "Cooking":
            switch(choice) {
                case "diary-only":
                  levelsList = cookingDiary;
                    break;
                    
                case "quests-only":
                    levelsList = cookingQuests;
                    break;
                    
                case "quest+diary":
                    levelsList = cookingQuests.concat(cookingDiary).sort(function(a, b){return a - b});
                    break;
            }   
            break;
    
    
        case "Crafting":
            switch(choice) {
                case "diary-only":
                  levelsList = craftingDiary;
                    break;
                    
                case "quests-only":
                    levelsList = craftingQuests;
                    break;
                    
                case "quest+diary":
                    levelsList = craftingQuests.concat(craftingDiary).sort(function(a, b){return a - b});
                    break;
            }   
            break;
    

        case "Defence":
            switch(choice) {
                case "diary-only":
                  levelsList = defenceDiary;
                    break;
                    
                case "quests-only":
                    levelsList = defenceQuests;
                    break;
                    
                case "quest+diary":
                    levelsList = defenceQuests.concat(defenceDiary).sort(function(a, b){return a - b});
                    break;
            }   
            break;
    
    
        case "Farming":
            switch(choice) {
                case "diary-only":
                  levelsList = farmingDiary;
                    break;
                    
                case "quests-only":
                    levelsList = farmingQuests;
                    break;
                    
                case "quest+diary":
                    levelsList = farmingQuests.concat(farmingDiary).sort(function(a, b){return a - b});
                    break;
            }   
            break;
            
        case "Firemaking":
            switch(choice) {
                case "diary-only":
                  levelsList = firemakingDiary;
                    break;
                    
                case "quests-only":
                    levelsList = firemakingQuests;
                    break;
                    
                case "quest+diary":
                    levelsList = firemakingQuests.concat(firemakingDiary).sort(function(a, b){return a - b});
                    break;
            }   
            break;
    
        case "Fishing":
            switch(choice) {
                case "diary-only":
                  levelsList = fishingDiary;
                    break;
                    
                case "quests-only":
                    levelsList = fishingQuests;
                    break;
                    
                case "quest+diary":
                    levelsList = fishingQuests.concat(fishingDiary).sort(function(a, b){return a - b});
                    break;
            }   
            break;
            
        case "Fletching":
            switch(choice) {
                case "diary-only":
                  levelsList = fletchingDiary;
                    break;
                    
                case "quests-only":
                    levelsList = fletchingQuests;
                    break;
                    
                case "quest+diary":
                    levelsList = fletchingQuests.concat(fletchingDiary).sort(function(a, b){return a - b});
                    break;
            }   
            break;
        
        case "Herblore":
            switch(choice) {
                case "diary-only":
                  levelsList = herbloreDiary;
                    break;
                    
                case "quests-only":
                    levelsList = herbloreQuests;
                    break;
                    
                case "quest+diary":
                    levelsList = herbloreQuests.concat(herbloreDiary).sort(function(a, b){return a - b});
                    break;
            }   
            break;
            
        case "Hitpoints":
            switch(choice) {
                case "diary-only":
                  levelsList = hitpointsDiary;
                    break;
                    
                case "quests-only":
                    levelsList = hitpointsQuests;
                    break;
                    
                case "quest+diary":
                    levelsList = hitpointsQuests.concat(hitpointsDiary).sort(function(a, b){return a - b});
                    break;
            }   
            break;
            
        case "Hunter":
            switch(choice) {
                case "diary-only":
                  levelsList = hunterDiary;
                    break;
                    
                case "quests-only":
                    levelsList = hunterQuests;
                    break;
                    
                case "quest+diary":
                    levelsList = hunterQuests.concat(hunterDiary).sort(function(a, b){return a - b});
                    break;
            }   
            break;
            
        case "Magic":
            switch(choice) {
                case "diary-only":
                  levelsList = magicDiary;
                    break;
                    
                case "quests-only":
                    levelsList = magicQuests;
                    break;
                    
                case "quest+diary":
                    levelsList = magicQuests.concat(magicDiary).sort(function(a, b){return a - b});
                    break;
            }   
            break;
            
        case "Mining":
            switch(choice) {
                case "diary-only":
                  levelsList = miningDiary;
                    break;
                    
                case "quests-only":
                    levelsList = miningQuests;
                    break;
                    
                case "quest+diary":
                    levelsList = miningQuests.concat(miningDiary).sort(function(a, b){return a - b});
                    break;
            }   
            break;
            
        case "Prayer":
            switch(choice) {
                case "diary-only":
                  levelsList = prayerDiary;
                    break;
                    
                case "quests-only":
                    levelsList = prayerQuests;
                    break;
                    
                case "quest+diary":
                    levelsList = prayerQuests.concat(prayerDiary).sort(function(a, b){return a - b});
                    break;
            }   
            break;
            
        case "Ranged":
            switch(choice) {
                case "diary-only":
                  levelsList = rangedDiary;
                    break;
                    
                case "quests-only":
                    levelsList = rangedQuests;
                    break;
                    
                case "quest+diary":
                    levelsList = rangedQuests.concat(rangedDiary).sort(function(a, b){return a - b});
                    break;
            }   
            break;
            
        case "Runecraft":
            switch(choice) {
                case "diary-only":
                  levelsList = runecraftDiary;
                    break;
                    
                case "quests-only":
                    levelsList = runecraftQuests;
                    break;
                    
                case "quest+diary":
                    levelsList = runecraftQuests.concat(runecraftDiary).sort(function(a, b){return a - b});
                    break;
            }   
            break;
            
        case "Slayer":
            switch(choice) {
                case "diary-only":
                  levelsList = slayerDiary;
                    break;
                    
                case "quests-only":
                    levelsList = slayerQuests;
                    break;
                    
                case "quest+diary":
                    levelsList = slayerQuests.concat(slayerDiary).sort(function(a, b){return a - b});
                    break;
            }   
            break;
            
        case "Smithing":
            switch(choice) {
                case "diary-only":
                  levelsList = smithingDiary;
                    break;
                    
                case "quests-only":
                    levelsList = smithingQuests;
                    break;
                    
                case "quest+diary":
                    levelsList = smithingQuests.concat(smithingDiary).sort(function(a, b){return a - b});
                    break;
            }   
            break;
            
        case "Strength":
            switch(choice) {
                case "diary-only":
                  levelsList = strengthDiary;
                    break;
                    
                case "quests-only":
                    levelsList = strengthQuests;
                    break;
                    
                case "quest+diary":
                    levelsList = strengthQuests.concat(strengthDiary).sort(function(a, b){return a - b});
                    break;
            }   
            break;
            
        case "Thieving":
            switch(choice) {
                case "diary-only":
                  levelsList = thievingDiary;
                    break;
                    
                case "quests-only":
                    levelsList = thievingQuests;
                    break;
                    
                case "quest+diary":
                    levelsList = thievingQuests.concat(thievingDiary).sort(function(a, b){return a - b});
                    break;
            }   
            break;
            
        case "Woodcutting":
            switch(choice) {
                case "diary-only":
                  levelsList = woodcuttingDiary;
                    break;
                    
                case "quests-only":
                    levelsList = woodcuttingQuests;
                    break;
                    
                case "quest+diary":
                    levelsList = woodcuttingQuests.concat(woodcuttingDiary).sort(function(a, b){return a - b});
                    break;
            }   
            break;
            
        }

	return levelsList;
}
        
        


function writeAllValues(skillName) {
    var mainValues = mainProgram(skillName);
    var requiredLevel = mainValues[0];
    var task = mainValues[1];
    var extra = mainValues[2];
    var TTL = calculateTTL(skillName);
    
    var xpRequired = numberWithCommas(betweenTwoLevels(getCurrentLevel(), requiredLevel));
    
    document.getElementsByTagName("p")[0].innerHTML="Train " + skillName + " to level " +"<span style='background-color:#447050; color:white; font-weight:bold; padding:2px; border-radius:6px;'>"+ requiredLevel+"</span>" + " for " + task;
    
    document.getElementsByTagName("p")[1].innerHTML="EXP required: " + xpRequired;
        
    document.getElementsByTagName("p")[2].innerHTML="Estimated TTL: " + TTL;
    
    
    document.getElementById("testing").innerHTML=extra;

}


function mainProgram(skillName) {
    var currentLevel = getCurrentLevel();
    var skillName = skillName;
    
    var requiredLevel;
	var i;
    var levelsList = getSkill(skillName);
    var task;
    var extra;
    
	for (i = 0; i < levelsList.length; i++) {
        levelsListIndex = levelsList[i]
        levelsListTupleIndex0 = levelsListIndex[0];     // skill-level
        levelsListTupleIndex1 = levelsListIndex[1];     // quest or diary task
        levelsListTupleIndex2 = levelsListIndex[2];     // extra diary info

        if (currentLevel < levelsListTupleIndex0) {
        requiredLevel = levelsListTupleIndex0;
        task = levelsListTupleIndex1;
        extra  = levelsListTupleIndex2;
		break;
        }
    }  
    
    
    return [requiredLevel, task, extra];

    
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

    p1 = [10, "The Dig Site","Hello"];
    p2 = [13, "The Lost Tribe",""];
    p3 = [15, "Haunted Mine",""];
    p4 = [15, "Tai Bwo Wannai Trio",""];
    p5 = [15, "Troll Stronghold",""];
    p6 = [18, "The Depths of Despair",""];
    p7 = [20, "Mountain Daughter",""];
    p8 = [23, "Death to the Dorgeshuun",""];
    p9 = [25, "Ghosts Ahoy",""];
    p10 = [25, "The Grand Tree"];
    p11 = [25, "In Search of the Myreque",""];
    p12 = [25, "Watchtower",""];
    p13 = [26, "Darkness of Hallowvale",""];
    p14 = [28, "Troll Romance",""];
    p15 = [30, "Cold War",""];
    p16 = [32, "Shilo Village",""];
    p17 = [35, "Horror from the Deep",""];
    p18 = [36, "One Small Favour",""];
    p19 = [40, "The Fremennik Isles",""];
    p20 = [40, "Royal Trouble",""];
    p21= [42, "Cabin Fever",""];
    p22 = [48, "Recipe for Disaster - Awowogei subquest",""];
    p23 = [50, "Legend's Quest",""];
    p24 = [55, "Monkey Madness II",""];
    p25 = [56, "Regicide",""];
    p26 = [59, "Grim Tales",""];
    p27 = [60, "Dragon Slayer II",""];
    p28 = [68, "Making Friends with My Arm",""];
    p29 = [70, "Song of the Elves",""];
    p30 = [99, "Skillcape",""];

    var agilityQuests = [p1,p2,p3,p4,p5,p6,p7,p8,p9,p10,p11,p12,p13,p14,p15,p16,p17,p18,p19,p20,p21,p22,p23,p24,p25,p26,p27,p28,p29,p30];
    agilityQuests = agilityQuests.sort();

    var agilityDiary = [
        [9, "Falador - Easy", "Climb over the western Falador wall"],
        [10,"Karamja - Easy","fgdgfdfgdfgdf"],
        [10,"Lumbridge & Draynor - Easy"],
        [11,"Falador - Medium"],
        [12, "Karamja - Medium"],
        [12, "Karamja - Hard"],
        [13,"Varrock - Easy"],
        [15,"Karamja - Easy"],
        [15, "Wilderness - Easy"],
        [20,"Kandarin - Easy"],
        [20,"Lumbridge & Draynor - Medium"],
        [30,"Desert - Medium"],
        [30,"Varrock - Medium"],
        [35,"Kandarin - Medium"],
        [37, "Western Provinces - Medium"],
        [39,"Ardougne - Medium"],
        [40,"Morytania - Medium"],
        [42,"Falador - Medium"],
        [46, "Lumbridge & Draynor - Hard"],
        [48,"Western Provinces - Hard"],
        [49,"Kourend & Kebos - Medium"],
        [50,"Karamja - Hard"],
        [51,"Varrock - Hard"],
        [52,"Wilderness - Medium"],
        [56, "Western Provinces - Hard"],
        [60,"Wilderness - Medium"],
        [60,"Kandarin - Hard"],
        [60,"Kandarin - Elite"],
        [64, "Wilderness - Hard"],
        [65, "Morytania - Hard"],
        [70, "Fremennik - Elite"],
        [70,"Lumbridge & Draynor - Elite"],
        [71,"Morytania - Hard"],
        [80,"Falador - Elite"],
        [80,"Fremennik - Elite"],
        [85,"Western Provinces - Elite"],
        [90,"Ardougne - Elite"] 
    ].sort(function(a, b){return a - b});

    // ATTACK 

    p31 = [15, "Another slice of HAM",""];
    p32 = [20, "Holy Grail",""];
    p33 = [40, "A Taste of Hope",""];
    p34 = [42, "Western Provinces - Elite",""];
    p35 = [50, "Another slice of HAM",""];
    p36 = [99, "Skillcape",""];

    var attackQuests = [p31,p32,p33,p34,p35,p36];
    attackQuests = attackQuests.sort(function(a, b){return a - b});


    var attackDiary = [
        [50, "Ardougne - Medium", "Equip an Iban's upgraded staff or upgrade an Iban's staff."],
        [42, "Western Provinces - Elite", "Equip any complete void set."],
        [99, "Falador - Hard", "Enter the Warriors' Guild."],
    ].sort(function(a, b){return a - b});

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
    p46 = [99, "Skillcape"];

    var constructionQuests = [p37,p38,p39,p40,p41,p42,p43,p44,p45,p46];
    constructionQuests = constructionQuests.sort(function(a, b){return a - b});

    // COOKING 

    var cookingQuests = [
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
    ].sort(function(a, b){return a - b});


    // CRAFTING 

    var craftingQuests = [
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
    ].sort(function(a, b){return a - b});

    // DEFENCE

    var defenceQuests = [
        [20,"Rag and Bone Man II"],
        [30,"Between a Rock..."],
        [40,"Lunar Diplomacy"],
        [65,"King's Ransom"],
        [99, "Skillcape"]
    ].sort(function(a, b){return a - b});

    // FARMING 
    var farmingQuests = [
        [17,"Forgettable Tale of a Drunken Dwarf"],
        [25,"Garden of Tranquillity"],
        [29,"My Arm's Big Adventure"],
        [30,"Enlightened Journey"],
        [40,"Rum Deal*"],
        [45,"Grim Tales*"],
        [49,"Fairytale II - Cure a Queen*"],
        [70,"Song of the Elves"],
        [99, "Skillcape"]
    ].sort(function(a, b){return a - b});

    // FIREAMKING
    var firemakingQuests = [
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
    ].sort(function(a, b){return a - b});

    // FISHING
    var fishingQuests = [
        [5,"Tai Bwo Wannai Trio"],
        [10,"Fishing Contest"],
        [50,"Rum Deal*"],
        [53,"Heroes' Quest*"],
        [60,"The Fremennik Exiles"],
        [62,"Swan Song*"],
        [99, "Skillcape (provides unlimited teleports to either the Fishing Guild or Otto's Grotto)"]
    ].sort(function(a, b){return a - b});

    var fletchingQuests = [
        [5,"Big Chompy Bird Hunting"],
        [10,"The Tourist Trap"],
        [25,"The Fremennik Trials*"],
        [30,"Zogre Flesh Eaters"],
        [50,"Devious Minds"],
        [99, "Skillcape"]
    ].sort(function(a, b){return a - b});

    var herbloreQuests = [
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
    ].sort(function(a, b){return a - b});

    var hitpointsQuests = [[50,"Dragon Slayer II"], [99, "Skillcape"]];

    var hunterQuests = [
        [10,"Cold War"],
        [12,"The Ascent of Arceuus"],
        [27,"Eagles' Peak"],
        [60,"Monkey Madness II"],
        [70," Song of the Elves"],
        [99, "Skillcape"]
    ].sort(function(a, b){return a - b});

    var magicQuests = [
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
    ].sort(function(a, b){return a - b});

    var miningQuests = [
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
    ].sort(function(a, b){return a - b});

    var prayerQuests = [
        [25, "Another Slice of H.A.M."],
        [31,"Scorpion Catcher"],
        [42,"Legends' Quest"],
        [43,"Enakhra's Lament"],
        [47,"Rum Deal*"],
        [50,"The Great Brain Robbery"],
        [99,"Skillcape"]
    ].sort(function(a, b){return a - b});

    var rangedQuests = [
        [25,"Underground Pass"],
        [30,"Animal Magnetism"],
        [30,"Big Chompy Bird Hunting"],
        [30,"Zogre Flesh Eaters"],
        [37,"Spirits of the Elid*"],
        [40,"Cabin Fever"],
        [40,"Temple of Ikov"],
        [60,"Mourning's End Part I"],
        [99, "Skillcape"]
    ].sort(function(a, b){return a - b});

    var runecraftQuests = [
        [13,"The Eyes of Glouphrie"],
        [30,"The Slug Menace"],
        [35,"What Lies Below"],
        [50,"Devious Minds"],
        [55,"The Fremennik Exiles"],
        [99,"Skillcape"]
    ].sort(function(a, b){return a - b});

    var slayerQuests = [
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
    ].sort(function(a, b){return a - b});

    var smithingQuests = [
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
    ].sort(function(a, b){return a - b});

    var strengthQuests = [
        [20,"Zogre Flesh Eaters"],
        [40,"Darkness of Hallowvale"],
        [50,"Legends' Quest"],
        [99,"Skillcape"]
    ].sort(function(a, b){return a - b});

    var thievingQuests = [
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
    ].sort(function(a, b){return a - b});

    var woodcuttingQuests = [
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
    ].sort(function(a, b){return a - b});