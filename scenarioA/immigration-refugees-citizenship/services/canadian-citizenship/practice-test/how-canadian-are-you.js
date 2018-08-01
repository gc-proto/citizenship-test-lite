var gQuestionsMax       = 20;
var gQuestionsBatch     = 1;
var gQuestionsShowing   = null;
var gQuestionsAnswers   = null;
var gQuestionsOriginal  = null;
var gQuestionsShuffled  = null;
var gQuizLanguage       = 'eng';
var gQuizTemplates      = null;
var gQuizTranslations   = null;
var firstQ = true;
var numChapters = 11;

var reviewChapter = null;
var chp1 = new Array();
var chp2 = new Array();
var chp3 = new Array();
var chp4 = new Array();
var chp5 = new Array();
var chp6 = new Array();
var chp7 = new Array();
var chp8 = new Array();
var chp9 = new Array();
var chp10 = new Array();
var chp11 = new Array();

var selectedAnswer = new Array();

var t = 0;
var timer = document.getElementById("timer");
var paused = false;
var counttime;
var onemin = 0;	


quizInitialize();
quizShowQuestions();

var $elm = $( "#updateTest" );
$elm.attr( "max", gQuestionsMax );

$( document ).on( "click vclick", "#update-progress", function() {
	calcNextProgress();
});	

$( document ).on( "click vclick", "#retakeBtn", function() {
	resetProg();
});

