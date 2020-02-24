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

function returnCheckedSkill() {
        var skills = document.getElementsByClassName("radio-skill");
        var i;
        var checked;
        for (i = 0; i < skills.length; i++) {
            if (skills[i].checked) {
                checked = skills[i].value;
            }
        }
    return checked;
    

    }



//function mark(id) {
//    var images = document.getElementsByTagName("td");
//    var i;
//    for (i = 0; i < images.length; i++) {
//        images[i].style.border = "1px solid black";
//    }
//    
//    
//    document.getElementById(id).style.border = "4px solid yellow";
//    
//}



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
        var output = mainProgram(skill);
        var reqLvl = output[0];
        var task = output[1];
        
        
        arrayThatHoldsAllLevels[i] = [reqLvl,skill,task];
    }
    arrayThatHoldsAllLevels = arrayThatHoldsAllLevels.sort();
    return arrayThatHoldsAllLevels[0];

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


function getSkill() {
    
    //var skillName = document.getElementById("skills-panel").value;
    var levelsList;
    var choice = setList();
    var skillName = returnCheckedSkill();
    
    
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
                    levelsList = agilityQuests.concat(agilityDiary).sort(function(a, b){return a[0] - b[0]});
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
                    levelsList = attackQuests.concat(attackDiary).sort(function(a, b){return a[0] - b[0]});
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
                    levelsList = constructionQuests.concat(constructionDiary).sort(function(a, b){return a[0] - b[0]});
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
                    levelsList = cookingQuests.concat(cookingDiary).sort(function(a, b){return a[0] - b[0]});
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
                    levelsList = craftingQuests.concat(craftingDiary).sort(function(a, b){return a[0] - b[0]});
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
                    levelsList = defenceQuests.concat(defenceDiary).sort(function(a, b){return a[0] - b[0]});
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
                    levelsList = farmingQuests.concat(farmingDiary).sort(function(a, b){return a[0] - b[0]});
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
                    levelsList = firemakingQuests.concat(firemakingDiary).sort(function(a, b){return a[0] - b[0]});
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
                    levelsList = fishingQuests.concat(fishingDiary).sort(function(a, b){return a[0] - b[0]});
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
                    levelsList = fletchingQuests.concat(fletchingDiary).sort(function(a, b){return a[0] - b[0]});
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
                    levelsList = herbloreQuests.concat(herbloreDiary).sort(function(a, b){return a[0] - b[0]});
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
                    levelsList = hitpointsQuests.concat(hitpointsDiary).sort(function(a, b){return a[0] - b[0]});
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
                    levelsList = hunterQuests.concat(hunterDiary).sort(function(a, b){return a[0] - b[0]});
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
                    levelsList = magicQuests.concat(magicDiary).sort(function(a, b){return a[0] - b[0]});
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
                    levelsList = miningQuests.concat(miningDiary).sort(function(a, b){return a[0] - b[0]});
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
                    levelsList = prayerQuests.concat(prayerDiary).sort(function(a, b){return a[0] - b[0]});
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
                    levelsList = rangedQuests.concat(rangedDiary).sort(function(a, b){return a[0] - b[0]});
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
                    levelsList = runecraftQuests.concat(runecraftDiary).sort(function(a, b){return a[0] - b[0]});
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
                    levelsList = slayerQuests.concat(slayerDiary).sort(function(a, b){return a[0] - b[0]});
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
                    levelsList = smithingQuests.concat(smithingDiary).sort(function(a, b){return a[0] - b[0]});
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
                    levelsList = strengthQuests.concat(strengthDiary).sort(function(a, b){return a[0] - b[0]});
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
                    levelsList = thievingQuests.concat(thievingDiary).sort(function(a, b){return a[0] - b[0]});
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
                    levelsList = woodcuttingQuests.concat(woodcuttingDiary).sort(function(a, b){return a[0] - b[0]});
                    break;
            }   
            break;
            
        }
    

	return levelsList;
}
        
        


