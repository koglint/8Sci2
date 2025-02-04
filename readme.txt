Places where customised data, that may need to be adjusted for particular classes, is located:

bossBattleX.json
These files contain
    Names of the boss
    boss avatar image
    HP and SP gain and loss
    Questions for the boss battles
    Background image for the boss battle


bossData.json
This holds 
    the URl that each section of the Battle Arena will take the user, as well as 
    whether or not each section is active

customisation-options.json
This holds
    the image location, 
    image label, 
    tier and 
    cost of each avatar customisation piece

topicXData.json
This holds, for each topic:
    the number of lessons, 
    the learning intentions, 
    the SPs awarded per activity, 
    the URLs to each must should and could do activity
    the title awarded for completion of each lesson

topics.json
This file holds:
    the name of each topic, 
    the location of the topicXData.json file, and 
    the background image for the topic page

battleArena.html
This determines, in addition to bossData.json, which sections of the battle arena are active, their image, etc. Search for 'CUSTOM' to find the blocks of code that need to be updated whenever a boss battle is changed.