function quizGetQuestions()
{
    if( gQuestionsOriginal )
    {
        return gQuestionsOriginal;
    }

    // Data 
var qdata = new Array();

qdata[0] = new Array();
qdata[0]["question"] = "When did the Prime Minister, on behalf of the Government of Canada, officially apologize in the House of Commons for the Chinese Head Tax that was imposed on Chinese newcomers in 1885?";
qdata[0]["chapter"] = 1;
qdata[0]["moreinfo"] = "additional info on the question and answer";
qdata[0]["correct"] = 3;
qdata[0]["answers"] = new Array();
qdata[0]["answers"][1] = "July 1, 2006";
qdata[0]["answers"][2] = "June 1, 2006";
qdata[0]["answers"][3] = "June 22, 2006";
qdata[0]["answers"][4] = "September 22, 2006";

qdata[1] = new Array();
qdata[1]["question"] = "Canada currently claims ownership of the North Pole.";
qdata[1]["chapter"] = 1;
qdata[1]["moreinfo"] = "additional info on the question and answer";
qdata[1]["correct"] = 2;
qdata[1]["answers"] = new Array();
qdata[1]["answers"][1] = "True";
qdata[1]["answers"][2] = "False";

qdata[2] = new Array();
qdata[2]["question"] = "Canada's most densely populated province is:";
qdata[2]["chapter"] = 1;
qdata[2]["moreinfo"] = "additional info on the question and answer";
qdata[2]["correct"] = 4;
qdata[2]["answers"] = new Array();
qdata[2]["answers"][1] = "Ontario";
qdata[2]["answers"][2] = "Quebec";
qdata[2]["answers"][3] = "Saskatchewan";
qdata[2]["answers"][4] = "Prince Edward Island";

qdata[3] = new Array();
qdata[3]["question"] = "In what year did the Iroquois and the French finally make peace?";
qdata[3]["chapter"] = 1;
qdata[3]["moreinfo"] = "additional info on the question and answer";
qdata[3]["correct"] = 1;
qdata[3]["answers"] = new Array();
qdata[3]["answers"][1] = "1701";
qdata[3]["answers"][2] = "1943";
qdata[3]["answers"][3] = "1804";
qdata[3]["answers"][4] = "1900";

qdata[4] = new Array();
qdata[4]["question"] = "Whom does the governor general of Canada represent at the federal level?";
qdata[4]["chapter"] = 1;
qdata[4]["moreinfo"] = "additional info on the question and answer";
qdata[4]["correct"] = 2;
qdata[4]["answers"] = new Array();
qdata[4]["answers"][1] = "The prime minister";
qdata[4]["answers"][2] = "The Queen of Canada";
qdata[4]["answers"][3] = "The chief of staff";
qdata[4]["answers"][4] = "The deputy minister";

qdata[5] = new Array();
qdata[5]["question"] = "Which famous Canadian composed the Canadian national anthem?";
qdata[5]["chapter"] = 1;
qdata[5]["moreinfo"] = "additional info on the question and answer";
qdata[5]["correct"] = 2;
qdata[5]["answers"] = new Array();
qdata[5]["answers"][1] = "C\351line Dion";
qdata[5]["answers"][2] = "Calixa Lavall\351e";
qdata[5]["answers"][3] = "Bryan Adams";
qdata[5]["answers"][4] = "Gordon Lightfoot";

qdata[6] = new Array();
qdata[6]["question"] = "Where are the highest tides in the world?";
qdata[6]["chapter"] = 1;
qdata[6]["moreinfo"] = "additional info on the question and answer";
qdata[6]["correct"] = 2;
qdata[6]["answers"] = new Array();
qdata[6]["answers"][1] = "Hudson's Bay, between Ontario, Quebec, Manitoba and Nunavut";
qdata[6]["answers"][2] = "The Bay of Fundy, between Nova Scotia and New Brunswick";
qdata[6]["answers"][3] = "James Bay, between Ontario and Quebec";
qdata[6]["answers"][4] = "Cowichan Bay, British Columbia";

qdata[7] = new Array();
qdata[7]["question"] = "What is the only officially bilingual province in Canada?";
qdata[7]["chapter"] = 1;
qdata[7]["moreinfo"] = "additional info on the question and answer";
qdata[7]["correct"] = 4;
qdata[7]["answers"] = new Array();
qdata[7]["answers"][1] = "Alberta";
qdata[7]["answers"][2] = "Ontario";
qdata[7]["answers"][3] = "Quebec";
qdata[7]["answers"][4] = "New Brunswick";

qdata[8] = new Array();
qdata[8]["question"] = "How many oceans does Canada border?";
qdata[8]["chapter"] = 1;
qdata[8]["moreinfo"] = "additional info on the question and answer";
qdata[8]["correct"] = 2;
qdata[8]["answers"] = new Array();
qdata[8]["answers"][1] = "Two (Atlantic and Arctic)";
qdata[8]["answers"][2] = "Three (Atlantic, Pacific and Arctic)";
qdata[8]["answers"][3] = "Four (Atlantic, Pacific, Arctic, Indian)";
qdata[8]["answers"][4] = "None";

qdata[9] = new Array();
qdata[9]["question"] = "What is the approximate population of Canada?";
qdata[9]["chapter"] = 1;
qdata[9]["moreinfo"] = "additional info on the question and answer";
qdata[9]["correct"] = 3;
qdata[9]["answers"] = new Array();
qdata[9]["answers"][1] = "25,000,000";
qdata[9]["answers"][2] = "31,000,000";
qdata[9]["answers"][3] = "34,000,000";
qdata[9]["answers"][4] = "40,000,000";

qdata[10] = new Array();
qdata[10]["question"] = "Each year on November 11, Canadians celebrate Remembrance Day by pinning which type of flower to their jackets?";
qdata[10]["chapter"] = 1;
qdata[10]["moreinfo"] = "additional info on the question and answer";
qdata[10]["correct"] = 3;
qdata[10]["answers"] = new Array();
qdata[10]["answers"][1] = "Daisies";
qdata[10]["answers"][2] = "Roses";
qdata[10]["answers"][3] = "Poppies";
qdata[10]["answers"][4] = "Carnations";

qdata[11] = new Array();
qdata[11]["question"] = "Which of the following rivers is Canada's longest river?";
qdata[11]["chapter"] = 1;
qdata[11]["moreinfo"] = "additional info on the question and answer";
qdata[11]["correct"] = 1;
qdata[11]["answers"] = new Array();
qdata[11]["answers"][1] = "Mackenzie River";
qdata[11]["answers"][2] = "St. Lawrence River";
qdata[11]["answers"][3] = "Yukon River";
qdata[11]["answers"][4] = "Fraser River";

qdata[12] = new Array();
qdata[12]["question"] = "Why did Ottawa establish the Mounted Police in 1873?";
qdata[12]["chapter"] = 1;
qdata[12]["moreinfo"] = "additional info on the question and answer";
qdata[12]["correct"] = 2;
qdata[12]["answers"] = new Array();
qdata[12]["answers"][1] = "To perform equestrian shows";
qdata[12]["answers"][2] = "To pacify the West and negotiate with the Indians";
qdata[12]["answers"][3] = "To arrest Louis Riel";
qdata[12]["answers"][4] = "To drive the M\351tis out of Canada";

qdata[13] = new Array();
qdata[13]["question"] = "How many time zones stretch across Canada's vast landscape?";
qdata[13]["chapter"] = 1;
qdata[13]["moreinfo"] = "additional info on the question and answer";
qdata[13]["correct"] = 2;
qdata[13]["answers"] = new Array();
qdata[13]["answers"][1] = "3";
qdata[13]["answers"][2] = "6";
qdata[13]["answers"][3] = "8";
qdata[13]["answers"][4] = "1";

qdata[14] = new Array();
qdata[14]["question"] = "What famous sea creature in the Okanagan Lake of British Columbia was called N'ha-a-itk by local Aboriginal tribes and is considered \"Canada's Loch Ness Monster\"?";
qdata[14]["chapter"] = 2;
qdata[14]["moreinfo"] = "additional info on the question and answer";
qdata[14]["correct"] = 3;
qdata[14]["answers"] = new Array();
qdata[14]["answers"][1] = "Caddy";
qdata[14]["answers"][2] = "Manopogo";
qdata[14]["answers"][3] = "Ogopogo";
qdata[14]["answers"][4] = "Champ";

qdata[15] = new Array();
qdata[15]["question"] = "What is the capital city of Nova Scotia?";
qdata[15]["chapter"] = 2;
qdata[15]["moreinfo"] = "additional info on the question and answer";
qdata[15]["correct"] = 3;
qdata[15]["answers"] = new Array();
qdata[15]["answers"][1] = "St. John's";
qdata[15]["answers"][2] = "Charlottetown";
qdata[15]["answers"][3] = "Halifax";
qdata[15]["answers"][4] = "Fredericton";

qdata[16] = new Array();
qdata[16]["question"] = "What is the oldest English settlement in Canada?";
qdata[16]["chapter"] = 2;
qdata[16]["moreinfo"] = "additional info on the question and answer";
qdata[16]["correct"] = 4;
qdata[16]["answers"] = new Array();
qdata[16]["answers"][1] = "Qu\351bec, Quebec";
qdata[16]["answers"][2] = "Halifax, Nova Scotia";
qdata[16]["answers"][3] = "Ottawa, Ontario";
qdata[16]["answers"][4] = "St. John's, Newfoundland and Labrador";

qdata[17] = new Array();
qdata[17]["question"] = "Who was the first woman to serve as governor general of Canada?";
qdata[17]["chapter"] = 2;
qdata[17]["moreinfo"] = "additional info on the question and answer";
qdata[17]["correct"] = 1;
qdata[17]["answers"] = new Array();
qdata[17]["answers"][1] = "Jeanne Sauv\351";
qdata[17]["answers"][2] = "Jean Augustine";
qdata[17]["answers"][3] = "Adrienne Clarkson";
qdata[17]["answers"][4] = "Micha\353lle Jean";

qdata[18] = new Array();
qdata[18]["question"] = "Who is Canada's Head of State?";
qdata[18]["chapter"] = 2;
qdata[18]["moreinfo"] = "additional info on the question and answer";
qdata[18]["correct"] = 1;
qdata[18]["answers"] = new Array();
qdata[18]["answers"][1] = "Her Majesty the Queen of Canada (Elizabeth II)";
qdata[18]["answers"][2] = "The Prime Minister";
qdata[18]["answers"][3] = "The Governor General";
qdata[18]["answers"][4] = "None of the above";

qdata[19] = new Array();
qdata[19]["question"] = "What level of government in Canada is in charge of education and health care?";
qdata[19]["chapter"] = 2;
qdata[19]["moreinfo"] = "additional info on the question and answer";
qdata[19]["correct"] = 2;
qdata[19]["answers"] = new Array();
qdata[19]["answers"][1] = "Federal";
qdata[19]["answers"][2] = "Provincial and territorial";
qdata[19]["answers"][3] = "Municipal";
qdata[19]["answers"][4] = "Local";

qdata[20] = new Array();
qdata[20]["question"] = "In Canada, rights come with responsibilities. Which of the following is an actual responsibility for all Canadian citizens?";
qdata[20]["chapter"] = 2;
qdata[20]["moreinfo"] = "additional info on the question and answer";
qdata[20]["correct"] = 4;
qdata[20]["answers"] = new Array();
qdata[20]["answers"][1] = "The responsibility to help others in the community";
qdata[20]["answers"][2] = "The responsibility to obey the law";
qdata[20]["answers"][3] = "The responsibility to vote in elections";
qdata[20]["answers"][4] = "All of the above";

qdata[21] = new Array();
qdata[21]["question"] = "Which biennial sports event that began in 1970 features such sports as snowshoeing and dog sledding, as well as athletes from northern communities like the Northwest Territories, Yukon, Nunavut, Alaska, Greenland and several northern Russian provinces?";
qdata[21]["chapter"] = 2;
qdata[21]["moreinfo"] = "additional info on the question and answer";
qdata[21]["correct"] = 3;
qdata[21]["answers"] = new Array();
qdata[21]["answers"][1] = "Northern Winter Olympics";
qdata[21]["answers"][2] = "Arctic Cup";
qdata[21]["answers"][3] = "Arctic Winter Games";
qdata[21]["answers"][4] = "Northern Games";

qdata[22] = new Array();
qdata[22]["question"] = "The prime minister of Canada must recommend a governor general candidate to the Queen before a decision is made. True or false?";
qdata[22]["chapter"] = 2;
qdata[22]["moreinfo"] = "additional info on the question and answer";
qdata[22]["correct"] = 1;
qdata[22]["answers"] = new Array();
qdata[22]["answers"][1] = "True";
qdata[22]["answers"][2] = "False";

qdata[23] = new Array();
qdata[23]["question"] = "What leaf is on the Canadian flag?";
qdata[23]["chapter"] = 2;
qdata[23]["moreinfo"] = "additional info on the question and answer";
qdata[23]["correct"] = 2;
qdata[23]["answers"] = new Array();
qdata[23]["answers"][1] = "mint leaf";
qdata[23]["answers"][2] = "maple leaf";
qdata[23]["answers"][3] = "bay leaf";
qdata[23]["answers"][4] = "grape leaf";

qdata[24] = new Array();
qdata[24]["question"] = "Which of the following answers includes all four of the fundamental freedoms dating back to the Magna Carta, also known as the Great Charter?";
qdata[24]["chapter"] = 2;
qdata[24]["moreinfo"] = "additional info on the question and answer";
qdata[24]["correct"] = 4;
qdata[24]["answers"] = new Array();
qdata[24]["answers"][1] = "Freedom of conscience and religion, freedom of speech, freedom to wear what you want, freedom to read";
qdata[24]["answers"][2] = "Freedom of speech, freedom to think, freedom of association, freedom to walk";
qdata[24]["answers"][3] = "Freedom of peaceful assembly, freedom to drive, freedom to sing, freedom of association";
qdata[24]["answers"][4] = "Freedom of conscience and religion; freedom of thought, belief, opinion and expression; freedom of peaceful assembly; freedom of association";

qdata[25] = new Array();
qdata[25]["question"] = "The Queen has been present at a number of important sports occasions. In 1976, she opened the Olympic Games in ______.";
qdata[25]["chapter"] = 3;
qdata[25]["moreinfo"] = "additional info on the question and answer";
qdata[25]["correct"] = 4;
qdata[25]["answers"] = new Array();
qdata[25]["answers"][1] = "Ottawa";
qdata[25]["answers"][2] = "Victoria";
qdata[25]["answers"][3] = "Quebec City";
qdata[25]["answers"][4] = "Montreal";

qdata[26] = new Array();
qdata[26]["question"] = "Which monarch proclaimed the National flag in 1965?";
qdata[26]["chapter"] = 3;
qdata[26]["moreinfo"] = "additional info on the question and answer";
qdata[26]["correct"] = 3;
qdata[26]["answers"] = new Array();
qdata[26]["answers"][1] = "King George IV";
qdata[26]["answers"][2] = "King Edward VII";
qdata[26]["answers"][3] = "Queen Elizabeth II";
qdata[26]["answers"][4] = "Queen Elizabeth I";

qdata[27] = new Array();
qdata[27]["question"] = "What does the Latin name for Nova Scotia mean in English?";
qdata[27]["chapter"] = 3;
qdata[27]["moreinfo"] = "additional info on the question and answer";
qdata[27]["correct"] = 1;
qdata[27]["answers"] = new Array();
qdata[27]["answers"][1] = "New Scotland";
qdata[27]["answers"][2] = "New Scott";
qdata[27]["answers"][3] = "New Land";
qdata[27]["answers"][4] = "New Star";

qdata[28] = new Array();
qdata[28]["question"] = "Newfoundland was the last province to join Confederation in 1949. What year did the province's name officially change to include Labrador?";
qdata[28]["chapter"] = 3;
qdata[28]["moreinfo"] = "additional info on the question and answer";
qdata[28]["correct"] = 4;
qdata[28]["answers"] = new Array();
qdata[28]["answers"][1] = "1999";
qdata[28]["answers"][2] = "1954";
qdata[28]["answers"][3] = "2004";
qdata[28]["answers"][4] = "2001";

qdata[29] = new Array();
qdata[29]["question"] = "What is the name of the highest mountain in Canada?";
qdata[29]["chapter"] = 3;
qdata[29]["moreinfo"] = "additional info on the question and answer";
qdata[29]["correct"] = 3;
qdata[29]["answers"] = new Array();
qdata[29]["answers"][1] = "Blackcomb Mountain";
qdata[29]["answers"][2] = "Rocky Mountains";
qdata[29]["answers"][3] = "Mount Logan";
qdata[29]["answers"][4] = "Yoho Mountain";

qdata[30] = new Array();
qdata[30]["question"] = "In 1957, the Queen officially opened the first session of the 23rd Parliament, becoming the first reigning Canadian monarch to read the ______ from the Throne.";
qdata[30]["chapter"] = 3;
qdata[30]["moreinfo"] = "additional info on the question and answer";
qdata[30]["correct"] = 1;
qdata[30]["answers"] = new Array();
qdata[30]["answers"][1] = "Speech";
qdata[30]["answers"][2] = "Letter";
qdata[30]["answers"][3] = "Memorandum";
qdata[30]["answers"][4] = "Document";

qdata[31] = new Array();
qdata[31]["question"] = "Which document made Confederation official and legal?";
qdata[31]["chapter"] = 3;
qdata[31]["moreinfo"] = "additional info on the question and answer";
qdata[31]["correct"] = 1;
qdata[31]["answers"] = new Array();
qdata[31]["answers"][1] = "The British North America Act of 1867";
qdata[31]["answers"][2] = "The Dominion Act";
qdata[31]["answers"][3] = "The British Dominion Act";
qdata[31]["answers"][4] = "The Confederation Act";

qdata[32] = new Array();
qdata[32]["question"] = "What is the oldest national park in Canada?";
qdata[32]["chapter"] = 3;
qdata[32]["moreinfo"] = "additional info on the question and answer";
qdata[32]["correct"] = 2;
qdata[32]["answers"] = new Array();
qdata[32]["answers"][1] = "Glacier National Park";
qdata[32]["answers"][2] = "Banff National Park";
qdata[32]["answers"][3] = "Fundy National Park";
qdata[32]["answers"][4] = "Waterton Lakes National Park";

qdata[33] = new Array();
qdata[33]["question"] = "Which country is Canada's major trade partner for energy products?";
qdata[33]["chapter"] = 3;
qdata[33]["moreinfo"] = "additional info on the question and answer";
qdata[33]["correct"] = 4;
qdata[33]["answers"] = new Array();
qdata[33]["answers"][1] = "Great Britain";
qdata[33]["answers"][2] = "Norway";
qdata[33]["answers"][3] = "Algeria";
qdata[33]["answers"][4] = "United States";

qdata[34] = new Array();
qdata[34]["question"] = "In Canada's three northern territories, which phenomenon is sometimes referred to as \"the midnight sun\"?";
qdata[34]["chapter"] = 3;
qdata[34]["moreinfo"] = "additional info on the question and answer";
qdata[34]["correct"] = 2;
qdata[34]["answers"] = new Array();
qdata[34]["answers"][1] = "24-hour darkness in the fall and winter";
qdata[34]["answers"][2] = "24-hour daylight in the summer";
qdata[34]["answers"][3] = "Lunar eclipse";
qdata[34]["answers"][4] = "Solar eclipse";

qdata[35] = new Array();
qdata[35]["question"] = "What was the name of the secret routes and safe houses used by 19th-century slaves, led by Harriet Tubman, in the United States to escape to Canada?";
qdata[35]["chapter"] = 3;
qdata[35]["moreinfo"] = "additional info on the question and answer";
qdata[35]["correct"] = 1;
qdata[35]["answers"] = new Array();
qdata[35]["answers"][1] = "The Underground Railroad";
qdata[35]["answers"][2] = "The Highway to Freedom";
qdata[35]["answers"][3] = "The Great Canadian Escape Route";
qdata[35]["answers"][4] = "The Freedom Tunnel";

qdata[36] = new Array();
qdata[36]["question"] = "On June 6, 1944, in a bid to roll back the Nazi regime, 15,000 Canadian soldiers stormed which Normandy beach on a day otherwise known as D-Day?";
qdata[36]["chapter"] = 3;
qdata[36]["moreinfo"] = "additional info on the question and answer";
qdata[36]["correct"] = 4;
qdata[36]["answers"] = new Array();
qdata[36]["answers"][1] = "Jupiter Beach";
qdata[36]["answers"][2] = "Miami Beach";
qdata[36]["answers"][3] = "C\364te d'Azur Beach";
qdata[36]["answers"][4] = "Juno Beach";

qdata[37] = new Array();
qdata[37]["question"] = "How many provinces and territories are there in Canada?";
qdata[37]["chapter"] = 3;
qdata[37]["moreinfo"] = "additional info on the question and answer";
qdata[37]["correct"] = 1;
qdata[37]["answers"] = new Array();
qdata[37]["answers"][1] = "13";
qdata[37]["answers"][2] = "10";
qdata[37]["answers"][3] = "8";
qdata[37]["answers"][4] = "15";

qdata[38] = new Array();
qdata[38]["question"] = "Canada has a large population of the world's biggest land-based carnivore (meat-eating animal). It is the:";
qdata[38]["chapter"] = 3;
qdata[38]["moreinfo"] = "additional info on the question and answer";
qdata[38]["correct"] = 4;
qdata[38]["answers"] = new Array();
qdata[38]["answers"][1] = "Grizzly bear";
qdata[38]["answers"][2] = "Brown bear";
qdata[38]["answers"][3] = "Black bear";
qdata[38]["answers"][4] = "Polar bear";

qdata[39] = new Array();
qdata[39]["question"] = "Which of the following is a requirement in order to vote in a Canadian federal election?";
qdata[39]["chapter"] = 3;
qdata[39]["moreinfo"] = "additional info on the question and answer";
qdata[39]["correct"] = 4;
qdata[39]["answers"] = new Array();
qdata[39]["answers"][1] = "You are at least 18 years old on election day";
qdata[39]["answers"][2] = "You are a Canadian citizen";
qdata[39]["answers"][3] = "You can prove your identity and address";
qdata[39]["answers"][4] = "All of the above";

qdata[40] = new Array();
qdata[40]["question"] = "What battle can be described as the Royal Canadian Navy's \"finest hour\"?";
qdata[40]["chapter"] = 4;
qdata[40]["moreinfo"] = "additional info on the question and answer";
qdata[40]["correct"] = 2;
qdata[40]["answers"] = new Array();
qdata[40]["answers"][1] = "Battle of the Caribbean Sea";
qdata[40]["answers"][2] = "Battle of the Atlantic";
qdata[40]["answers"][3] = "Battle of the Pacific";
qdata[40]["answers"][4] = "Battle of the Arctic";

qdata[41] = new Array();
qdata[41]["question"] = "In what province did the \"Marathon of Hope\" creator and Canadian hero Terry Fox spend most of his life?";
qdata[41]["chapter"] = 4;
qdata[41]["moreinfo"] = "additional info on the question and answer";
qdata[41]["correct"] = 4;
qdata[41]["answers"] = new Array();
qdata[41]["answers"][1] = "Quebec";
qdata[41]["answers"][2] = "New Brunswick";
qdata[41]["answers"][3] = "Manitoba";
qdata[41]["answers"][4] = "British Columbia";

qdata[42] = new Array();
qdata[42]["question"] = "The Queen's first visit to Canada was in ______ when she was Princess Elizabeth and aged ______.";
qdata[42]["chapter"] = 4;
qdata[42]["moreinfo"] = "additional info on the question and answer";
qdata[42]["correct"] = 1;
qdata[42]["answers"] = new Array();
qdata[42]["answers"][1] = "1951, 25";
qdata[42]["answers"][2] = "1946, 20";
qdata[42]["answers"][3] = "1945, 19";
qdata[42]["answers"][4] = "1930, 4";

qdata[43] = new Array();
qdata[43]["question"] = "Which section of the Parliament buildings was destroyed by fire on February 3, 1916?";
qdata[43]["chapter"] = 4;
qdata[43]["moreinfo"] = "additional info on the question and answer";
qdata[43]["correct"] = 2;
qdata[43]["answers"] = new Array();
qdata[43]["answers"][1] = "West Block";
qdata[43]["answers"][2] = "Centre Block";
qdata[43]["answers"][3] = "East Block";
qdata[43]["answers"][4] = "All of the above";

qdata[44] = new Array();
qdata[44]["question"] = "The Liberation of Western Europe from Nazi rule began in 1944 on:";
qdata[44]["chapter"] = 4;
qdata[44]["moreinfo"] = "additional info on the question and answer";
qdata[44]["correct"] = 1;
qdata[44]["answers"] = new Array();
qdata[44]["answers"][1] = "D-Day";
qdata[44]["answers"][2] = "VE-Day";
qdata[44]["answers"][3] = "VJ-Day";
qdata[44]["answers"][4] = "May Day";

qdata[45] = new Array();
qdata[45]["question"] = "Which Canadian imagined the idea for the first telephone at his summer house in Canada?";
qdata[45]["chapter"] = 4;
qdata[45]["moreinfo"] = "additional info on the question and answer";
qdata[45]["correct"] = 2;
qdata[45]["answers"] = new Array();
qdata[45]["answers"][1] = "Thomas Edison";
qdata[45]["answers"][2] = "Alexander Graham Bell";
qdata[45]["answers"][3] = "Mathew Evans";
qdata[45]["answers"][4] = "Henry Woodward";

qdata[46] = new Array();
qdata[46]["question"] = "Which year is associated by many with Quebec's \"Quiet Revolution,\" a period of social, political and cultural change.";
qdata[46]["chapter"] = 4;
qdata[46]["moreinfo"] = "additional info on the question and answer";
qdata[46]["correct"] = 1;
qdata[46]["answers"] = new Array();
qdata[46]["answers"][1] = "1960";
qdata[46]["answers"][2] = "1970";
qdata[46]["answers"][3] = "1840";
qdata[46]["answers"][4] = "1980";

qdata[47] = new Array();
qdata[47]["question"] = "Who wrote the popular novel Anne of Green Gables in 1908, which has since been translated into 15 languages and inspired two films and a musical performed in Charlottetown every year?";
qdata[47]["chapter"] = 4;
qdata[47]["moreinfo"] = "additional info on the question and answer";
qdata[47]["correct"] = 1;
qdata[47]["answers"] = new Array();
qdata[47]["answers"][1] = "Lucy Maud Montgomery";
qdata[47]["answers"][2] = "Margaret Atwood";
qdata[47]["answers"][3] = "Alice Munro";
qdata[47]["answers"][4] = "W.O. Mitchell";

qdata[48] = new Array();
qdata[48]["question"] = "Who was the only Canadian ever to serve as Prime Minister of Great Britain?";
qdata[48]["chapter"] = 4;
qdata[48]["moreinfo"] = "additional info on the question and answer";
qdata[48]["correct"] = 3;
qdata[48]["answers"] = new Array();
qdata[48]["answers"][1] = "Tony Blair";
qdata[48]["answers"][2] = "Margaret Thatcher";
qdata[48]["answers"][3] = "Andrew Bonar Law";
qdata[48]["answers"][4] = "Sir Winston Churchill";

qdata[49] = new Array();
qdata[49]["question"] = "On April 1st, 1999, ________ became Canada's newest territory.";
qdata[49]["chapter"] = 4;
qdata[49]["moreinfo"] = "additional info on the question and answer";
qdata[49]["correct"] = 2;
qdata[49]["answers"] = new Array();
qdata[49]["answers"][1] = "Ontario";
qdata[49]["answers"][2] = "Nunavut";
qdata[49]["answers"][3] = "Northwest Territories";
qdata[49]["answers"][4] = "Yukon";

qdata[50] = new Array();
qdata[50]["question"] = "Jacques Cartier was the first European to explore which great Canadian river?";
qdata[50]["chapter"] = 4;
qdata[50]["moreinfo"] = "additional info on the question and answer";
qdata[50]["correct"] = 2;
qdata[50]["answers"] = new Array();
qdata[50]["answers"][1] = "Red River";
qdata[50]["answers"][2] = "St. Lawrence River";
qdata[50]["answers"][3] = "Hillsborough River";
qdata[50]["answers"][4] = "Grand River";

qdata[51] = new Array();
qdata[51]["question"] = "What does the Official Languages Act of 1969 stipulate for all Canadians?";
qdata[51]["chapter"] = 4;
qdata[51]["moreinfo"] = "additional info on the question and answer";
qdata[51]["correct"] = 3;
qdata[51]["answers"] = new Array();
qdata[51]["answers"][1] = "That every citizen must be bilingual";
qdata[51]["answers"][2] = "That English is the only official language of Canada";
qdata[51]["answers"][3] = "That English and French would enjoy equality of status in all institutions of the Parliament and government of Canada";
qdata[51]["answers"][4] = "That all government documents must be bilingual";

qdata[52] = new Array();
qdata[52]["question"] = "The Trans-Canada Highway is the longest national highway in the world.";
qdata[52]["chapter"] = 4;
qdata[52]["moreinfo"] = "additional info on the question and answer";
qdata[52]["correct"] = 1;
qdata[52]["answers"] = new Array();
qdata[52]["answers"][1] = "True";
qdata[52]["answers"][2] = "False";

qdata[53] = new Array();
qdata[53]["question"] = "What is the most significant difference between Canadian football and American football?";
qdata[53]["chapter"] = 5;
qdata[53]["moreinfo"] = "additional info on the question and answer";
qdata[53]["correct"] = 4;
qdata[53]["answers"] = new Array();
qdata[53]["answers"][1] = "Canadian football allows three downs instead of four";
qdata[53]["answers"][2] = "Canadian football uses a bigger ball";
qdata[53]["answers"][3] = "Canadian football is played on a bigger field";
qdata[53]["answers"][4] = "All of the above";

qdata[54] = new Array();
qdata[54]["question"] = "The name \"Canada\" comes from the Iroquois word \"Kanata\" which means what in English?";
qdata[54]["chapter"] = 5;
qdata[54]["moreinfo"] = "additional info on the question and answer";
qdata[54]["correct"] = 2;
qdata[54]["answers"] = new Array();
qdata[54]["answers"][1] = "Maple leaf";
qdata[54]["answers"][2] = "Village";
qdata[54]["answers"][3] = "Coast";
qdata[54]["answers"][4] = "Land of the free";

qdata[55] = new Array();
qdata[55]["question"] = "Who, from June 25 to November 4, 1993, was Canada's first woman prime minister?";
qdata[55]["chapter"] = 5;
qdata[55]["moreinfo"] = "additional info on the question and answer";
qdata[55]["correct"] = 4;
qdata[55]["answers"] = new Array();
qdata[55]["answers"][1] = "Micha\353lle Jean";
qdata[55]["answers"][2] = "Jeanne Sauv\351";
qdata[55]["answers"][3] = "Agnes Campbell Macphail";
qdata[55]["answers"][4] = "Kim Campbell";

qdata[56] = new Array();
qdata[56]["question"] = "Canada is the world's second largest country by land mass.";
qdata[56]["chapter"] = 5;
qdata[56]["moreinfo"] = "additional info on the question and answer";
qdata[56]["correct"] = 1;
qdata[56]["answers"] = new Array();
qdata[56]["answers"][1] = "True";
qdata[56]["answers"][2] = "False";

qdata[57] = new Array();
qdata[57]["question"] = "Which national project to connect Canadians across the country began in 1871 and was completed six years ahead of schedule in 1885, with the final section constructed in Craigellachie, British Columbia?";
qdata[57]["chapter"] = 5;
qdata[57]["moreinfo"] = "additional info on the question and answer";
qdata[57]["correct"] = 3;
qdata[57]["answers"] = new Array();
qdata[57]["answers"][1] = "Trans-Canada Highway";
qdata[57]["answers"][2] = "Telephone lines";
qdata[57]["answers"][3] = "Canadian Pacific Railway";
qdata[57]["answers"][4] = "Trans-Canada Trail";

qdata[58] = new Array();
qdata[58]["question"] = "What is the name of the dried meat, made by Plains Indians and M\351tis peoples, that became a staple during the fur trade?";
qdata[58]["chapter"] = 5;
qdata[58]["moreinfo"] = "additional info on the question and answer";
qdata[58]["correct"] = 2;
qdata[58]["answers"] = new Array();
qdata[58]["answers"][1] = "Bison";
qdata[58]["answers"][2] = "Pemmican";
qdata[58]["answers"][3] = "Jerky";
qdata[58]["answers"][4] = "Bannock";

qdata[59] = new Array();
qdata[59]["question"] = "The Canadian flag is composed of which colours?";
qdata[59]["chapter"] = 5;
qdata[59]["moreinfo"] = "additional info on the question and answer";
qdata[59]["correct"] = 4;
qdata[59]["answers"] = new Array();
qdata[59]["answers"][1] = "Red/White/Blue";
qdata[59]["answers"][2] = "Red/Black";
qdata[59]["answers"][3] = "Red/Blue/Green";
qdata[59]["answers"][4] = "Red/White";

qdata[60] = new Array();
qdata[60]["question"] = "What is the largest city in Canada?";
qdata[60]["chapter"] = 5;
qdata[60]["moreinfo"] = "additional info on the question and answer";
qdata[60]["correct"] = 4;
qdata[60]["answers"] = new Array();
qdata[60]["answers"][1] = "Calgary";
qdata[60]["answers"][2] = "Montreal";
qdata[60]["answers"][3] = "Ottawa";
qdata[60]["answers"][4] = "Toronto";

qdata[61] = new Array();
qdata[61]["question"] = "The British North America Act of 1867 united Upper and Lower Canada, Nova Scotia and New Brunswick. Today, Upper and Lower Canada are known as _______ and Quebec.";
qdata[61]["chapter"] = 5;
qdata[61]["moreinfo"] = "additional info on the question and answer";
qdata[61]["correct"] = 1;
qdata[61]["answers"] = new Array();
qdata[61]["answers"][1] = "Ontario";
qdata[61]["answers"][2] = "Nova Scotia";
qdata[61]["answers"][3] = "Kingston";
qdata[61]["answers"][4] = "Newfoundland";

qdata[62] = new Array();
qdata[62]["question"] = "In 1812, which country was unsuccessful in its attempt to conquer Canada?";
qdata[62]["chapter"] = 5;
qdata[62]["moreinfo"] = "additional info on the question and answer";
qdata[62]["correct"] = 3;
qdata[62]["answers"] = new Array();
qdata[62]["answers"][1] = "Russia";
qdata[62]["answers"][2] = "China";
qdata[62]["answers"][3] = "United States of America";
qdata[62]["answers"][4] = "Germany";

qdata[63] = new Array();
qdata[63]["question"] = "Since 1982, any change to the position of the Queen or her representatives in Canada requires the unanimous consent of the ______, the House of Commons and the assemblies of all the provinces.";
qdata[63]["chapter"] = 5;
qdata[63]["moreinfo"] = "additional info on the question and answer";
qdata[63]["correct"] = 2;
qdata[63]["answers"] = new Array();
qdata[63]["answers"][1] = "the Prime Minister";
qdata[63]["answers"][2] = "Senate";
qdata[63]["answers"][3] = "Members of Parliament";
qdata[63]["answers"][4] = "White house";

qdata[64] = new Array();
qdata[64]["question"] = "Who is the first Canadian of Haitian origin to be named governor general?";
qdata[64]["chapter"] = 5;
qdata[64]["moreinfo"] = "additional info on the question and answer";
qdata[64]["correct"] = 2;
qdata[64]["answers"] = new Array();
qdata[64]["answers"][1] = "Stephen Harper";
qdata[64]["answers"][2] = "Micha\353lle Jean";
qdata[64]["answers"][3] = "Stockwell Day";
qdata[64]["answers"][4] = "Jeanne Sauv\351";

qdata[65] = new Array();
qdata[65]["question"] = "Famous Canadian Roberta Bondar is known for achieving which of the following goals in 1992?";
qdata[65]["chapter"] = 5;
qdata[65]["moreinfo"] = "additional info on the question and answer";
qdata[65]["correct"] = 3;
qdata[65]["answers"] = new Array();
qdata[65]["answers"][1] = "She was the first female prime minister";
qdata[65]["answers"][2] = "She was the first Canadian woman to play in the NHL";
qdata[65]["answers"][3] = "She was the first Canadian woman to travel into outer space";
qdata[65]["answers"][4] = "She won a Governor General's Award";

qdata[66] = new Array();
qdata[66]["question"] = "What challenge did Louis Riel pose to Canada?";
qdata[66]["chapter"] = 6;
qdata[66]["moreinfo"] = "additional info on the question and answer";
qdata[66]["correct"] = 2;
qdata[66]["answers"] = new Array();
qdata[66]["answers"][1] = "he opposed Confederation";
qdata[66]["answers"][2] = "he led two armed uprisings that jeopardized Canada's expansion from sea to sea";
qdata[66]["answers"][3] = "he allied himself to Russia";
qdata[66]["answers"][4] = "he became an American citizen";

qdata[67] = new Array();
qdata[67]["question"] = "How many territories does Canada have in total?";
qdata[67]["chapter"] = 6;
qdata[67]["moreinfo"] = "additional info on the question and answer";
qdata[67]["correct"] = 3;
qdata[67]["answers"] = new Array();
qdata[67]["answers"][1] = "1";
qdata[67]["answers"][2] = "2";
qdata[67]["answers"][3] = "3";
qdata[67]["answers"][4] = "4";

qdata[68] = new Array();
qdata[68]["question"] = "Which of the following is a constitutional responsibility of the governor general of Canada?";
qdata[68]["chapter"] = 6;
qdata[68]["moreinfo"] = "additional info on the question and answer";
qdata[68]["correct"] = 2;
qdata[68]["answers"] = new Array();
qdata[68]["answers"][1] = "To head the Canadian military";
qdata[68]["answers"][2] = "To ensure that Canada always has a prime minister and a government in place that has the confidence of Parliament";
qdata[68]["answers"][3] = "To provide leadership and direction to the government with the support of a cabinet";
qdata[68]["answers"][4] = "To verify all changes to the Canadian Constitution Act";

qdata[69] = new Array();
qdata[69]["question"] = "The Heir Apparent, or successor to Queen Elizabeth II, is named ______.";
qdata[69]["chapter"] = 6;
qdata[69]["moreinfo"] = "additional info on the question and answer";
qdata[69]["correct"] = 1;
qdata[69]["answers"] = new Array();
qdata[69]["answers"][1] = "Charles, Prince of Wales";
qdata[69]["answers"][2] = "William, Prince of Wales";
qdata[69]["answers"][3] = "Harry, Prince of Wales";
qdata[69]["answers"][4] = "Andrew, Prince of Wales";

qdata[70] = new Array();
qdata[70]["question"] = "Who were the first people to live in Canada?";
qdata[70]["chapter"] = 6;
qdata[70]["moreinfo"] = "additional info on the question and answer";
qdata[70]["correct"] = 3;
qdata[70]["answers"] = new Array();
qdata[70]["answers"][1] = "Europeans";
qdata[70]["answers"][2] = "Loyalists";
qdata[70]["answers"][3] = "Aboriginals";
qdata[70]["answers"][4] = "Norsemen";

qdata[71] = new Array();
qdata[71]["question"] = "Vancouver, British Columbia, was named after:";
qdata[71]["chapter"] = 6;
qdata[71]["moreinfo"] = "additional info on the question and answer";
qdata[71]["correct"] = 2;
qdata[71]["answers"] = new Array();
qdata[71]["answers"][1] = "An Aboriginal (Cree) name meaning \"end of the land\" or \"coastline of the falling sun\"";
qdata[71]["answers"][2] = "Captain George Vancouver, a Royal Navy officer who was the first European to enter Burrard Inlet on Canada's West Coast";
qdata[71]["answers"][3] = "The Great Vancouver Fire of June 13, 1886, which struck Gastown. The unofficial name of Vancouver was reported worldwide and subsequently stuck.";
qdata[71]["answers"][4] = "Mayor John Brian Vancouver, who proposed renaming Gastown after his successful re-election in 1885";

qdata[72] = new Array();
qdata[72]["question"] = "What is the highest court in Canada?";
qdata[72]["chapter"] = 6;
qdata[72]["moreinfo"] = "additional info on the question and answer";
qdata[72]["correct"] = 1;
qdata[72]["answers"] = new Array();
qdata[72]["answers"][1] = "Supreme Court";
qdata[72]["answers"][2] = "Federal Judiciary";
qdata[72]["answers"][3] = "Superior Court";
qdata[72]["answers"][4] = "Custom Court";

qdata[73] = new Array();
qdata[73]["question"] = "Which M\351tis leader, who was a central figure in the Northwest Rebellions and founder of the province of Manitoba, is celebrated on the third Monday of February in Manitoba?";
qdata[73]["chapter"] = 6;
qdata[73]["moreinfo"] = "additional info on the question and answer";
qdata[73]["correct"] = 2;
qdata[73]["answers"] = new Array();
qdata[73]["answers"][1] = "William MacDougall";
qdata[73]["answers"][2] = "Louis Riel";
qdata[73]["answers"][3] = "Gabriel Dumont";
qdata[73]["answers"][4] = "Thomas Scott";

qdata[74] = new Array();
qdata[74]["question"] = "The birth of the Dominion of Canada, also known as \"Confederation,\" occurred on which historic date?";
qdata[74]["chapter"] = 6;
qdata[74]["moreinfo"] = "additional info on the question and answer";
qdata[74]["correct"] = 3;
qdata[74]["answers"] = new Array();
qdata[74]["answers"][1] = "July 1, 1817";
qdata[74]["answers"][2] = "January 1, 1867";
qdata[74]["answers"][3] = "July 1, 1867";
qdata[74]["answers"][4] = "January 5, 1817";

qdata[75] = new Array();
qdata[75]["question"] = "In Canada, the Queen's birthday is marked by a public holiday in each year on Victoria Day. This holiday dates back to the reign of Queen Victoria (1837-1901), whose birthday was declared a Canadian holiday in 1845.";
qdata[75]["chapter"] = 6;
qdata[75]["moreinfo"] = "additional info on the question and answer";
qdata[75]["correct"] = 1;
qdata[75]["answers"] = new Array();
qdata[75]["answers"][1] = "May";
qdata[75]["answers"][2] = "June";
qdata[75]["answers"][3] = "January";
qdata[75]["answers"][4] = "September";

qdata[76] = new Array();
qdata[76]["question"] = "______ fulfill the responsibilities and functions of the Queen in the provinces in the same way that the Governor General does at the national level.";
qdata[76]["chapter"] = 6;
qdata[76]["moreinfo"] = "additional info on the question and answer";
qdata[76]["correct"] = 3;
qdata[76]["answers"] = new Array();
qdata[76]["answers"][1] = "Senators";
qdata[76]["answers"][2] = "Members of Parliament";
qdata[76]["answers"][3] = "Lieutenant-Governors";
qdata[76]["answers"][4] = "Premiers";

qdata[77] = new Array();
qdata[77]["question"] = "Some black Nova Scotians helped found _______ a new British Colony for freed slaves, in 1792.";
qdata[77]["chapter"] = 6;
qdata[77]["moreinfo"] = "additional info on the question and answer";
qdata[77]["correct"] = 1;
qdata[77]["answers"] = new Array();
qdata[77]["answers"][1] = "Freetown, Sierra Leone (West Africa)";
qdata[77]["answers"][2] = "Johannesburg, South Africa";
qdata[77]["answers"][3] = "Port au Prince, Haiti";
qdata[77]["answers"][4] = "Harare, Zimbabwe";

qdata[78] = new Array();
qdata[78]["question"] = "What is the head of government in Canada called?";
qdata[78]["chapter"] = 6;
qdata[78]["moreinfo"] = "additional info on the question and answer";
qdata[78]["correct"] = 2;
qdata[78]["answers"] = new Array();
qdata[78]["answers"][1] = "President";
qdata[78]["answers"][2] = "Prime Minister or Premier";
qdata[78]["answers"][3] = "Senator";
qdata[78]["answers"][4] = "Parliamentary Minister";

qdata[79] = new Array();
qdata[79]["question"] = "What national public holiday falls on July 1?";
qdata[79]["chapter"] = 7;
qdata[79]["moreinfo"] = "additional info on the question and answer";
qdata[79]["correct"] = 4;
qdata[79]["answers"] = new Array();
qdata[79]["answers"][1] = "Vimy Day";
qdata[79]["answers"][2] = "Sir Wilfrid Laurier Day";
qdata[79]["answers"][3] = "Labour Day";
qdata[79]["answers"][4] = "Canada Day (until 1982, Dominion Day)";

qdata[80] = new Array();
qdata[80]["question"] = "The Queen has visited Canada ______ times.";
qdata[80]["chapter"] = 7;
qdata[80]["moreinfo"] = "additional info on the question and answer";
qdata[80]["correct"] = 3;
qdata[80]["answers"] = new Array();
qdata[80]["answers"][1] = "80";
qdata[80]["answers"][2] = "30";
qdata[80]["answers"][3] = "23";
qdata[80]["answers"][4] = "20";

qdata[81] = new Array();
qdata[81]["question"] = "Which is Canada's newest province?";
qdata[81]["chapter"] = 7;
qdata[81]["moreinfo"] = "additional info on the question and answer";
qdata[81]["correct"] = 3;
qdata[81]["answers"] = new Array();
qdata[81]["answers"][1] = "Nunavut";
qdata[81]["answers"][2] = "Alberta";
qdata[81]["answers"][3] = "Newfoundland and Labrador";
qdata[81]["answers"][4] = "Prince Edward Island";

qdata[82] = new Array();
qdata[82]["question"] = "Which structure, made by the Inuit, was traditionally used to indicate directions for travellers, warn of danger, mark a place of respect, or act as a helper in hunting caribou?";
qdata[82]["chapter"] = 7;
qdata[82]["moreinfo"] = "additional info on the question and answer";
qdata[82]["correct"] = 1;
qdata[82]["answers"] = new Array();
qdata[82]["answers"][1] = "inukshuk";
qdata[82]["answers"][2] = "totem pole";
qdata[82]["answers"][3] = "igloo";
qdata[82]["answers"][4] = "mukluk";

qdata[83] = new Array();
qdata[83]["question"] = "Which Canadian province is the largest in terms of land mass?";
qdata[83]["chapter"] = 7;
qdata[83]["moreinfo"] = "additional info on the question and answer";
qdata[83]["correct"] = 4;
qdata[83]["answers"] = new Array();
qdata[83]["answers"][1] = "Nunavut";
qdata[83]["answers"][2] = "Ontario";
qdata[83]["answers"][3] = "Alberta";
qdata[83]["answers"][4] = "Quebec";

qdata[84] = new Array();
qdata[84]["question"] = "Count Frontenac refused to surrender Quebec to the English in 1690, saying:";
qdata[84]["chapter"] = 7;
qdata[84]["moreinfo"] = "additional info on the question and answer";
qdata[84]["correct"] = 3;
qdata[84]["answers"] = new Array();
qdata[84]["answers"][1] = "You have nothing to fear but yourself!";
qdata[84]["answers"][2] = "Let them eat French fries!";
qdata[84]["answers"][3] = "My only reply will be from the mouths of my cannons!";
qdata[84]["answers"][4] = "England expects every man will do his duty!";

qdata[85] = new Array();
qdata[85]["question"] = "Why is Remembrance Day held on November 11 of each year?";
qdata[85]["chapter"] = 7;
qdata[85]["moreinfo"] = "additional info on the question and answer";
qdata[85]["correct"] = 3;
qdata[85]["answers"] = new Array();
qdata[85]["answers"][1] = "It was the day that the First World War officially started";
qdata[85]["answers"][2] = "It is the beginning of poppy season";
qdata[85]["answers"][3] = "It is Armistice Day when the First World War ended";
qdata[85]["answers"][4] = "All of the above";

qdata[86] = new Array();
qdata[86]["question"] = "How many provinces are there in Canada?";
qdata[86]["chapter"] = 7;
qdata[86]["moreinfo"] = "additional info on the question and answer";
qdata[86]["correct"] = 1;
qdata[86]["answers"] = new Array();
qdata[86]["answers"][1] = "Ten";
qdata[86]["answers"][2] = "Eleven";
qdata[86]["answers"][3] = "Twelve";
qdata[86]["answers"][4] = "Thirteen";

qdata[87] = new Array();
qdata[87]["question"] = "How many Canadians served in the First World War?";
qdata[87]["chapter"] = 7;
qdata[87]["moreinfo"] = "additional info on the question and answer";
qdata[87]["correct"] = 2;
qdata[87]["answers"] = new Array();
qdata[87]["answers"][1] = "10,000";
qdata[87]["answers"][2] = "600,000";
qdata[87]["answers"][3] = "1,000,000";
qdata[87]["answers"][4] = "it is not known how many";

qdata[88] = new Array();
qdata[88]["question"] = "What is Canada's motto?";
qdata[88]["chapter"] = 7;
qdata[88]["moreinfo"] = "additional info on the question and answer";
qdata[88]["correct"] = 1;
qdata[88]["answers"] = new Array();
qdata[88]["answers"][1] = "A Mari Usque Ad Mare - From sea to sea";
qdata[88]["answers"][2] = "Fortis et Liber - Strong and free";
qdata[88]["answers"][3] = "Splendor Sine Occasu - Splendour without diminishment";
qdata[88]["answers"][4] = "Quaerite Prime Regnum Dei - Seek ye first the Kingdom of God";

qdata[89] = new Array();
qdata[89]["question"] = "Which of the following factors makes you eligible to vote in a federal election or to cast a ballot in a federal referendum?";
qdata[89]["chapter"] = 7;
qdata[89]["moreinfo"] = "additional info on the question and answer";
qdata[89]["correct"] = 4;
qdata[89]["answers"] = new Array();
qdata[89]["answers"][1] = "You are a Canadian citizen";
qdata[89]["answers"][2] = "You are 18 years of age or older";
qdata[89]["answers"][3] = "You are a registered voter";
qdata[89]["answers"][4] = "All of the above";

qdata[90] = new Array();
qdata[90]["question"] = "The efforts of women to achieve the right to vote is known as the women's suffrage movement. Its founder in Canada was Dr. Emily Stowe, the first Canadian woman to practise medicine in Canada.  Thanks to her efforts, women received the right to vote in 1916 in which province?";
qdata[90]["chapter"] = 7;
qdata[90]["moreinfo"] = "additional info on the question and answer";
qdata[90]["correct"] = 2;
qdata[90]["answers"] = new Array();
qdata[90]["answers"][1] = "Quebec";
qdata[90]["answers"][2] = "Manitoba";
qdata[90]["answers"][3] = "New Brunswick";
qdata[90]["answers"][4] = "Prince Edward Island";

qdata[91] = new Array();
qdata[91]["question"] = "This historic Canadian figure is known as the first prime minister of the Dominion of Canada and is also featured on the Canadian $10 bill.";
qdata[91]["chapter"] = 7;
qdata[91]["moreinfo"] = "additional info on the question and answer";
qdata[91]["correct"] = 3;
qdata[91]["answers"] = new Array();
qdata[91]["answers"][1] = "Sir Wilfrid Laurier";
qdata[91]["answers"][2] = "Sir Robert Borden";
qdata[91]["answers"][3] = "Sir John A. Macdonald";
qdata[91]["answers"][4] = "William Lyon Mackenzie King";

qdata[92] = new Array();
qdata[92]["question"] = "Which animal appears on the Canadian quarter?";
qdata[92]["chapter"] = 8;
qdata[92]["moreinfo"] = "additional info on the question and answer";
qdata[92]["correct"] = 3;
qdata[92]["answers"] = new Array();
qdata[92]["answers"][1] = "The beaver";
qdata[92]["answers"][2] = "The moose";
qdata[92]["answers"][3] = "The caribou (reindeer)";
qdata[92]["answers"][4] = "The loon";

qdata[93] = new Array();
qdata[93]["question"] = "Canada has two official languages: English and ______.";
qdata[93]["chapter"] = 8;
qdata[93]["moreinfo"] = "additional info on the question and answer";
qdata[93]["correct"] = 3;
qdata[93]["answers"] = new Array();
qdata[93]["answers"][1] = "Spanish";
qdata[93]["answers"][2] = "Old English";
qdata[93]["answers"][3] = "French";
qdata[93]["answers"][4] = "Cantonese";

qdata[94] = new Array();
qdata[94]["question"] = "Maple leaves were used to decorate streets and platforms when the Prince of Wales, the future King Edward VII, visited Canada in ______?";
qdata[94]["chapter"] = 8;
qdata[94]["moreinfo"] = "additional info on the question and answer";
qdata[94]["correct"] = 1;
qdata[94]["answers"] = new Array();
qdata[94]["answers"][1] = "1860";
qdata[94]["answers"][2] = "1850";
qdata[94]["answers"][3] = "1840";
qdata[94]["answers"][4] = "1910";

qdata[95] = new Array();
qdata[95]["question"] = "Which four provinces or territories were first to join Confederation in 1867?";
qdata[95]["chapter"] = 8;
qdata[95]["moreinfo"] = "additional info on the question and answer";
qdata[95]["correct"] = 2;
qdata[95]["answers"] = new Array();
qdata[95]["answers"][1] = "Manitoba, Alberta, Ontario, Quebec";
qdata[95]["answers"][2] = "Ontario, Quebec, Nova Scotia, New Brunswick";
qdata[95]["answers"][3] = "Newfoundland, Nunavut, Manitoba, Alberta";
qdata[95]["answers"][4] = "New York, California, Alabama, Maine";

qdata[96] = new Array();
qdata[96]["question"] = "What is the most recent territory in Canada called?";
qdata[96]["chapter"] = 8;
qdata[96]["moreinfo"] = "additional info on the question and answer";
qdata[96]["correct"] = 3;
qdata[96]["answers"] = new Array();
qdata[96]["answers"][1] = "Northwest Territories";
qdata[96]["answers"][2] = "Yukon";
qdata[96]["answers"][3] = "Nunavut";
qdata[96]["answers"][4] = "Ontario";

qdata[97] = new Array();
qdata[97]["question"] = "What is the capital city of Canada (the national capital)?";
qdata[97]["chapter"] = 8;
qdata[97]["moreinfo"] = "additional info on the question and answer";
qdata[97]["correct"] = 2;
qdata[97]["answers"] = new Array();
qdata[97]["answers"][1] = "Toronto";
qdata[97]["answers"][2] = "Ottawa";
qdata[97]["answers"][3] = "Halifax";
qdata[97]["answers"][4] = "Montreal";

qdata[98] = new Array();
qdata[98]["question"] = "Which Canadian province is the country's largest producer and exporter of maple syrup?";
qdata[98]["chapter"] = 8;
qdata[98]["moreinfo"] = "additional info on the question and answer";
qdata[98]["correct"] = 3;
qdata[98]["answers"] = new Array();
qdata[98]["answers"][1] = "Ontario";
qdata[98]["answers"][2] = "British Columbia";
qdata[98]["answers"][3] = "Quebec";
qdata[98]["answers"][4] = "New Brunswick";

qdata[99] = new Array();
qdata[99]["question"] = "The beaver was adopted centuries ago as a symbol of which of the following organizations?";
qdata[99]["chapter"] = 8;
qdata[99]["moreinfo"] = "additional info on the question and answer";
qdata[99]["correct"] = 2;
qdata[99]["answers"] = new Array();
qdata[99]["answers"][1] = "Calgary Stampede";
qdata[99]["answers"][2] = "Hudson's Bay Company";
qdata[99]["answers"][3] = "St. Jean Baptiste Church";
qdata[99]["answers"][4] = "Manitoba Legislature";

qdata[100] = new Array();
qdata[100]["question"] = "Canada has what percentage of the world's forests?";
qdata[100]["chapter"] = 8;
qdata[100]["moreinfo"] = "additional info on the question and answer";
qdata[100]["correct"] = 2;
qdata[100]["answers"] = new Array();
qdata[100]["answers"][1] = "3%";
qdata[100]["answers"][2] = "10%";
qdata[100]["answers"][3] = "80%";
qdata[100]["answers"][4] = "30%";

qdata[101] = new Array();
qdata[101]["question"] = "Who was the first Francophone prime minister of Canada after Confederation?";
qdata[101]["chapter"] = 8;
qdata[101]["moreinfo"] = "additional info on the question and answer";
qdata[101]["correct"] = 1;
qdata[101]["answers"] = new Array();
qdata[101]["answers"][1] = "Sir Wilfrid Laurier";
qdata[101]["answers"][2] = "Paul Edgar Philippe Martin";
qdata[101]["answers"][3] = "Jean Chr\351tien";
qdata[101]["answers"][4] = "Louis St-Laurent";

qdata[102] = new Array();
qdata[102]["question"] = "Which Canadian Prime Minister was born in Glasgow, Scotland in 1815 and immigrated to Upper Canada in 1820 with his family?";
qdata[102]["chapter"] = 8;
qdata[102]["moreinfo"] = "additional info on the question and answer";
qdata[102]["correct"] = 2;
qdata[102]["answers"] = new Array();
qdata[102]["answers"][1] = "Sir Wilfrid Laurier";
qdata[102]["answers"][2] = "Sir John Alexander Macdonald";
qdata[102]["answers"][3] = "Alexander Mackenzie";
qdata[102]["answers"][4] = "Sir Charles Tupper";

qdata[103] = new Array();
qdata[103]["question"] = "Who was the Queen at the time of Confederation?";
qdata[103]["chapter"] = 8;
qdata[103]["moreinfo"] = "additional info on the question and answer";
qdata[103]["correct"] = 3;
qdata[103]["answers"] = new Array();
qdata[103]["answers"][1] = "Anne";
qdata[103]["answers"][2] = "Elizabeth I";
qdata[103]["answers"][3] = "Victoria";
qdata[103]["answers"][4] = "Elizabeth II";

qdata[104] = new Array();
qdata[104]["question"] = "The cornerstone of Centre Block in the Parliament Buildings was laid by Prince ______  in 1860; the son of Queen Victoria.";
qdata[104]["chapter"] = 8;
qdata[104]["moreinfo"] = "additional info on the question and answer";
qdata[104]["correct"] = 2;
qdata[104]["answers"] = new Array();
qdata[104]["answers"][1] = "Charles";
qdata[104]["answers"][2] = "Albert";
qdata[104]["answers"][3] = "William";
qdata[104]["answers"][4] = "Harry";

qdata[105] = new Array();
qdata[105]["question"] = "When did most women in Canada over 21 years old receive the right to vote?";
qdata[105]["chapter"] = 9;
qdata[105]["moreinfo"] = "additional info on the question and answer";
qdata[105]["correct"] = 4;
qdata[105]["answers"] = new Array();
qdata[105]["answers"][1] = "1969";
qdata[105]["answers"][2] = "1982";
qdata[105]["answers"][3] = "1902";
qdata[105]["answers"][4] = "1918";

qdata[106] = new Array();
qdata[106]["question"] = "In 1970, there was a major change to the Canadian federal election voting system. What was that change?";
qdata[106]["chapter"] = 9;
qdata[106]["moreinfo"] = "additional info on the question and answer";
qdata[106]["correct"] = 3;
qdata[106]["answers"] = new Array();
qdata[106]["answers"][1] = "Women gained the right to vote";
qdata[106]["answers"][2] = "Personal identification became a necessity to vote";
qdata[106]["answers"][3] = "The voting age was lowered from 21 to 18";
qdata[106]["answers"][4] = "Voting rights were extended to all inmates";

qdata[107] = new Array();
qdata[107]["question"] = "On July 5, 1916, the assembly of the No. 2 Construction Battalion was approved. Why was this battalion different from the rest of the military's battalions?";
qdata[107]["chapter"] = 9;
qdata[107]["moreinfo"] = "additional info on the question and answer";
qdata[107]["correct"] = 4;
qdata[107]["answers"] = new Array();
qdata[107]["answers"][1] = "It was Canada's first, and only, battalion consisting of only construction workers";
qdata[107]["answers"][2] = "It was Canada's first, and only, all-female battalion";
qdata[107]["answers"][3] = "It was Canada's first, and only, Francophone battalion";
qdata[107]["answers"][4] = "It was Canada's first, and only, all-black battalion";

qdata[108] = new Array();
qdata[108]["question"] = "The Queen is represented at the federal level in Canada on a day-to-day basis by the ______.";
qdata[108]["chapter"] = 9;
qdata[108]["moreinfo"] = "additional info on the question and answer";
qdata[108]["correct"] = 3;
qdata[108]["answers"] = new Array();
qdata[108]["answers"][1] = "Senator";
qdata[108]["answers"][2] = "Member of Parliament";
qdata[108]["answers"][3] = "Governor General";
qdata[108]["answers"][4] = "Premier";

qdata[109] = new Array();
qdata[109]["question"] = "What is Canada's federal police force called?";
qdata[109]["chapter"] = 9;
qdata[109]["moreinfo"] = "additional info on the question and answer";
qdata[109]["correct"] = 2;
qdata[109]["answers"] = new Array();
qdata[109]["answers"][1] = "Mounted Royal Canadian Police";
qdata[109]["answers"][2] = "Royal Canadian Mounted Police";
qdata[109]["answers"][3] = "Canada's Elite Police Force";
qdata[109]["answers"][4] = "Federal Bureau of Investigation";

qdata[110] = new Array();
qdata[110]["question"] = "In Canada, which temperature scale is used to measure temperature?";
qdata[110]["chapter"] = 9;
qdata[110]["moreinfo"] = "additional info on the question and answer";
qdata[110]["correct"] = 1;
qdata[110]["answers"] = new Array();
qdata[110]["answers"][1] = "Celsius";
qdata[110]["answers"][2] = "Fahrenheit";

qdata[111] = new Array();
qdata[111]["question"] = "There are seven steps in how a bill becomes law. In the House of Commons, what occurs during the third reading of the bill?";
qdata[111]["chapter"] = 9;
qdata[111]["moreinfo"] = "additional info on the question and answer";
qdata[111]["correct"] = 3;
qdata[111]["answers"] = new Array();
qdata[111]["answers"][1] = "The bill is considered read for the first time and is printed";
qdata[111]["answers"][2] = "Members can make other amendments";
qdata[111]["answers"][3] = "Members debate and vote on the bill";
qdata[111]["answers"][4] = "The bill receives royal assent after being passed by both houses";

qdata[112] = new Array();
qdata[112]["question"] = "Which of the following famous Canadian politicians has the nickname \"the last Father of Confederation\"?";
qdata[112]["chapter"] = 9;
qdata[112]["moreinfo"] = "additional info on the question and answer";
qdata[112]["correct"] = 4;
qdata[112]["answers"] = new Array();
qdata[112]["answers"][1] = "Brian Mulroney";
qdata[112]["answers"][2] = "Pierre Trudeau";
qdata[112]["answers"][3] = "Stephen Harper";
qdata[112]["answers"][4] = "Joey Smallwood";

qdata[113] = new Array();
qdata[113]["question"] = "In descending order, name the three largest cities in Canada.";
qdata[113]["chapter"] = 9;
qdata[113]["moreinfo"] = "additional info on the question and answer";
qdata[113]["correct"] = 2;
qdata[113]["answers"] = new Array();
qdata[113]["answers"][1] = "Toronto, Calgary, Vancouver";
qdata[113]["answers"][2] = "Toronto, Montreal, Vancouver";
qdata[113]["answers"][3] = "Calgary, Vancouver, Ottawa";
qdata[113]["answers"][4] = "Edmonton, Toronto, Vancouver";

qdata[114] = new Array();
qdata[114]["question"] = "When was the most recent territory in Canada formed?";
qdata[114]["chapter"] = 9;
qdata[114]["moreinfo"] = "additional info on the question and answer";
qdata[114]["correct"] = 1;
qdata[114]["answers"] = new Array();
qdata[114]["answers"][1] = "April 1, 1999";
qdata[114]["answers"][2] = "April 1, 2000";
qdata[114]["answers"][3] = "July 1, 1999";
qdata[114]["answers"][4] = "July 1, 2000";

qdata[115] = new Array();
qdata[115]["question"] = "Which of the following is not a Canadian invention or discovery?";
qdata[115]["chapter"] = 9;
qdata[115]["moreinfo"] = "additional info on the question and answer";
qdata[115]["correct"] = 4;
qdata[115]["answers"] = new Array();
qdata[115]["answers"][1] = "Basketball";
qdata[115]["answers"][2] = "Telephone";
qdata[115]["answers"][3] = "Insulin";
qdata[115]["answers"][4] = "Refrigeration";

qdata[116] = new Array();
qdata[116]["question"] = "Who donated the Stanley Cup to the National Hockey League?";
qdata[116]["chapter"] = 9;
qdata[116]["moreinfo"] = "additional info on the question and answer";
qdata[116]["correct"] = 2;
qdata[116]["answers"] = new Array();
qdata[116]["answers"][1] = "Bill Stanley";
qdata[116]["answers"][2] = "Lord Stanley, Governor General (1888 - 1893)";
qdata[116]["answers"][3] = "Stanley Lord";
qdata[116]["answers"][4] = "Stanley Bill";

qdata[117] = new Array();
qdata[117]["question"] = "Who was the first governor general of Canada (serving from July 1, 1867, to November 14, 1868)?";
qdata[117]["chapter"] = 9;
qdata[117]["moreinfo"] = "additional info on the question and answer";
qdata[117]["correct"] = 4;
qdata[117]["answers"] = new Array();
qdata[117]["answers"][1] = "Georges Vanier";
qdata[117]["answers"][2] = "Samuel de Champlain";
qdata[117]["answers"][3] = "Vincent Massey";
qdata[117]["answers"][4] = "Viscount Monck";

qdata[118] = new Array();
qdata[118]["question"] = "The elder daughter of King George VI and Queen Elizabeth, Queen Elizabeth II was born in 1926 and became Queen at the age of:";
qdata[118]["chapter"] = 10;
qdata[118]["moreinfo"] = "additional info on the question and answer";
qdata[118]["correct"] = 1;
qdata[118]["answers"] = new Array();
qdata[118]["answers"][1] = "25";
qdata[118]["answers"][2] = "20";
qdata[118]["answers"][3] = "17";
qdata[118]["answers"][4] = "30";

qdata[119] = new Array();
qdata[119]["question"] = "Who was the first explorer to reach Canada in 1497?";
qdata[119]["chapter"] = 10;
qdata[119]["moreinfo"] = "additional info on the question and answer";
qdata[119]["correct"] = 3;
qdata[119]["answers"] = new Array();
qdata[119]["answers"][1] = "Jacques Cartier";
qdata[119]["answers"][2] = "Henry Hudson";
qdata[119]["answers"][3] = "John Cabot";
qdata[119]["answers"][4] = "Samuel de Champlain";

qdata[120] = new Array();
qdata[120]["question"] = "The Canadian Constitution officially recognizes which of the three main categories of Aboriginal peoples in Canada?";
qdata[120]["chapter"] = 10;
qdata[120]["moreinfo"] = "additional info on the question and answer";
qdata[120]["correct"] = 3;
qdata[120]["answers"] = new Array();
qdata[120]["answers"][1] = "First Nations, Inuit, M\351tis";
qdata[120]["answers"][2] = "Cree, Iroquois, Micmac";
qdata[120]["answers"][3] = "Inuit, Indian, M\351tis";
qdata[120]["answers"][4] = "M\351tis, Ojibwa, Iroquois";

qdata[121] = new Array();
qdata[121]["question"] = "What song, written by Scottish-Canadian schoolmaster Alexander Muir (1830-1906) during the reign of Queen Victoria, incites Canadian patriotism?";
qdata[121]["chapter"] = 10;
qdata[121]["moreinfo"] = "additional info on the question and answer";
qdata[121]["correct"] = 2;
qdata[121]["answers"] = new Array();
qdata[121]["answers"][1] = "O Canada";
qdata[121]["answers"][2] = "The Maple Leaf Forever";
qdata[121]["answers"][3] = "God Save the Queen";
qdata[121]["answers"][4] = "This Land Is Your Land";

qdata[122] = new Array();
qdata[122]["question"] = "Nova Scotian and Olympian Marjorie Turner-Bailey is a descendant of a group of escaped slaves and freed men and women of African origin. What is the name of this group who fled to Canada from America in the 1780s?";
qdata[122]["chapter"] = 10;
qdata[122]["moreinfo"] = "additional info on the question and answer";
qdata[122]["correct"] = 2;
qdata[122]["answers"] = new Array();
qdata[122]["answers"][1] = "Underground Railroad Conductors";
qdata[122]["answers"][2] = "Black Loyalists";
qdata[122]["answers"][3] = "Young Canadians for Freedom";
qdata[122]["answers"][4] = "None of the above";

qdata[123] = new Array();
qdata[123]["question"] = "What was the name of the Italian immigrant to England who was the first to map Canada\'s Atlantic shore in 1497, setting foot on Newfoundland or Cape Breton Island and claiming the New Found Land for England?";
qdata[123]["chapter"] = 10;
qdata[123]["moreinfo"] = "additional info on the question and answer";
qdata[123]["correct"] = 1;
qdata[123]["answers"] = new Array();
qdata[123]["answers"][1] = "John Cabot";
qdata[123]["answers"][2] = "Sebastian Cabot";
qdata[123]["answers"][3] = "Daniel Sangiovanni";
qdata[123]["answers"][4] = "Christopher Columbus";

qdata[124] = new Array();
qdata[124]["question"] = "As Governor of Quebec, Lord Dorchester defended the rights of the Canadians, defeated an American military invasion of Quebec in 1775, and supervised the Loyalist migration to Nova Scotia and Quebec in 1782-1783. His original name was";
qdata[124]["chapter"] = 10;
qdata[124]["moreinfo"] = "additional info on the question and answer";
qdata[124]["correct"] = 4;
qdata[124]["answers"] = new Array();
qdata[124]["answers"][1] = "Sir Alfred Dorchester";
qdata[124]["answers"][2] = "Sir Alfred Lord";
qdata[124]["answers"][3] = "Sir Guy Lord";
qdata[124]["answers"][4] = "Sir Guy Carleton";

qdata[125] = new Array();
qdata[125]["question"] = "In 1813, Laura Secord, pioneer wife and mother of five children, made a dangerous 30-kilometre journey on foot to warn Lieutenant James FitzGibbon of a planned American attack. Her bravery contributed to the British-Canadian victory at the Battle of:";
qdata[125]["chapter"] = 10;
qdata[125]["moreinfo"] = "additional info on the question and answer";
qdata[125]["correct"] = 2;
qdata[125]["answers"] = new Array();
qdata[125]["answers"][1] = "Secord House";
qdata[125]["answers"][2] = "Beaver Dams";
qdata[125]["answers"][3] = "Sweet River";
qdata[125]["answers"][4] = "Thamesford Harbour";

qdata[126] = new Array();
qdata[126]["question"] = "The United States lost this battle, near Niagara Falls, in the War of 1812. Hint: Sir Isaac Brock, Governor of Upper Canada and Commander-in-Chief, was killed in the battle.";
qdata[126]["chapter"] = 10;
qdata[126]["moreinfo"] = "additional info on the question and answer";
qdata[126]["correct"] = 3;
qdata[126]["answers"] = new Array();
qdata[126]["answers"][1] = "Plains of Abraham";
qdata[126]["answers"][2] = "Niagara Falls";
qdata[126]["answers"][3] = "Queenston Heights";
qdata[126]["answers"][4] = "Independence";

qdata[127] = new Array();
qdata[127]["question"] = "When did Lord Elgin, the Governor of the Province of Canada, grant responsible government?";
qdata[127]["chapter"] = 10;
qdata[127]["moreinfo"] = "additional info on the question and answer";
qdata[127]["correct"] = 1;
qdata[127]["answers"] = new Array();
qdata[127]["answers"][1] = "1848";
qdata[127]["answers"][2] = "1834";
qdata[127]["answers"][3] = "1902";
qdata[127]["answers"][4] = "1891";

qdata[128] = new Array();
qdata[128]["question"] = "Red and white, the colours of the Canadian flag, were designated Canada\'s national colours in 1921 by:";
qdata[128]["chapter"] = 10;
qdata[128]["moreinfo"] = "additional info on the question and answer";
qdata[128]["correct"] = 4;
qdata[128]["answers"] = new Array();
qdata[128]["answers"][1] = "Prime Minister Sir John A. Macdonald";
qdata[128]["answers"][2] = "Prime Minister William Lyon Mackenzie King";
qdata[128]["answers"][3] = "Prime Minister Arthur Meighen";
qdata[128]["answers"][4] = "King George V";

qdata[129] = new Array();
qdata[129]["question"] = "The flag of the Hudson\'s Bay Company, a variant of the Red Ensign flag, flew over Western Canada for 200 years before Confederation.";
qdata[129]["chapter"] = 10;
qdata[129]["moreinfo"] = "additional info on the question and answer";
qdata[129]["correct"] = 1;
qdata[129]["answers"] = new Array();
qdata[129]["answers"][1] = "True";
qdata[129]["answers"][2] = "False";

qdata[130] = new Array();
qdata[130]["question"] = "In the 1850s, Canadian soldiers began using which symbol on their uniforms?";
qdata[130]["chapter"] = 10;
qdata[130]["moreinfo"] = "additional info on the question and answer";
qdata[130]["correct"] = 4;
qdata[130]["answers"] = new Array();
qdata[130]["answers"][1] = "The Beaver";
qdata[130]["answers"][2] = "The Cross";
qdata[130]["answers"][3] = "Crossed Rifles";
qdata[130]["answers"][4] = "The Maple Leaf";

qdata[131] = new Array();
qdata[131]["question"] = "Phil Edwards was a Canadian track and field champion, winning bronze medals for Canada in the 1928, 1932 and 1936 Olympics. He then graduated from McGill University Medical School and went on to serve as a captain in the Canadian Army during the Second World War. As a Montreal doctor, he became an expert in tropical diseases. Where was Phil Edwards born?";
qdata[131]["chapter"] = 11;
qdata[131]["moreinfo"] = "additional info on the question and answer";
qdata[131]["correct"] = 4;
qdata[131]["answers"] = new Array();
qdata[131]["answers"][1] = "Montreal";
qdata[131]["answers"][2] = "France";
qdata[131]["answers"][3] = "Britain";
qdata[131]["answers"][4] = "British Guiana";

qdata[132] = new Array();
qdata[132]["question"] = "Paul Henderson scored the winning goal for Canada in the Canada-Soviet Summit Series in hockey. In what year was this goal, often referred to as \"the goal heard around the world,\" scored?";
qdata[132]["chapter"] = 11;
qdata[132]["moreinfo"] = "additional info on the question and answer";
qdata[132]["correct"] = 1;
qdata[132]["answers"] = new Array();
qdata[132]["answers"][1] = "1972";
qdata[132]["answers"][2] = "1967";
qdata[132]["answers"][3] = "1983";
qdata[132]["answers"][4] = "1980";

qdata[133] = new Array();
qdata[133]["question"] = "The federal government is responsible for which of the following under the Constitution:";
qdata[133]["chapter"] = 11;
qdata[133]["moreinfo"] = "additional info on the question and answer";
qdata[133]["correct"] = 4;
qdata[133]["answers"] = new Array();
qdata[133]["answers"][1] = "National defence and foreign policy";
qdata[133]["answers"][2] = "Citizenship and criminal justice";
qdata[133]["answers"][3] = "International trade and Aboriginal affairs";
qdata[133]["answers"][4] = "All of the above";

qdata[134] = new Array();
qdata[134]["question"] = "Jazz pianist Oscar Peterson received the Order of Canada in 1973 from the 20th Governor General of Canada. This Governor General (the representative of the Queen) was:";
qdata[134]["chapter"] = 11;
qdata[134]["moreinfo"] = "additional info on the question and answer";
qdata[134]["correct"] = 4;
qdata[134]["answers"] = new Array();
qdata[134]["answers"][1] = "Adrienne Clarkson";
qdata[134]["answers"][2] = "Micha\353lle Jean";
qdata[134]["answers"][3] = "Lord Bessborough";
qdata[134]["answers"][4] = "Roland Michener";

qdata[135] = new Array();
qdata[135]["question"] = "Canada\'s national summer sport is:";
qdata[135]["chapter"] = 11;
qdata[135]["moreinfo"] = "additional info on the question and answer";
qdata[135]["correct"] = 2;
qdata[135]["answers"] = new Array();
qdata[135]["answers"][1] = "Soccer";
qdata[135]["answers"][2] = "Lacrosse";
qdata[135]["answers"][3] = "Football";
qdata[135]["answers"][4] = "None of the above";

qdata[136] = new Array();
qdata[136]["question"] = "Canada\'s national winter sport is:";
qdata[136]["chapter"] = 11;
qdata[136]["moreinfo"] = "additional info on the question and answer";
qdata[136]["correct"] = 3;
qdata[136]["answers"] = new Array();
qdata[136]["answers"][1] = "Cross-country skiing";
qdata[136]["answers"][2] = "Figure skating";
qdata[136]["answers"][3] = "Hockey";
qdata[136]["answers"][4] = "Curling";

qdata[137] = new Array();
qdata[137]["question"] = "The largest freshwater lake in the world by surface area is located between the province of Ontario and the United States of America and is called:";
qdata[137]["chapter"] = 11;
qdata[137]["moreinfo"] = "additional info on the question and answer";
qdata[137]["correct"] = 2;
qdata[137]["answers"] = new Array();
qdata[137]["answers"][1] = "Lake Erie";
qdata[137]["answers"][2] = "Lake Superior";
qdata[137]["answers"][3] = "Great Slave Lake";
qdata[137]["answers"][4] = "Lake Ontario";

qdata[138] = new Array();
qdata[138]["question"] = "In which year did the Royal Canadian Navy come into existence?";
qdata[138]["chapter"] = 11;
qdata[138]["moreinfo"] = "additional info on the question and answer";
qdata[138]["correct"] = 4;
qdata[138]["answers"] = new Array();
qdata[138]["answers"][1] = "1927";
qdata[138]["answers"][2] = "1892";
qdata[138]["answers"][3] = "1943";
qdata[138]["answers"][4] = "1910";

qdata[139] = new Array();
qdata[139]["question"] = "Niagara Falls is actually made up of three waterfalls. The American Falls and the Bridal Veil Falls are located in the United States. What is the name of the waterfall on the Canadian side?";
qdata[139]["chapter"] = 11;
qdata[139]["moreinfo"] = "additional info on the question and answer";
qdata[139]["correct"] = 3;
qdata[139]["answers"] = new Array();
qdata[139]["answers"][1] = "Rideau Falls";
qdata[139]["answers"][2] = "Niagara Peninsula Falls";
qdata[139]["answers"][3] = "Horseshoe Falls";
qdata[139]["answers"][4] = "Citadel Falls";

qdata[140] = new Array();
qdata[140]["question"] = "The CN Tower (Canadian National Tower), Canada\'s tallest free-standing structure, is a communications and observation tower in downtown Toronto, Ontario. In what year was it built?";
qdata[140]["chapter"] = 11;
qdata[140]["moreinfo"] = "additional info on the question and answer";
qdata[140]["correct"] = 1;
qdata[140]["answers"] = new Array();
qdata[140]["answers"][1] = "1976";
qdata[140]["answers"][2] = "1983";
qdata[140]["answers"][3] = "1957";
qdata[140]["answers"][4] = "1990";

qdata[141] = new Array();
qdata[141]["question"] = "\"O Canada\" was sung for over a century before becoming Canada\'s national anthem. In which year was the song officially designated by Parliament as our national anthem?";
qdata[141]["chapter"] = 11;
qdata[141]["moreinfo"] = "additional info on the question and answer";
qdata[141]["correct"] = 1;
qdata[141]["answers"] = new Array();
qdata[141]["answers"][1] = "1980";
qdata[141]["answers"][2] = "1958";
qdata[141]["answers"][3] = "1920";
qdata[141]["answers"][4] = "1899";

qdata[142] = new Array();
qdata[142]["question"] = "On September 10 of which year did the government of Mackenzie King declare war on Hitler\'s Germany ten days after the rest of the British Empire declared war? ";
qdata[142]["chapter"] = 11;
qdata[142]["moreinfo"] = "additional info on the question and answer";
qdata[142]["correct"] = 4;
qdata[142]["answers"] = new Array();
qdata[142]["answers"][1] = "1914";
qdata[142]["answers"][2] = "1907";
qdata[142]["answers"][3] = "1922";
qdata[142]["answers"][4] = "1939";

qdata[143] = new Array();
qdata[143]["question"] = "The easternmost point in North America is found in which part of Canada?";
qdata[143]["chapter"] = 11;
qdata[143]["moreinfo"] = "additional info on the question and answer";
qdata[143]["correct"] = 2;
qdata[143]["answers"] = new Array();
qdata[143]["answers"][1] = "Charlottetown, Prince Edward Island";
qdata[143]["answers"][2] = "Cape Spear, Newfoundland";
qdata[143]["answers"][3] = "Truro, Nova Scotia";
qdata[143]["answers"][4] = "None of the above";

qdata[144] = new Array();
qdata[144]["question"] = "Government-funded medical care was introduced in Canada in 1962. In which province was it first introduced?";
qdata[144]["chapter"] = 11;
qdata[144]["moreinfo"] = "additional info on the question and answer";
qdata[144]["correct"] = 2;
qdata[144]["answers"] = new Array();
qdata[144]["answers"][1] = "Nova Scotia";
qdata[144]["answers"][2] = "Saskatchewan";
qdata[144]["answers"][3] = "Quebec";
qdata[144]["answers"][4] = "British Columbia";

qdata[145] = new Array();
qdata[145]["question"] = "Canadian Joseph-Armand Bombardier is famous for inventing which of the following?";
qdata[145]["chapter"] = 11;
qdata[145]["moreinfo"] = "additional info on the question and answer";
qdata[145]["correct"] = 3;
qdata[145]["answers"] = new Array();
qdata[145]["answers"][1] = "The airplane";
qdata[145]["answers"][2] = "The atom bomb";
qdata[145]["answers"][3] = "The snowmobile";
qdata[145]["answers"][4] = "The electric knife";

qdata[146] = new Array();
qdata[146]["question"] = "In 1867, four provinces joined to become the country that is now Canada. Which of the following was NOT one of the first four provinces in Canada?";
qdata[146]["chapter"] = 11;
qdata[146]["moreinfo"] = "additional info on the question and answer";
qdata[146]["correct"] = 4;
qdata[146]["answers"] = new Array();
qdata[146]["answers"][1] = "Ontario";
qdata[146]["answers"][2] = "Quebec";
qdata[146]["answers"][3] = "New Brunswick";
qdata[146]["answers"][4] = "Manitoba";

qdata[147] = new Array();
qdata[147]["question"] = "Who was the first Canadian to go into space?";
qdata[147]["chapter"] = 11;
qdata[147]["moreinfo"] = "additional info on the question and answer";
qdata[147]["correct"] = 2;
qdata[147]["answers"] = new Array();
qdata[147]["answers"][1] = "Roberta Bondar";
qdata[147]["answers"][2] = "Marc Garneau";
qdata[147]["answers"][3] = "Chris Hadfield";
qdata[147]["answers"][4] = "Jeremy Hansen";

qdata[148] = new Array();
qdata[148]["question"] = "When did Queen Elizabeth II and United States President Eisenhower open the St. Lawrence Seaway?";
qdata[148]["chapter"] = 11;
qdata[148]["moreinfo"] = "additional info on the question and answer";
qdata[148]["correct"] = 3;
qdata[148]["answers"] = new Array();
qdata[148]["answers"][1] = "2001";
qdata[148]["answers"][2] = "1934";
qdata[148]["answers"][3] = "1959";
qdata[148]["answers"][4] = "1975";

qdata[149] = new Array();
qdata[149]["question"] = "When did the Trans-Canada Highway officially open?";
qdata[149]["chapter"] = 11;
qdata[149]["moreinfo"] = "additional info on the question and answer";
qdata[149]["correct"] = 1;
qdata[149]["answers"] = new Array();
qdata[149]["answers"][1] = "1962";
qdata[149]["answers"][2] = "1902";
qdata[149]["answers"][3] = "2005";
qdata[149]["answers"][4] = "1981";

qdata[150] = new Array();
qdata[150]["question"] = "The first flight in Canada took place on February 23, 1909, when J.A.D. McCurdy flew the Silver Dart over which location?";
qdata[150]["chapter"] = 11;
qdata[150]["moreinfo"] = "additional info on the question and answer";
qdata[150]["correct"] = 4;
qdata[150]["answers"] = new Array();
qdata[150]["answers"][1] = "Sydney, Nova Scotia";
qdata[150]["answers"][2] = "Vancouver, British Columbia";
qdata[150]["answers"][3] = "Winnipeg, Manitoba";
qdata[150]["answers"][4] = "Baddeck, Nova Scotia";

qdata[151] = new Array();
qdata[151]["question"] = "\"For here [in Canada], I want the marble to remain the marble; the granite to remain the granite; the oak to remain the oak; and out of these elements, I would build a nation great among the nations of the world.\"  Which Prime Minister of Canada said this?";
qdata[151]["chapter"] = 11;
qdata[151]["moreinfo"] = "additional info on the question and answer";
qdata[151]["correct"] = 1;
qdata[151]["answers"] = new Array();
qdata[151]["answers"][1] = "Sir Wilfrid Laurier";
qdata[151]["answers"][2] = "Sir John A. Macdonald";
qdata[151]["answers"][3] = "Richard B. Bennett";
qdata[151]["answers"][4] = "Pierre E. Trudeau";

qdata[152] = new Array();
qdata[152]["question"] = "\"I am a Canadian,<br />free to speak without fear,<br />free to worship in my own way,<br />free to stand for what I think right,<br />free to oppose what I believe wrong,<br />or free to choose those<br />who shall govern my country.<br />This heritage of freedom<br />I pledge to uphold<br />for myself and all mankind.\"<br />Which Prime Minister of Canada is known for saying this?";
qdata[152]["chapter"] = 11;
qdata[152]["moreinfo"] = "additional info on the question and answer";
qdata[152]["correct"] = 1;
qdata[152]["answers"] = new Array();
qdata[152]["answers"][1] = "John Diefenbaker";
qdata[152]["answers"][2] = "Sir John A. Macdonald";
qdata[152]["answers"][3] = "Mackenzie Bowell";
qdata[152]["answers"][4] = "Sir Wilfrid Laurier";
qdata;

 gQuestionsOriginal = qdata;

    return gQuestionsOriginal;
}