function writeAllValues() {
    var skillName = returnCheckedSkill();
    var mainValues = mainProgram();
    var requiredLevel = mainValues[0];
    var task = mainValues[1];
    var extra = mainValues[2];
    var TTL = calculateTTL(skillName);
    var lowest = calculateAllSkills();
    
    var xpRequired = numberWithCommas(betweenTwoLevels(getCurrentLevel(), requiredLevel));
    
    document.getElementsByTagName("p")[0].innerHTML="Train " + skillName + " to level " +"<span style='background-color:#447050; color:white; font-weight:bold; padding:2px; border-radius:6px;'>"+ requiredLevel+"</span>" + " for " + task;
    
    document.getElementsByTagName("p")[1].innerHTML="EXP required: " + xpRequired;
        
    document.getElementsByTagName("p")[2].innerHTML="Estimated TTL: " + TTL;
    
    document.getElementById("testing").innerHTML=returnCheckedSkill();
    
//    document.getElementById("lowest-level").innerHTML="Train "+lowest[1]+" to "+lowest[0]+" for "+lowest[2];


}


function mainProgram() {
    var currentLevel = getCurrentLevel();
    var checked = returnCheckedSkill();
    var skillName = checked;

    
    var requiredLevel;
	var i;
    var levelsList = getSkill();
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


    var constructionDiary = [
        [16,"Falador - Easy","Find out what your family crest is from Sir Renitee"],
        [16,"Falador - Hard","Change your family crest to the Saradomin symbol"],
        [20,"Desert - Medium", "Teleport to Pollnivneach with a redirected Teleport to House tablet"],
        [25,"Kourend & Kebos - Easy","Enter your player-owned house from Hosidius."],
        [37,"Fremennik - Medium","Pick up your Pet rock from your POH Menagerie"],
        [50,"Ardougne - Hard","Enter your POH from Yanille"],
        [50,"Kandarin - Hard", "Have the Seers' Estate agent decorate your house with Fancy Stone"],
        [50,"Morytania - Hard","Enter the Kharyrll portal in your POH"],
        [50,"Varrock - Hard","Have the Varrock Estate agent decorate your house with Fancy Stone"],
        [65,"Western Provinces - Hard","Build an Isafdar painting in your POH Quest Hall"],
        [78,"Desert - Elite","Speak to the Kq head in your POH"],  
    ].sort(function(a, b){return a - b});


    // COOKING 

    var cookingQuests = [
        [10, "Recipe for Disaster - Beginning",""],
        [20, "Ghosts Ahoy",""],
        [22, "Forgettable Tale of a Drunken Dwarf",""],
        [25, "Recipe for Disaster - Evil Dave subquest",""],
        [30, "Big Chompy Bird Hunting",""],
        [30, "Tai Bwo Wannai Trio",""],
        [31, "Recipe for Disaster - Pirate Pete",""],
        [40, "Recipe for Disaster - Lumbridge Guide subquest",""],
        [41, "Recipe for Disaster - Skrach Uglogwee subquest",""],
        [53, "Heroes' Quest*",""],
        [62, "Swan Song",""],
        [70, "Recipe for Disaster - Awowogei subquest*",""],
        [99, "Skillcape",""]
    ];

    var cookingDiary = [
        [12,"Morytania - Easy","Cook a Thin snail on the Port Phasmatys range"],
        [16,"Karamja - Medium","Cook a Spider on a stick"],
        [30,"Karamja - Hard","Cook a Karambwan thoroughly"],
        [40,"Morytania - Medium","Complete a game of Trouble Brewing"],
        [42,"Western Provinces - Medium","Make a Chocolate bomb at the Grand Tree"],
        [43,"Kandarin - Medium","Catch and cook a Bass in Catherby"],
        [62,"Western Provinces - Hard","Catch and cook a Monkfish in Piscatoris"],
        [80,"Kandarin - Elite","Fish and cook 5 Sharks in Catherby using the Cooking gauntlets"],
        [84,"Kourend & Kebos - Elite","Catch an anglerfish and cook it whilst in Great Kourend."],
        [85,"Desert - Elite","Bake a Wild pie at the Nardah clay oven"],
        [90,"Wilderness - Elite","Fish and cook a Dark crab in the Resource Area"],
        [91,"Ardougne - Elite","Catch a Manta ray in the Fishing Trawler and cook it in Port Khazard"],
        [95,"Varrock - Elite","Bake a Summer pie in the Cooking Guild"] 
    ];

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

    var craftingDiary = [
        [8,"Varrock - Easy","Spin a Bowl on the pottery wheel and fire in the oven in Barbarian Village"],
        [10,"Kandarin - Hard","Create a Yew longbow from scratch around Seers' Village"],
        [10,"Ardougne - Elite","Make a Rune crossbow yourself from scratch within Witchaven or Yanille"],
        [15,"Morytania - Easy","Craft any Snelm from scratch in Morytania"],
        [23,"Fremennik - Easy","Craft a Tiara from scratch in Rellekka"],
        [30,"Kourend & Kebos - Medium","Repair a crane within Port Piscarilius."],
        [36,"Falador - Medium","Craft a Fruit basket on the Falador farm loom"],
        [38,"Lumbridge & Draynor","Craft a Coif in the Lumbridge cow pen (eastern cows)"],
        [38,"Kourend & Kebos","Craft one or more blood runes."],
        [40,"Falador - Medium","Mine some Gold ore at the Crafting Guild"],
        [49,"Ardougne - Medium","Claim buckets of sand from Bert in Yanille."],
        [70,"Lumbridge & Draynor - Hard","Craft, string, and enchant an Amulet of power in Lumbridge"],
        [80,"Fremmenik - Elite","Craft a Dragonstone amulet in the Neitiznot furnace"],
        [84,"Morytania - Elite","Craft a Black dragonhide body in Canifis bank"],
        [85,"Kandarin - Elite","Construct a pyre ship from Magic logs"]
        
    ];

    // DEFENCE

    var defenceQuests = [
        [20,"Rag and Bone Man II"],
        [30,"Between a Rock..."],
        [40,"Lunar Diplomacy"],
        [65,"King's Ransom"],
        [99, "Skillcape"]
    ].sort(function(a, b){return a - b});

    var defenceDiary = [
        [10,"Desert - Hard","Slay a Dust devil in the desert cave with a Slayer helmet equipped."],
        [20,"Falador - Medium","Pray at the Altar of Guthix in Taverley whilst wearing full Initiate armour"],
        [30,"Falador - Hard","Recharge your prayer in Port Sarim church while wearing full Proselyte"],
        [50,"Falador - Hard","Equip a Dwarven helmet within the Dwarven mines"],
        [50,"Kandarin - Hard","Purchase and equip a Granite body from Barbarian Assault"],
        [70,"Kandarin - Hard","Enter the Seers' Village courthouse with Piety turned on"],
        [70,"Morytania - Hard","Pray at the Altar of Nature with Piety activated"],
        [70,"Morytania - Elite","Loot the Barrows chest while wearing any complete Barrows set"],   
    ];





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


    var farmingDiary = [
        [13,"Kandarin - Easy"],
        [23,"Falador - Medium"],
        [23,"Morytania - Easy"],
        [26,"Kandarin - Medium"],
        [27,"Karamja - Medium"],
        [31,"Ardougne - Medium"],
        [45,"Kourend & Kebos - Medium"],
        [47,"Morytania - Hard"],
        [53,"Morytania - Hard"],
        [63,"Lumbridge & Draynor"],
        [68,"Varrock - Hard"],
        [68,"Ardougne - Hard"],
        [68,"Karamja - Elite"],
        [68,"Western Provinces - Hard"],
        [70,"Ardougne - Hard"],
        [72,"Karamja - Elite"],
        [74,"Kourend & Kebos - Hard"],
        [75,"Western Provinces - Elite","Have Prissy Scilla protect your Magic tree"],
        [79,"Kandarin - Elite","Pick some Dwarf weed from the herb patch at Catherby"],
        [85,"Ardougne - Elite","Pick some Torstol from the patch north of East Ardougne"],
        [85,"Kourend & Kebos","Create your own battlestaff from scratch within the Farming Guild."],
        [91,"Falador - Elite"]
        
    ];






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


    var firemakingDiary = [
        [15,"Fremennik - Easy"],
        [15,"Lumbridge & Draynor - Easy"],
        [30,"Falador - Medium"],
        [35,"Western Provinces - Medium"],
        [40,"Varrock - Medium"],
        [49,"Falador - Medium"],
        [50,"Ardougne - Medium"],
        [50,"Kourend & Kebos - Medium"],
        [50,"Morytania - Hard"],
        [50,"Western Provinces - Hard"],
        [60,"Desert - Hard"],
        [60,"Varrock - Hard"],
        [65,"Kandarin - Hard"],
        [65,"Lumbridge & Draynor - Hard"],
        [75,"Wilderness - Elite","Cut and burn some Magic logs in the Resource Area"],
        [80,"Morytania - Elite","Cremate any Shade remains on a Magic pyre"],
        [85,"Kandarin - Elite","Construct a pyre ship from Magic logs"]
        
    ];



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

    var fishingDiary = [
        [15,"Lumbridge & Draynor - Easy"],
        [15,"Ardougne - Easy"],
        [16,"Kandarin - Easy"],
        [20,"Kourend & Kebos - Easy"],
        [20,"Varrock - Easy"],
        [30,"Lumbridge & Draynor - Medium"],
        [43,"Kourend & Kebos - Medium"],
        [46,"Kandarin - Medium"],
        [46,"Western Provinces - Medium"],
        [53,"Wilderness - Hard"],
        [62,"Western Provinces - Hard"],
        [65,"Karamja - Medium"],
        [70,"Kandarin - Hard","Catch a Leaping sturgeon"],
        [76,"Kandarin - Elite","Fish and cook 5 Sharks in Catherby using the Cooking gauntlets"],
        [81,"Ardougne - Elite","Catch a manta ray in the Fishing Trawler and cook it in Port Khazard"],
        [82,"KOurend & Kebos - Elite","Catch an anglerfish and cook it whilst in Great Kourend."],
        [85,"Wilderness - Elite","Fish and cook a Dark crab in the Resource Area"],
        [96,"Morytania - Elite","	Catch a Shark in Burgh de Rott with your bare hands"]
        
    ];



    var fletchingQuests = [
        [5,"Big Chompy Bird Hunting"],
        [10,"The Tourist Trap"],
        [25,"The Fremennik Trials*"],
        [30,"Zogre Flesh Eaters"],
        [50,"Devious Minds"],
        [99, "Skillcape"]
    ].sort(function(a, b){return a - b});

    var fletchingDiary = [
        [5,"Western Provinces - Various"],
        [20,"Western Provinces - Easy"],
        [40,"Kourend & Kebos - Elite"],
        [50,"Kandarin - Medium"],
        [69,"Ardougne - Elite"],
        [70,"Kandarin - Hard"],
        [81,"Varrock - Elite"],
        [85,"Western Provinces - Elite"],
        [95,"Desert - Elite"]
    ];




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

    var herbloreDiary = [
        [12,"Kourend & Kebos - Easy"],
        [22,"Morytania - Medium"],
        [36,"Desert - Medium"],
        [48,"Kandarin - Medium"],
        [66,"Fremennik - Hard"],
        [81,"Falador - Elite"],
        [86,"Kandarin - Elite"],
        [87,"Karamja - Elite"],
        [90,"Varrock - Eite"]
        
    ];


    var hitpointsQuests = [[50,"Dragon Slayer II"], [99, "Skillcape"]];
    var hitpointsDiary =[[70,"Fremennik - Elite"]];

    var hunterQuests = [
        [10,"Cold War"],
        [12,"The Ascent of Arceuus"],
        [27,"Eagles' Peak"],
        [60,"Monkey Madness II"],
        [70," Song of the Elves"],
        [99, "Skillcape"]
    ].sort(function(a, b){return a - b});

    var hunterDiary = [
        [5,"Desert - Easy"],
        [9,"Western Provinces - Easy"],
        [11,"Fremennik - Easy"],
        [29,"Morytania - Medium"],
        [31,"Western Provinces - Medium"],
        [35,"Fremennik - Medium"],
        [35,"Kourend & Kebos - Medium"],
        [41,"Karamja - Medium"],
        [42,"Lumbridge & Draynor - Medium"],
        [47,"Desert - Medium"],
        [53,"Kourend & Kebos - Medium"],
        [55,"Fremennik - Hard"],
        [59,"Ardougne - Hard"],
        [66,"Varrock - Hard"],
        [67,"Wilderness - Hard"],
        [69,"Western Provinces - Hard"]
        
    ];

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

    var magicDiary = [
        [21,"Wilderness	Easy"],
        [25,"Varrock	Medium"],
        [31,"Lumbridge & Draynor	Medium"],
        [33,"Falador	Medium"],
        [37,"Falador	Medium"],
        [45,"Kandarin	Medium"],
        [49,"Varrock	Medium"],
        [50,"Ardougne	Medium"],
        [51,"Ardougne	Medium"],
        [54,"Varrock	Hard"],
        [56,"Kandarin	Hard"],
        [57,"Lumbridge & Draynor	Hard"],
        [58,"Ardougne	Hard"],
        [60,"Lumbridge & Draynor	Hard"],
        [60,"Wilderness	Medium"],
        [60,"Wilderness	Hard"],
        [61,"Fremennik	Hard"],
        [64,"Western Provinces	Hard"],
        [66,"Ardougne	Hard"],
        [66,"Kourend & Kebos	Hard"],
        [66,"Morytania	Hard"],
        [66,"Wilderness	Hard"],
        [68,"Desert	Hard"],
        [72,"Fremennik	Hard"],
        [83,"Morytania	Elite"],
        [86,"Varrock	Elite"],
        [87,"Kandarin	Elite"],
        [90,"Kourend & Kebos	Elite"],
        [94,"Ardougne	Elite"],
        [94,"Desert	Elite"],
        [96,"Wilderness	Elite"]
        
    ];





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

    var miningDiary = [
        [10,"Falador	Easy"],
        [15,"Kourend & Kebos	Easy"],
        [15,"Lumbridge & Draynor	Easy"],
        [15,"Varrock	Easy"],
        [15,"Wilderness	Easy"],
        [15,"Western Provinces	Easy"],
        [23,"	Fremennik	Easy"],
        [30,"Fremennik	Medium"],
        [30,"Kandarin	Medium"],
        [38,"Kourend & Kebos	Elite"],
        [40,"Falador	Medium"],
        [40,"Fremennik	Medium"],
        [40,"Karamja	Easy"],
        [40,"Karamja	Medium"],
        [40,"Western Provinces	Medium"],
        [42,"Kourend & Kebos	Medium"],
        [45,"Desert	Hard"],
        [52,"Karamja	Hard"],
        [55,"Wilderness	Medium"],
        [55,"Morytania	Hard"],
        [60,"Falador	Hard"],
        [65,"Kourend & Kebos	Hard"],
        [70,"Fremennik	Hard"],
        [70,"Western Provinces	Hard"],
        [85,"Wilderness	Elite","	Smith a Rune scimitar from scratch in the Resource Area"],  
    ];



    var prayerQuests = [
        [25, "Another Slice of H.A.M."],
        [31,"Scorpion Catcher"],
        [42,"Legends' Quest"],
        [43,"Enakhra's Lament"],
        [47,"Rum Deal*"],
        [50,"The Great Brain Robbery"],
        [99,"Skillcape"]
    ].sort(function(a, b){return a - b});

    var prayerDiary = [
        [10,"Falador	Medium"],
        [52,"	Lumbridge & Draynor	Hard"],
        [52,"Varrock	Hard"],
        [70,"Falador	Hard"],
        [70,"Kandarin	Hard"],
        [70,"Morytania	Hard"],
        [85,"Desert	Elite"]
    ];

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

    var rangedDiary = [
        [30,"Western Provinces	Various"],
        [40,"Kandarin	Medium"],
        [50,"Lumbridge & Draynor	Medium	"],
        [70,"Fremennik	Elite"],
        [70,"Lumbridge & Draynor	Elite"],
        [70,"Western Provinces	Hard"]
    ];




    var runecraftQuests = [
        [13,"The Eyes of Glouphrie"],
        [30,"The Slug Menace"],
        [35,"What Lies Below"],
        [50,"Devious Minds"],
        [55,"The Fremennik Exiles"],
        [99,"Skillcape"]
    ].sort(function(a, b){return a - b});


    var runecraftDiary = [
        [5,"Lumbridge & Draynor	Easy"],
        [9,"Varrock	Easy"],
        [23,"Lumbridge & Draynor	Medium"],
        [44,"Karamja	Hard"],
        [56,"Falador	Hard"],
        [59,"	Lumbridge & Draynor	Hard"],
        [65,"Ardougne	Hard"],
        [76,"Lumbridge & Draynor	Elite"],
        [77,"Kourend & Kebos	Elite"],
        [78,"Varrock	Elite"],
        [82,"Fremennik	Elite"],
        [88,"Falador	Elite"],
        [91,"Karamja	Elite"]
    ];



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

    var slayerDiary = [
        [7,"Lumbridge & Draynor	Easy"],
        [15,"Morytania	Easy"],
        [22,"Desert	Medium"],
        [32,"Falador	Medium"],
        [40,"Morytania	Medium"],
        [42,"Morytania	Medium"],
        [47,"Fremennik	Medium"],
        [50,"Karamja	Hard"],
        [50,"Wilderness	Medium"],
        [58,"Morytania	Hard"],
        [62,"Kourend & Kebos	Hard"],
        [65,"Desert	Hard"],
        [68,"Wilderness	Hard"],
        [72,"Falador	Hard"],
        [83,"Fremennik	Elite"],
        [83,"Wilderness	Elite"],
        [85,"Morytania	Elite"],
        [93,"Western Provinces	Elite","Kill the thermonuclear smoke devil"],
        [95,"	Kourend & Kebos	Elite","Kill a hydra in the Karuulm Slayer Dungeon."]
        
    ];




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

    var smithingDiary = [
        [13,"Falador	Easy"],
        [35,"Morytania	Medium"],
        [50,"Wilderness	Medium"],
        [60,"Ardougne	Hard"],
        [60,"Fremennik	Hard"],
        [68,"Ardougne	Hard"],
        [68,"Desert	Hard"],
        [70,"Kourend & Kebos	Hard"],
        [75,"Kandarin	Hard"],
        [75,"Wilderness	Hard"],
        [88,"Lumbridge & Draynor	Elite","Smith an Adamant platebody down Draynor sewer"],
        [89,"Varrock	Elite","Smith and fletch 10 Rune darts within Varrock"],
        [90,"Kandarin	Elite","Smith a Rune hasta at Otto's Grotto"],
        [91,"Ardougne	Elite","Make a Rune crossbow yourself from scratch within Witchaven or Yanille"]     
    ];

    var strengthQuests = [
        [20,"Zogre Flesh Eaters"],
        [40,"Darkness of Hallowvale"],
        [50,"Legends' Quest"],
        [99,"Skillcape"]
    ].sort(function(a, b){return a - b});

    var strengthDiary = [
        [45,"Desert	Medium"],
        [45,"Kandarin	Hard"],
        [50,"Kandarin	Hard"],
        [50,"Karamja	Hard"],
        [60,"Wilderness	Medium"],
        [60,"Wilderness	Elite"],
        [70,"Fremennik	Elite"],
        [70,"Lumbridge & Draynor	Elite"],
        [76,"Morytania	Elite"]
    ];

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


    var thievingDiary = [
        [5,"Ardougne	Easy"],
        [5,"Fremennik	Easy"],
        [5,"Varrock	Easy"],
        [21,"Desert	Easy"],
        [25,"Desert	Medium"],
        [25,"Kourend & Kebos	Easy"],
        [38,"Ardougne	Medium"],
        [38,"Lumbridge & Draynor	Medium"],
        [40,"Falador	Medium"],
        [42,"Fremennik	Medium"],
        [47,"Kandarin	Medium"],
        [49,"Kourend & Kebos	Hard"],
        [50,"Falador	Hard"],
        [50,"Karamja	Hard"],
        [65,"Desert	Hard	"],
        [72,"Ardougne	Hard"],
        [75,"Fremennik	Hard"],
        [75,"Western Provinces	Hard"],
        [78,"Lumbridge & Draynor	Elite"],
        [80,"Ardougne	Elite"],
        [82,"Ardougne	Elite"],
        [84,"Wilderness	Elite"],
        [85,"Western Provinces	Elite"],
        [91,"Desert	Elite"]
    ];

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

    var woodcuttingDiary = [
        [10,"Karamja	Medium"],
        [15,"Fremennik	Easy"],
        [15,"Lumbridge & Draynor	Easy"],
        [15,"Karamja	Hard"],
        [15,"Karamja	Hard"],
        [30,"Falador	Medium"],
        [30,"Lumbridge & Draynor	Medium"],
        [35,"Desert	Medium"],
        [35,"Karamja	Medium"],
        [35,"Western Provinces	Medium"],
        [45,"Morytania	Medium"],
        [50,"Morytania	Hard"],
        [50,"Karamja	Medium"],
        [50,"	Kourend & Kebos	Medium"],
        [50,"Western Provinces	Hard"],
        [56,"Fremennik	Hard"],
        [57,"Lumbridge & Draynor	Hard"],
        [57,"Varrock	Hard"],
        [60,"Kandarin	Hard"],
        [60,"Kourend & Kebos	Hard"],
        [60,"Varrock	Hard"],
        [60,"Varrock	Hard"],
        [61,"Wilderness	Medium"],
        [75,"Lumbridge & Draynor	Elite","Chop some Magic logs at the Mage Training Arena"],
        [75,"Wilderness	Elite","Cut and burn some Magic logs in the Resource Area"],
        [75,"Falador	Elite","Find at least 3 Magic roots at once when digging up your Magic tree in Falador"],
        [90,"Kourend & Kebos	Elite","Chop some redwood logs."]
        
    ];





