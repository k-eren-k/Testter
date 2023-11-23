const greetings = {
    "Hello World": "English ",
    "Hola Mundo": "Spanish ",
    "Bonjour le Monde": "French ",
    "Hallo Welt": "German ",
    "你好，世界": "Chinese ",
    "こんにちは、世界": "Japanese ",
    "안녕하세요, 세계": "Korean ",
    "Привет, мир": "Russian ",
    "مرحبا بالعالم": "Arabic",
    "Ciao Mondo": "Italian ",
    "Olá Mundo": "Portuguese ",
    "Hallo Wereld": "Dutch ",
    "Hej Världen": "Swedish ",
    "Hei Verden": "Norwegian ",
    "Hej Verden": "Danish ",
    "Hei Maailma": "Finnish ",
    "Γειά σας, κόσμε": "Greek ",
    "Merhaba Dünya": "Turkish ",
    "नमस्ते दुनिया": "Hindi ",
    "Jambo Dunia": "Swahili ",
    "Salam Dünya": "Azerbaijani ",
    "Sälem Dünýä": "Turkmen ",
    "Сәлем, Әлем": "Kazakh",
    "ہیلو ورلڈ": "Urdu ",
    "سلام علیکم دنیا": "Islamic Literature",
    "你好，世界": "Mandarin",
    "ওহে বিশ্ব": "Bengali ",
    "Xin chào thế giới": "Vietnamese ",
    "สวัสดีโลก": "Thai",
    "שלום עולם": "Hebrew ",
    "Witaj, świecie": "Polish ",
    "Ahoj světe": "Czech ",
    "Salut, lume": "Romanian ",
    "नमस्ते संसार": "Nepali",
    "Привіт, світе": "Ukrainian ",
    "Здравей, свят": "Bulgarian ",
    "Helló Világ": "Hungarian",
    "Halo Dunia": "Indonesian ",
    "Halo Dunia": "Malay",
    "Kamusta Mundo": "Filipino ",
    "வணக்கம் உலகே": "Tamil ",
    "سلام دنیا": "Persian ",
    "සුභ උදව්ව, වාර්ල්ඩේ": "Sinhala ",
    "નમસ્તે વર્લ્ડ": "Gujarati ",
    "हॅलो वर्ल्ड": "Marathi ",
    "ಹಲೋ ವರ್ಲ್ಡ್": "Kannada ",
    "హలో వరల్డ్": "Telugu ",
    "ନମସ୍କାର ବିଶ୍ୱ": "Oriya ",
    "Salve Mundi": "Latin ",
    "Χαῖρε κόσμε": "Ancient Greek ",
    "Hæll, heimur": "Old Norse ",
    "श्रीमद्विश्वम्": "Sanskrit",
    "ܫܠܡܐ ܡܬܚܐ ": "Aramaic",
    "Salutem Mundi": "Latin Vulgate ",
    "Heil, World": "Middle English",
    "Salut, Monde": "Old French",
    "Hēl, Weralt": "Middle High German",
    "السلام عليكم يا عالم": "Classical Arabic ",
    "Բարև աշխարհ": "Armenian ",
    "გამარჯობა, სამხიანე": "Georgian ",
    "བཀྲ་ཤིས་བདེ": "Tibetan",
    "Сайн уу, Дэлхий": "Mongolian",
    "Silav, Cihan": "Kurdish ",
    "سڵاو دنیا": "Kurdish ",
    "ياخشىمۇسىز، دۇنيا": "Uighur ",
    "Салом, Ҷаҳон": "Tajik ",
    "ሰላማዊ, ዓለም": "Tigrinya ",
    "ሰላም ልዑል": "Amharic",
    "Sannu Duniya": "Hausa ",
    "Bawo Ni, Aiye": "Yoruba ",
    "Ndewo, Ụwa": "Igbo (Nigeria, Equatorial Guinea,",
    "Sawubona, Mhlaba": "Zulu ",
    "Molo, Umhlaba": "Xhosa ",
    "Lumela, Lefatshe": "Sesotho ",
    "Haere Mai, Ao": "Maori ",
    "Aloha Honua": "Hawaiian ",
    "Bula Vuravura ": "Fijian ",
    "Talofa, Ao": "Samoan ",
    "Mālō e Ola": "Tongan ",
    "Yokwe, Jikin": "Marshallese ",
    "မင်္ဂလာပါ, ကမ္ဘာ့ ": "Burmese ",
    "សួរស្តី, ពិភពលោក": "Khmer ",
    "ສະບາຍ, ໂລກ": "Lao ",
    "Kamusta Mundo": "Tagalog ",
    "Howzit, World": "Hawaiian Pidgin ",
    "nuqneH, yItlhutlh!": "Klingon ",
    "Dif-tor heh smusma": "Vulcan ",
    "Mae athdrivar hoshori": "Dothraki",
    "Daenerys Jelmāzmo ": "High Valyrian ",
    "Bello, Mundo": "Minionese ",
    " Aira ná, Endor": "Quenya",
    "Mae govannen, Ambar": "Sindarin ",
    "Oya manda!": "Huttese ",
    "Ke nu'jurkadir sha Mando'ade": "Mando'a ",
    "Rrwawaawawaa!": "Wookiee ",
    "Oel ngati kameie": "Na'vi ",
    "Sul sul!": "Simlish "


};
function updateText() {
    const textContainer = document.getElementById('dynamicText');
    const randomIndex = Math.floor(Math.random() * greetings.length);
    textContainer.textContent = greetings[randomIndex];
}
function updateText() {
    const textContainer = document.getElementById('dynamicText');
    const randomIndex = Math.floor(Math.random() * Object.keys(greetings).length);
    const randomGreeting = Object.keys(greetings)[randomIndex];
    const language = greetings[randomGreeting];

    textContainer.textContent = randomGreeting;
    textContainer.setAttribute('data-language', language);
}


updateText();
setInterval(updateText, 1000);