function quizGetTemplates()
{
    if( gQuizTemplates )
    {
        return gQuizTemplates;
    }

    // Templates 
var templates = new Array();
templates["question"] = "<div><h2 tabindex=\"-1\">Question [[QUESTION_INDEX]] of [[NUM_QS]]</h2><fieldset aria-live=\"off\"><legend>[[QUESTION_PHRASE]]</legend><div class=\"form-group\">[[QUESTION_OPTIONS]]</div></fieldset></div>";
templates["questionOption"] = "[[OPTION_INPUT]] [[OPTION_OLABEL]][[OPTION_PHRASE]][[OPTION_CLABEL]] [[OPTION_LABEL_CHOSEN]] [[OPTION_LABEL_CORRECT]]<br/>";

    gQuizTemplates = templates;

    return gQuizTemplates;
}

function quizArrayCheckCrudKey( key )
{
    if( key == 'subarr'
        ||
        key == 'subarray'
        ||
        key == 'push'
        ||
        key == 'pop' )
    {
        return true;
    }

    return false;
}

function quizArrayCheckHasCrud( anArray )
{
    var crud = 0;

    if( anArray['subarr'] )
    {
        crud++;
    }

    if( anArray['subarray'] )
    {
        crud++;
    }

    return crud;
}

function quizGetTemplateQuestion()
{
    var templates = quizGetTemplates();

    if( templates && templates['question'] )
    {
        return templates['question'];
    }

    return '';
}

function quizGetTemplateQuestionOption()
{
    var templates = quizGetTemplates();

    if( templates && templates['questionOption'] )
    {
        return templates['questionOption'];
    }

    return '';
}

function quizSetContext( contextValue )
{
    if( !document.getElementById )
    {
        return;
    }

    var context = document.getElementById( 'quiz_context' );
    if( !context )
    {
        return;
    }

    context.className = contextValue;
}

function quizGetQuestionsShuffled()
{
    if( gQuestionsShuffled )
    {
        return gQuestionsShuffled;
    }

    var questions = quizGetQuestions();
    var shuffled = new Array();
	
	
	var question = null;
 	//questionPhrase = quizHtmlMarkup( question['question'] );
	
	var j = 1;
	var k = 0;
	
    for( var i in questions )
    {
        if( quizArrayCheckCrudKey( i ) )
        {
            continue;
        }
		var chapter = null;
		chapter = questions[i]['chapter'];
		
		if (j != chapter) { 
			j++;
			k = 0;
		}
		
		switch(chapter) {
			case 1:
				chp1[k] = questions[i];		
				break;
			case 2:
				chp2[k] = questions[i];
				break;
			case 3:
				chp3[k] = questions[i];
				break;
			case 4:
				chp4[k] = questions[i];
				break;
			case 5:
				chp5[k] = questions[i];
				break;
			case 6:
				chp6[k] = questions[i];
				break;
			case 7:
				chp7[k] = questions[i];
				break;
			case 8:
				chp8[k] = questions[i];
				break;
			case 9:
				chp9[k] = questions[i];
				break;
			case 10:
				chp10[k] = questions[i];
				break;
			case 11:
				chp11[k] = questions[i];
				break;
			default:
				break;
		}
		k++;
		
        shuffled[i] = questions[i];
    }

	chp1 = quizArrayShuffle(chp1);
	chp2 = quizArrayShuffle(chp2);
	chp3 = quizArrayShuffle(chp3);
	chp4 = quizArrayShuffle(chp4);
	chp5 = quizArrayShuffle(chp5);
	chp6 = quizArrayShuffle(chp6);
	chp7 = quizArrayShuffle(chp7);
	chp8 = quizArrayShuffle(chp8);
	chp9 = quizArrayShuffle(chp9);
	chp10 = quizArrayShuffle(chp10);
	chp11 = quizArrayShuffle(chp11);

	

    shuffled = quizArrayShuffle( shuffled );
	
	var chapterStorage = [chp1, chp2, chp3, chp4, chp5, chp6, chp7, chp8, chp9, chp10, chp11];
	if (reviewChapter != null){
		for (var a=0; a < chapterStorage.length; a++){
			if (a == reviewChapter) {
				gQuestionsShuffled = chapterStorage[a - 1];
			}
		}
		gQuestionsShuffled.length = gQuestionsMax;
	}
	
	
	
	if (reviewChapter == null) {
		var gQuestionsMaxinA = Math.round(gQuestionsMax/numChapters);
		var randomNumbers = new Array();
		var tempNum = 0;
		
		for (var x = 0; x < numChapters; x++) {
			//randomNumber = Math.floor( (Math.random() * gQuestionsMaxinA + 1) );
			randomNumbers[x] = gQuestionsMaxinA;
			tempNum += gQuestionsMaxinA;
		}
		
		if (tempNum > gQuestionsMax) {
			for (var y = 0; y < randomNumbers.length; y ++) {
				if (tempNum === gQuestionsMax) {break;}
				if (randomNumbers[y] > 1 ) {randomNumbers[y] = randomNumbers[y] - 1}
				tempNum = 0;			
				for (var temp = 0; temp < randomNumbers.length; temp ++) {
					tempNum =  tempNum + randomNumbers[temp];
				}
			}
		}
		if (tempNum < gQuestionsMax) {
			for (var z = 0; z < randomNumbers.length; z ++) {
				if (tempNum === gQuestionsMax) {break;}
				if (randomNumbers[z] === 1 ) {randomNumbers[z] = randomNumbers[z] + 1}
				tempNum = 0;			
				for (var temp = 0; temp < randomNumbers.length; temp ++) {
					tempNum =  tempNum + randomNumbers[temp];
				}			
			}
		}
		
		randomNumbers = quizArrayShuffle( randomNumbers );	
		
		var combinedQs = new Array();
		
		var inc = 0;
		for (var c = 0; c < numChapters; c++) {		
			//chapter 1
			if (c == 0) {
				for (var q = 0; q < randomNumbers[c]; q++) {
					combinedQs[inc] = chp1[q];
					inc++;
				}				
			}
			//chapter 2
			if (c == 1) {
				for (var q = 0; q < randomNumbers[c]; q++) {
					combinedQs[inc] = chp2[q];
					inc++;
				}
			}
			//chapter 3
			if (c == 2) {
				for (var q = 0; q < randomNumbers[c]; q++) {
					combinedQs[inc] = chp3[q];
					inc++;
				}
			}
			//chapter 4
			if (c == 3) {
				for (var q = 0; q < randomNumbers[c]; q++) {
					combinedQs[inc] = chp4[q];
					inc++;
				}
			}
			//chapter 5
			if (c == 4) {
				for (var q = 0; q < randomNumbers[c]; q++) {
					combinedQs[inc] = chp5[q];
					inc++;
				}
			}
			//chapter 6
			if (c == 5) {
				for (var q = 0; q < randomNumbers[c]; q++) {
					combinedQs[inc] = chp6[q];
					inc++;
				}
			}
			//chapter 7
			if (c == 6) {
				for (var q = 0; q < randomNumbers[c]; q++) {
					combinedQs[inc] = chp7[q];
					inc++;
				}
			}
			//chapter 8
			if (c == 7) {
				for (var q = 0; q < randomNumbers[c]; q++) {
					combinedQs[inc] = chp8[q];
					inc++;
				}
			}
			//chapter 9
			if (c == 8) {
				for (var q = 0; q < randomNumbers[c]; q++) {
					combinedQs[inc] = chp9[q];
					inc++;
				}
			}
			//chapter 10
			if (c == 9) {
				for (var q = 0; q < randomNumbers[c]; q++) {
					combinedQs[inc] = chp10[q];
					inc++;
				}
			}
			//chapter 11
			if (c == 10) {
				for (var q = 0; q < randomNumbers[c]; q++) {
					combinedQs[inc] = chp11[q];
					inc++;
				}
			}	
			gQuestionsShuffled = quizArrayShuffle(combinedQs);	
		}
	}
	
	
    return gQuestionsShuffled;
}

function quizStrReplace( strSomething, strWith, strIn )
{
    if( strIn )
    {
        return strIn.replace( strSomething, strWith );
    }

    return '';
}

function quizHtmlMarkup( html )
{
    html = quizStrReplace( '&', '&amp;', html );

    if( gQuizLanguage === 'fra' )
    {
        html = quizStrReplace( '1er', '1<sup>er</sup>', html );
    }

    return html;
}

function quizArrayShuffle( array, complexity )
{
    var total;
    var iterations;
    var index1;
    var index2;
    var temp;

    if( !complexity )
    {
        complexity = 5;
    }

    total = array.length;
    iterations = total * complexity;

    for( var iteration = 0; iteration < iterations; iteration++ )
    {
        if( quizArrayCheckCrudKey( iteration ) )
        {
            continue;
        }

        index1 = Math.floor( (Math.random() * total) );
        index2 = Math.floor( (Math.random() * total) );

        temp          = array[index1];
        array[index1] = array[index2];
        array[index2] = temp;
    }

    return array;
};

function quizOptionIsChecked( id )
{
    if( !document.getElementById )
    {
        return false;
    }

    var option = document.getElementById( id );

    if( option && option.checked )
    {
        return true;
    }

    return false;
}

function quizIsset( test )
{
    if( typeof( test ) == 'undefined' )
    {
        return false;
    }

    return true;
}

function quizDefaultValue( test, value )
{
    if( quizIsset( test ) )
    {
        return test;
    }

    if( quizIsset( value ) )
    {
        return value;
    }

    return null;
}

function quizNumberFormat( number, decimals, decimalPoint, groupSep )
{
    decimals     = 1  * quizDefaultValue( decimals, 0 );
    decimalPoint = '' + quizDefaultValue( decimalPoint, '.' );
    groupSep     = '' + quizDefaultValue( groupSep, ',' );

    var sNumber  = (('' + number).replace( /^\s+|\s+$/g, '' )).split( '.' );
    var sInteger = '' + quizDefaultValue( sNumber[0], 0 );
    var sDecimal = '' + quizDefaultValue( sNumber[1], 0 );

    sInteger = '' + parseInt( sInteger );
    sDecimal = '' + parseInt( sDecimal );

    if( isNaN( (1 * sInteger) ) || isNaN( (1 * sDecimal) ) )
    {
        return 'NaN';
    }

    sNumber = '';

    var doSep = 2;
    var i = sInteger.length;
    for( i = sInteger.length - 1; i >= 0; i-- )
    {
        sNumber = sInteger.charAt( i ) + sNumber;
        if( doSep === 0 && i > 0 )
        {
            doSep = 2;
            sNumber = groupSep + sNumber;
        }
        else
        {
            doSep--;
        }
    }

    if( sDecimal.length > decimals )
    {
        sDecimal = sDecimal.substr( 0, decimals );
    }
    else
    {
        while( sDecimal.length < decimals )
        {
            sDecimal += '0';
        }
    }

    if( decimals > 0 )
    {
        sNumber = sNumber + decimalPoint + sDecimal;
    }

    return sNumber;
}

function quizArrayImplode( sep, array )
{
    var content = '';

    var i = 0;
    for( var key in array )
    {
        if( quizArrayCheckCrudKey( key ) )
        {
            continue;
        }

        content += array[key];

        i++;
        if( i < array.length )
        {
            content += sep;
        }
    }

    return content;
}

function quizGetQuestionsHtml( questions )
{
    var html                = null;

    var questionsAcc        = null;
    var question            = null;
    var questionIndex       = null;
    var questionPhrase      = null;
    var questionHtml        = null;

    var optionsAcc          = null;
    var option              = null;
    var optionId            = null;
    var optionPhrase        = null;
    var optionClassChosen   = null;
    var optionClassCorrect  = null;
    var optionLabelChosen   = null;
    var optionLabelCorrect  = null;
    var optionInput         = null;
    var optionLabelOpen     = null;
    var optionLabelClose    = null;
    var optionHtml          = null;
    var optionsHtml         = null;

    var templateQuestion = quizGetTemplateQuestion();
    var templateOption = quizGetTemplateQuestionOption();
	
    questionsAcc = new Array();
    for( var qidx in questions )
    {
        if( quizArrayCheckCrudKey( qidx ) )
        {
            continue;
        }
		
		question = questions[qidx];

	
		questionIndex  = parseInt( qidx ) + 1;
		
        questionPhrase = quizHtmlMarkup( question['question'] );

        optionsAcc = new Array();
        for( var oidx in question['answers'] )
        {
            if( quizArrayCheckCrudKey( oidx ) )
            {
                continue;
            }

            option = question['answers'][oidx];

            optionId            = 'q_' + questionIndex + '_' + oidx;
            optionPhrase        = quizHtmlMarkup( option );
            optionClassChosen   = '';
            optionClassCorrect  = '';
            optionLabelChosen   = '';
            optionLabelCorrect  = '';
			
			if (oidx == 1) {
				optionInput =
					'<input'
				  + ' class="radiobtn" type="radio"'
				  + ' id="' + optionId + '"'
				  + ' name="q_' + questionIndex + '"'
				  + ' value="' + oidx + '"'
				  + ' required="required"/>';
			}
			else {
				optionInput =
					'<input'
				  + ' class="radiobtn" type="radio"'
				  + ' id="' + optionId + '"'
				  + ' name="q_' + questionIndex + '"'
				  + ' value="' + oidx + '"'
				  + ' />';
			}

            optionLabelOpen =
                '<label'
              + ' for="' + optionId + '"'
              + '>';

            optionLabelClose =
                '</label>';

            optionHtml = templateOption;
            optionHtml = quizStrReplace( '[[OPTION_ID]]', optionId, optionHtml );
            optionHtml = quizStrReplace( '[[OPTION_INPUT]]', optionInput, optionHtml );
            optionHtml = quizStrReplace( '[[OPTION_PHRASE]]', optionPhrase, optionHtml );
            optionHtml = quizStrReplace( '[[OPTION_OLABEL]]', optionLabelOpen, optionHtml );
            optionHtml = quizStrReplace( '[[OPTION_CLABEL]]', optionLabelClose, optionHtml );
            optionHtml = quizStrReplace( '[[OPTION_CLASS_CHOSEN]]', optionClassChosen, optionHtml );
            optionHtml = quizStrReplace( '[[OPTION_CLASS_CORRECT]]', optionClassCorrect, optionHtml );
            optionHtml = quizStrReplace( '[[OPTION_LABEL_CHOSEN]]', optionLabelChosen, optionHtml );
            optionHtml = quizStrReplace( '[[OPTION_LABEL_CORRECT]]', optionLabelCorrect, optionHtml );

            optionsAcc[optionsAcc.length] = optionHtml;
        }

        optionsHtml = quizArrayImplode( '', optionsAcc );

        questionHtml = templateQuestion;
        questionHtml = quizStrReplace( '[[QUESTION_INDEX]]', questionIndex, questionHtml );
		questionHtml = quizStrReplace( '[[NUM_QS]]', gQuestionsMax, questionHtml );
        questionHtml = quizStrReplace( '[[QUESTION_PHRASE]]', questionPhrase, questionHtml );
        questionHtml = quizStrReplace( '[[QUESTION_OPTIONS]]', optionsHtml, questionHtml );

        questionsAcc[questionsAcc.length] = questionHtml;
    }

    html = quizArrayImplode( '', questionsAcc );

    return html;
}

function quizGetAnswersHtml( questions, info, prev )
{
    var html                = null;

    var questionsAcc        = null;
    var question            = null;
    var questionIndex       = null;
    var questionPhrase      = null;
    var questionHtml        = null;

    var optionsAcc          = null;
    var option              = null;
    var optionId            = null;
    var optionPhrase        = null;
    var optionClassChosen   = null;
    var optionClassCorrect  = null;
    var optionLabelChosen   = null;
    var optionLabelCorrect  = null;
    var optionInput         = null;
    var optionLabelOpen     = null;
    var optionLabelClose    = null;
    var optionHtml          = null;
    var optionsHtml         = null;
	var addinfo				= null;
	var optionCorrectText	= null;
	var optionGlyph			= null;
	
	var option_yn = null;
	
	
	
	
	if (prev != 0) {
		var templateQuestion = quizGetTemplateQuestion();
   		var templateOption = quizGetTemplateQuestionOption();
	}
	else {
		var templateQuestion = "<div class=\"col-md-4\"><div class=\"panel panel-info hght-inhrt\"><header class=\"panel-heading\"><h3 class=\"panel-title\">Question [[QUESTION_INDEX]] <span class=\"wb-inv\">([[OPTION_YN]])</span></h3></header><div class=\"panel-body\"><p>[[QUESTION_PHRASE]]</p><div>[[QUESTION_OPTIONS]]</div>";
		var templateOption = "<li class=\"[[OPTION_CLASS_CHOSEN]] [[OPTION_CLASS_CORRECT]]\">[[OPTION_INPUT]] [[OPTION_OLABEL]][[OPTION_PHRASE]][[OPTION_CLABEL]] [[OPTION_GLYPH]] [[OPTION_LABEL_CHOSEN]] [[OPTION_LABEL_CORRECT]]</li>";
	}
	
	

    info['total'] = 0;
    info['correct'] = 0;

	var qChapterPerc = null;
	
    questionsAcc = new Array();
	
	
	var c1 = 0;
	var c2 = 0;
	var c3 = 0;
	var c4 = 0;
	var c5 = 0;
	var c6 = 0;
	var c7 = 0;
	var c8 = 0;
	var c9 = 0;
	var c10 = 0;
	var c11 = 0;
	var sc1 = 0;
	var sc2 = 0;
	var sc3 = 0;
	var sc4 = 0;
	var sc5 = 0;
	var sc6 = 0;
	var sc7 = 0;
	var sc8 = 0;
	var sc9 = 0;
	var sc10 = 0;
	var sc11 = 0;
	var pc1 = 0;
	var pc2 = 0;
	var pc3 = 0;
	var pc4 = 0;
	var pc5 = 0;
	var pc6 = 0;
	var pc7 = 0;
	var pc8 = 0;
	var pc9 = 0;
	var pc10 = 0;
	var pc11 = 0;
	var table;
	var tablerow;
	var correctAnswer = null;
	
    for( var qidx in questions )
    {
        if( quizArrayCheckCrudKey( qidx ) )
        {
            continue;
        }
		tempvar = 0;
        info['total']++;

        question = questions[qidx];

        questionIndex  = parseInt( qidx ) + 1;
        questionPhrase = quizHtmlMarkup( question['question'] );
		addinfo = quizHtmlMarkup( question['moreinfo'] );

        optionsAcc = new Array();
		var tChapter = question['chapter'];
        for( var oidx in question['answers'] )
        {
            if( quizArrayCheckCrudKey( oidx ) )
            {
                continue;
            }

            option = question['answers'][oidx];

            optionId            = 'q_' + questionIndex + '_' + oidx;
            optionPhrase        = quizHtmlMarkup( option );
            optionInput         = '';
            optionLabelOpen     = '';
            optionLabelClose    = '';
            optionClassChosen   = '';
            optionClassCorrect  = '';
            optionLabelChosen   = '';
            optionLabelCorrect  = '';
			optionGlyph	= '';

            if( gQuestionsAnswers[qidx] == oidx )
            {
                optionClassChosen = ' text-danger ';
				optionGlyph	= ' <span class="glyphicon glyphicon-remove"></span>';
                optionLabelChosen = ' <span>(Chosen)</span> ';


                if( oidx == parseInt( question['correct'] ) )
                {
                    info['correct']++;
					correctAnswer = true;
					optionCorrectText = '<strong>Correct.</strong>';
					option_yn = 'answered correctly';
                }
				else{
					correctAnswer = false;
					optionCorrectText = '<strong>Incorrect.</strong>';
					option_yn = 'answered incorrectly';									
					
				}
            }
			else if ( gQuestionsAnswers[qidx] == null ){
				optionCorrectText = '<strong>Did not answer.</strong>';
				option_yn = 'did not answer';	
			}

            if( oidx == parseInt( question['correct'] ) )
            {
				optionClassChosen = '';
                optionClassCorrect = ' text-success ';
				optionGlyph	= ' <span class="glyphicon glyphicon-ok"></span>';
                optionLabelCorrect = ' <span>(Correct)</span> ';
            }

            optionHtml = templateOption;
						
            optionHtml = quizStrReplace( '[[OPTION_ID]]', optionId, optionHtml );
            optionHtml = quizStrReplace( '[[OPTION_INPUT]]', optionInput, optionHtml );
            optionHtml = quizStrReplace( '[[OPTION_PHRASE]]', optionPhrase, optionHtml );
            optionHtml = quizStrReplace( '[[OPTION_OLABEL]]', optionLabelOpen, optionHtml );
            optionHtml = quizStrReplace( '[[OPTION_CLABEL]]', optionLabelClose, optionHtml );
            optionHtml = quizStrReplace( '[[OPTION_CLASS_CHOSEN]]', optionClassChosen, optionHtml );
            optionHtml = quizStrReplace( '[[OPTION_CLASS_CORRECT]]', optionClassCorrect, optionHtml );
            optionHtml = quizStrReplace( '[[OPTION_LABEL_CHOSEN]]', optionLabelChosen, optionHtml );
            optionHtml = quizStrReplace( '[[OPTION_LABEL_CORRECT]]', optionLabelCorrect, optionHtml );
            optionHtml = quizStrReplace( '[[OPTION_GLYPH]]', optionGlyph, optionHtml );

            optionsAcc[optionsAcc.length] = optionHtml;
        }

		if (correctAnswer == true) {
			if (tChapter == 1) {sc1++;}		
			if (tChapter == 2) {sc2++;}
			if (tChapter == 3) {sc3++;}
			if (tChapter == 4) {sc4++;}
			if (tChapter == 5) {sc5++;}
			if (tChapter == 6) {sc6++;}
			if (tChapter == 7) {sc7++;}
			if (tChapter == 8) {sc8++;}
			if (tChapter == 9) {sc9++;}
			if (tChapter == 10) {sc10++;}
			if (tChapter == 11) {sc11++;}
		}
		
		if (tChapter == 1) {c1++}
		if (tChapter == 2) {c2++}
		if (tChapter == 3) {c3++}
		if (tChapter == 4) {c4++}
		if (tChapter == 5) {c5++}
		if (tChapter == 6) {c6++}
		if (tChapter == 7) {c7++}
		if (tChapter == 8) {c8++}
		if (tChapter == 9) {c9++}
		if (tChapter == 10) {c10++}
		if (tChapter == 11) {c11++}

        optionsHtml = quizArrayImplode( '', optionsAcc );
						
		
		optionsHtml = "<ol>" + optionsHtml + "</ol><p>" + optionCorrectText + "&nbsp;[[ADDINFO]]</p></div></div></div>"					
		optionsHtml = quizStrReplace( '[[ADDINFO]]', addinfo, optionsHtml );

        questionHtml = templateQuestion;

        questionHtml = quizStrReplace( '[[QUESTION_INDEX]]', questionIndex, questionHtml );
		questionHtml = quizStrReplace( '[[OPTION_YN]]', option_yn, questionHtml );
        questionHtml = quizStrReplace( '[[QUESTION_PHRASE]]', questionPhrase, questionHtml );
        questionHtml = quizStrReplace( '[[QUESTION_OPTIONS]]', optionsHtml, questionHtml );

        questionsAcc[questionsAcc.length] = questionHtml;
    }
	
	pc1 = Math.floor((sc1/c1) * 100);
	pc2 = Math.floor((sc2/c2) * 100);
	pc3 = Math.floor((sc3/c3) * 100);
	pc4 = Math.floor((sc4/c4) * 100);
	pc5 = Math.floor((sc5/c5) * 100);
	pc6 = Math.floor((sc6/c6) * 100);
	pc7 = Math.floor((sc7/c7) * 100);
	pc8 = Math.floor((sc8/c8) * 100);
	pc9 = Math.floor((sc9/c9) * 100);
	pc10 = Math.floor((sc10/c10) * 100);
	pc11 = Math.floor((sc11/c11) * 100);
	
	var stotal, ptotal;
	
	stotal = sc1 + sc2 + sc3 + sc4 + sc5 + sc6 + sc7 + sc8 + sc9 + sc10 + sc11;
	ptotal = Math.floor((stotal/gQuestionsMax) * 100);
	
	var placeholders = {
		questionsinChapters: [c1, c2, c4, c4, c5, c6, c7, c8, c9, c10, c11],
		scores: [sc1, sc2, sc4, sc4, sc5, sc6, sc7, sc8, sc9, sc10, sc11],
		percentages: [pc1, pc2, pc4, pc4, pc5, pc6, pc7, pc8, pc9, pc10, pc11]
	};
	

	if (reviewChapter == null) {
		table = '<div class="row"><div class="col-md-6"><p>This is how you did for each chapter:</p><table class="table table-striped">'
		table += '<thead><tr><th scope="col">Chapter</th><th scope="col">Score</th><th scope="col">Percentage</th></tr></thead>';
		table += '<tbody>';
		table += '<tr><td>1</td><td>' + sc1 + '/' + c1 + '</td><td>' + pc1 + '%</td></tr>';
		table += '<tr><td>2</td><td>' + sc2 + '/' + c2 + '</td><td>' + pc2 + '%</td></tr>';
		table += '<tr><td>3</td><td>' + sc3 + '/' + c3 + '</td><td>' + pc3 + '%</td></tr>';
		table += '<tr><td>4</td><td>' + sc4 + '/' + c4 + '</td><td>' + pc4 + '%</td></tr>';
		table += '<tr><td>5</td><td>' + sc5 + '/' + c5 + '</td><td>' + pc5 + '%</td></tr>';
		table += '<tr><td>6</td><td>' + sc6 + '/' + c6 + '</td><td>' + pc6 + '%</td></tr>';
		table += '<tr><td>7</td><td>' + sc7 + '/' + c7 + '</td><td>' + pc7 + '%</td></tr>';
		table += '<tr><td>8</td><td>' + sc8 + '/' + c8 + '</td><td>' + pc8 + '%</td></tr>';
		table += '<tr><td>9</td><td>' + sc9 + '/' + c9 + '</td><td>' + pc9 + '%</td></tr>';
		table += '<tr><td>10</td><td>' + sc10 + '/' + c10 + '</td><td>' + pc10 + '%</td></tr>';
		table += '<tr><td>11</td><td>' + sc11 + '/' + c11 + '</td><td>' + pc11 + '%</td></tr>';
		table += '<tr><th scope="row">Total</th><td><strong>' + stotal + '/' + gQuestionsMax + '</strong></td><td><strong>' + ptotal + '%</strong></td></tr>';
		table += '</tbody></table></div></div>';
	}
	else{
		var rc, rcs, rcp;
		for (var a=0; a < numChapters; a++){
			if (a == reviewChapter) {
				rc = placeholders['questionsinChapters'][a-1];
				rcs = placeholders['scores'][a-1];
				rcp = placeholders['percentages'][a-1];
			}
		}
		table = '<div class="row"><div class="col-md-6"><p>This is how you did for chapter ' + reviewChapter + ':</p><table class="table table-striped">'
		table += '<thead><tr><th scope="col">Score</th><th scope="col">Percentage</th></tr></thead>';
		table += '<tbody>';
		table += '<tr><td>' + rcs + ' of ' + rc + '</td><td>' + rcp  + '%</td></tr>';
		table += '</tbody></table></div></div>';
	}


    html = quizArrayImplode( '', questionsAcc );
	
	
    html =  '<h2>Answers</h2><div class="row wb-eqht">' + html + '</div>';
	
	html = table + html;

    return html;
}

function quizCollectAnswers()
{
    var questionIndex = null;
	var temp = null;

    for( var qidx in gQuestionsShowing )
    {
        if( quizArrayCheckCrudKey( qidx ) )
        {
            continue;
        }

        questionIndex  = parseInt( qidx ) + 1;

        for( var oidx in gQuestionsShowing[qidx]['answers'] )
        {
            if( quizArrayCheckCrudKey( oidx ) )
            {
                continue;
            }

            optionId = 'q_' + questionIndex + '_' + oidx;

            if( quizOptionIsChecked( optionId ) )
            {
                gQuestionsAnswers[qidx] = oidx;
				temp = true;
            }			
        }
		if (temp == null) {gQuestionsAnswers[qidx] == null;}
    }
}

function quizShowQuestions( questionsOffset )
{
    if( !document.getElementById )
    {
        return;
    }

    var div = document.getElementById( 'quiz_questions' );
    if( !div )
    {
        return;
    }
	

    if( !questionsOffset )
    {
		questionsOffset = 0;
    }
	
    if( !questionsOffset )
    {
		if (firstQ == true) {
			// Reset since we're at start.
			gQuestionsOriginal = null;
			gQuestionsShuffled = null;
			gQuestionsAnswers  = new Array();			
		}
    }
    else
    {
        quizCollectAnswers();
    }

    var questions = quizGetQuestionsShuffled();
    gQuestionsShowing = new Array();
    var index = 0;
	
    for( var key in questions )
    {
		
        if( quizArrayCheckCrudKey( key ) )
        {
            continue;
        }
	
		
		if( index >= questionsOffset && index < (questionsOffset + gQuestionsBatch) )
		{				
			gQuestionsShowing[key] = questions[key];
		}
		
		index++;
    }
	
	
	var html = quizGetQuestionsHtml( gQuestionsShowing );

    if( (questionsOffset + gQuestionsBatch) < gQuestionsMax )
    {		
       
	   html += '<div aria-live="off"><input id="update-progress" type="submit" class="btn btn-primary mrgn-rght-md" value="Next question" />';
	   if (questionsOffset != 0) {html += '<input id="goback" type="button" class="btn btn-default" value="Previous question" onclick="previousQuestion();" />';}
	   html +='</div>'; 
	   questionsOffset += gQuestionsBatch;
	   
		
    }
    else
    {
        html += '<div aria-live="off"><input id="update-progress" type="submit" class="btn btn-primary mrgn-rght-md" value="Submit your answers"  /><input id="review" type="button" class="btn btn-default mrgn-rght-md" value="Review all questions" onclick="reviewQs();" /><input id="goback" type="button" class="btn btn-default" value="Previous question" onclick="previousQuestion();" /></div>';
    }
	
	
    quizSetContext( 'quiz-context-javascript quiz-context-questions' );

    div.innerHTML = html;
}


function quizShowAnswers()
{
	
    if( !document.getElementById )
    {
        return;
    }

    var div = document.getElementById( 'quiz_questions' );
    if( !div )
    {
        return;
    }

    quizCollectAnswers();

    var info = new Array();

    var questions = quizGetQuestionsShuffled();

    var html = quizGetAnswersHtml( questions, info, 0 );

    var questionsTotal = info['total'];
    var questionsCorrect = info['correct'];
    var questionsPercent = quizNumberFormat( (questionsCorrect * 100) / questionsTotal, 0 );
	
	var getTimer = document.getElementById("timer").innerHTML;
	getTimer = getTimer.split(":");
	var hour = parseInt(getTimer[0]);
	var minute = parseInt(getTimer[1]);
	var second = parseInt(getTimer[2]);
	
	var hourtext, minutetext, secondtext, overtime;
	
	if (hour > 1) {hourtext = hour + " hours, ";}
	else if (hour == 1) {hourtext = hour + " hour, ";}
	else if (hour == 0) {hourtext = "";}
	
	if (minute > 1) {minutetext = minute + " minutes, ";}
	else if (minute == 1) {minutetext = minute + " minute, ";}
	else if (minute == 0) {minutetext = "";}
	
	if (second > 1) {secondtext = second + " seconds";}
	else{secondtext = second + " second";}
	
	var timerText = "You completed the quiz in " + hourtext + minutetext + secondtext + ".";
	
    var summary = "<strong>[[PASSORFAIL]] You got <span class=\"questions-percent\">[[PERCENT]]%</span> and needed 75% to pass.</strong> Be sure to keep studying until you take your Citizenship test.";

	if (questionsPercent >= 75.0) {summary = quizStrReplace( '[[PASSORFAIL]]', 'Congratulations, you passed the practice test!', summary );}
	else {summary = quizStrReplace( '[[PASSORFAIL]]', 'Sorry, you did not passed the practice test.', summary );}

    summary = quizStrReplace( '[[TOTAL]]', questionsTotal, summary );
    summary = quizStrReplace( '[[PERCENT]]', questionsPercent, summary );

    html = '<div class="score"><p class="mrgn-tp-md">' + summary + '</p><p>' +  timerText + '</p></div>' + html + '<div class="buttons"><input type="submit" id="retakeBtn" class="btn btn-primary" value="Retake the test" onclick="quizShowQuestions(); return false;" /></div>' + "\n";

//  alert( 'Click to change!' );

    quizSetContext( 'quiz-context-javascript quiz-context-answers' );
    div.innerHTML = html;
	$( ".wb-eqht" ).trigger( "wb-init.wb-eqht" );

    scroll( 0, 0 );
}

function quizInitialize()
{
    //quizSetContext( 'quiz-context-javascript' );
	var div = document.getElementById("quiz_context");
	var getChapter = null;
	var getQuestions = null;
	var getClasses = new Array();
	
	if (div.getAttribute("class")!= null){
		getClasses = div.getAttribute("class").split(" ");
	}

	for (var x=0; x<getClasses.length; x++){
		// if in string there's chapter, assign to getChapter
		// if in string there's question, assign to getQuestions
		if (getClasses[x].indexOf("chapter") >= 0){getChapter = getClasses[x];}
		if (getClasses[x].indexOf("question") >= 0){getQuestions = getClasses[x];}
	}

	var t = new Array();
	
	if (getChapter != null){
		t = getChapter.split("-");
		getChapter = t[1];
		reviewChapter = getChapter;
	}
	
	if (getQuestions != null){
		t = getQuestions.split("-");
		getQuestions = t[1];
		gQuestionsMax = getQuestions;
	}
}

function updateProgressBar(x) {
	
	var $elm = $( "#updateTest" ),
		valuenow = parseInt( $elm.attr( "value" ), 10 ),
		newValue = valuenow === parseInt( $elm.attr( "max" ), 10 ) ? 0 : valuenow + 1;

	if (x == "previous"){
		newValue = valuenow === parseInt( $elm.attr( "max" ), 10 ) ? 0 : valuenow - 1;		
	}
	
	var getMax = parseInt( $elm.attr( "max" ), 10 ),
		percentage = Math.floor((newValue/getMax) * 100);
		
	if (x == "reset"){
		valuenow = 0;
		newValue = 0;
		percentage = 0;	
	}
	

	if (newValue >= 0) {
		
		document.getElementById("progPercentage").innerHTML = "Progress: " + percentage + "%";
		
		$elm
			.attr( "value", newValue )
			.find( "span" )
			.text( percentage + "%" );
		
		// Update the visuals
		$elm.trigger( "wb-update.wb-progress" );
	}
	
	if (x == "next"){
		if (newValue < getMax ){
			quizShowQuestions(newValue);			
			getSelectedAnswer();
		}
		else{
			clearTimeout(counttime);
			quizShowAnswers();
		}
	}
	if (x == "previous"){
		quizShowQuestions(newValue);
		getSelectedAnswer();
	}
	if (x == "reset"){
		quizShowQuestions();
	}
}

function calcNextProgress(){
	firstQ = false;
	var div = document.getElementById("quiz_questions");
	var test = div.getElementsByTagName("input");
	var checked = 0;
	var qValue = null;
		
	for (x=0; x <= test.length; x++){
	
		if ($(test[x]).attr("type") == "radio") {
			var qNum = $(test[x]).attr("name").split("q_");		
			if ($(test[x]).is(":checked")){
				checked++;
				qValue = $(test[x]).attr("value");				
			}
		}
				
	}
	selectedAnswer[qNum[1]] = qValue;
	
	updateProgressBar("next");
	
	setTimeout(function() { document.getElementById('prog-status').focus(); }, 0); //focus on quiz area
};

function previousQuestion() {
	var div = document.getElementById("quiz_questions");
	var test = div.getElementsByTagName("input");
	var checked = 0;
	
	var qValue = null;		
	for (x=0; x <= test.length; x++){
		if ($(test[x]).attr("type") == "radio") {
			var qNum = $(test[x]).attr("name").split("q_");		
			if ($(test[x]).is(":checked")){
				checked++;
				qValue = $(test[x]).attr("value");				
			}
		}
	}
	selectedAnswer[qNum[1]] = qValue;
	
	updateProgressBar("previous");
	
	setTimeout(function() { document.getElementById('prog-status').focus(); }, 0); //focus on quiz area
		
};

function resetProg() {
	firstQ = true; ///reset first question
	t = 0; //reset the timer	
	timer.innerHTML = "00:00:00";
	paused = false;
	clearInterval(counttime);
	counttime = setInterval(countup,1000);
	selectedAnswer = new Array(); //reset the array
	updateProgressBar("reset");	//reset progress bar 
	setTimeout(function() { document.getElementById('prog-status').focus(); }, 0); //focus on quiz area
};

function getSelectedAnswer(){
	var div = document.getElementById("quiz_questions");
	var test = div.getElementsByTagName("input");
	var qNum = $(test[0]).attr("name").split("q_");
	qNum = qNum[1];
	
	for (y=0;y < test.length; y++ ){
		var qValue = $(test[y]).attr("value");
		if (selectedAnswer[qNum] == qValue) {
			$(test[y]).prop('checked', true);
		}
	}
	
	
	
};



function startQuiz(){
	$("#intro").addClass("hidden");
	$("#quiz-area").removeClass("hidden");
	//counttime = null;
	t = 0;
	paused = false;
	clearInterval(counttime);
	counttime = setInterval(countup,1000);
	
};

function countup(){
	
	var h = Math.floor(t / 3600);
	var m = Math.floor(t / 60);
	var s = t - m * 60;
	
	
	if (!paused){
		if (t == 900) {
			paused = true;

			$( document ).trigger( "open.wb-lbx", [
				[
					{
						src: "#centred-popup",
						type: "inline"
					}
				],
				true
			]);
					
		}
		else{	
			/*if (s == 0 && m > 0) {
				$('#alert').html("Time elapsed: " + timer.innerHTML);
				//onemin = 0;
			}
			else {onemin++;}*/
			t++;
			var finalTime = str_pad_left(h,'0',2)+':'+str_pad_left(m,'0',2)+':'+str_pad_left(s,'0',2);
			timer.innerHTML = finalTime;
		}
		
						
	}
	
}

function unpauseTimer() {
	paused = false;
	t++;
}

function str_pad_left(string,pad,length) {
    return (new Array(length+1).join(pad)+string).slice(-length);
}

function printQuestions() {
	var questions = quizGetQuestionsShuffled();
	var showquestionshtml = "";
	var showanswershtml = "";
		
	for( var qidx in questions )
    {
        /*if( quizArrayCheckCrudKey( qidx ) )
        {
            continue;
        }*/
		
		question = questions[qidx];

        var questionIndex  = parseInt( qidx ) + 1;
        var questionPhrase = question['question'];
		var addinfo = question['moreinfo'];		
		var correctAnswer = question['answers'][question['correct']];
			
		var optionshtml = ""
		for( var oidx in question['answers'] )
		{
			if( quizArrayCheckCrudKey( oidx ) )
			{
				continue;
			}
			option = '<li><span class="glyphicon glyphicon-unchecked"></span>&nbsp;' + question['answers'][oidx] + '</li>';
			optionshtml += option;
		}

		showquestionshtml += '<h3 class="h5">' + questionIndex + '. ' + questionPhrase + '</h3>';
		showquestionshtml += '<ol class="list-unstyled">' + optionshtml + '</ol>';
		
		showanswershtml += '<h3 class="h5">' + questionIndex + '. ' + questionPhrase + '</h3>';
		showanswershtml += '<p><strong>Answer:</strong>&nbsp;' + correctAnswer + '</p>';
		showanswershtml += '<p>' + addinfo + '</p><hr/>';		
	}
	
	var qdiv = document.getElementById("sa-questions");
	qdiv.innerHTML = showquestionshtml;
	var adiv =  document.getElementById("sa-answers");
	adiv.innerHTML = showanswershtml;
}

function reviewQs() {
	
	
	
	$("#goback").addClass("hidden");
	$("#review").addClass("hidden");
	
	if( !document.getElementById )
    {
        return;
    }

    var div = document.getElementById( 'quiz_questions' );
    if( !div )
    {
        return;
    }

	
	var test = div.getElementsByTagName("input");
	var qValue1 = null;
		
	for (x=0; x <= test.length; x++){
	
		if ($(test[x]).attr("type") == "radio") {
			var qNum1 = $(test[x]).attr("name").split("q_");		
			if ($(test[x]).is(":checked")){
				qValue1 = $(test[x]).attr("value");				
			}
		}
				
	}
	selectedAnswer[qNum1[1]] = qValue1;
	
	   
    var questions = quizGetQuestionsShuffled();
		
	var html = quizGetQuestionsHtml( questions );	
	
	
	
	


    html += '<div aria-live="off"><input id="update-progress" type="submit" class="btn btn-primary mrgn-rght-md" value="Submit your answers"  /></div>';
    quizSetContext( 'quiz-context-javascript quiz-context-questions' );

    div.innerHTML = html;
	

	var inputs = div.getElementsByTagName("input");	
	
	for (var y = 0; y < inputs.length; y++) {
		if ($(inputs[y]).attr("type") == "radio") {
			var qNum = $(inputs[y]).attr("name").split("q_");			
			var qValue = $(inputs[y]).attr("value");
			if (selectedAnswer[qNum[1]] == qValue) {
				$(inputs[y]).prop('checked', true);
			}
		}
			
	}
	
}
