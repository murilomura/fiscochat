var data= {
    chatinit:{
        title: ["Olá! Eu sou o seu assistente fiscal <span class='emoji'> &#128075;</span>","O que posso te ajudar?"],
        options: ["Tributação Atualizada","Regra de Transição","Comparativo Tributário"]
    },

tributação:
{
    title:["Obrigado pela sua resposta, Por favor, selecione a UF Origem"],
    options:['MG','SP','RJ','SC'],
    url:{}
},

// tributação:
// {
//     title:["Obrigado pela sua resposta, Por favor, selecione a UF Destino"],
//     options:['MG','SP','RJ','SC'],
// },





chat:{

    title:["Hi, Chat Option isn't build yet! I'm working on it.You can still choose any of these..."],
    options:['how', 'bot','hey','what','teach','why'],
    url:
        {

        }
},
how: 
{
    title: ["How what?...."],
    options: ["areyou"," aboutBot","happy"," sad","bot"],
    url : {
            
    }
},

hey:
{
    title:["Hi. how are things going?"],
    options: ["I'm well", "Not Bad.", "Not Good", "50-50."],
    url : {
            
    }
},

aboutBot :
{
    title:["How do I work?", "I am a Bot that works using Javascript."],
    options:["Thank you.", "Great Advice."],
    url : {
            
    }
},

happy :
{
    title:["How to be Happy?", "Well, Happiness is a subjective and complex emotion that can be influenced by a wide range of factors. While there is no one-size-fits-all answer to the question of how to be happy, there are some things that have been found to contribute to happiness and well-being. Here are a few tips: Practice gratitude,Engage in activities that bring you joy,Take care of your physical health,Practice mindfulness.","Remember, happiness is not a destination but a journey. It's important to be patient and kind to yourself as you work towards greater happiness and well-being.","Work on yourself & Be proud."],
    options:["Thank you.", "Great Advice."],
    url : {
            
    }
},

sad:
{
   title:["I'm sorry to hear that you're feeling sad. It's important to remember that everyone goes through difficult emotions at times, and it's okay to not feel okay. Here are some suggestions that may help you feel better:","Pray!!","Talk to someone, Reach Out to anyone close.","Practice self-care & mindfulness","Seek professional help, if these don't work."],
   options:["Thank you."],
   url : {
            
   }
},

bot:
{
    title:["Yes, I am a bot. Specifically, I am TroiBot, a simple bot created by Nuha.", "I am designed to generate simple tasks.", " Made with javascript, a programing language used primarily for developing interactive web pages and applications. "],
    options:["I See....."],
    url : {
            
    }
},

what: 
{
      title: ["I don't understand.","I am a Bot named Troi, Nice to meet you."],
      options: ["Nice To Meet You too","IDK what to say.", "Bye.."],
      url : {
            
      }
},
why:
{
    title: ["What why? I mean Why not?","Jk,I'm sorry, could you please provide more context or clarify your question?","I am here to help answer any questions or provide assistance to the best of my abilities."],
    options:["No","You're Crazy!"],
    url : {
            
    }
},

teach:
{
    title: ["You?","Certainly! I'd be happy to help you learn something. Is there a specific topic or subject you would like to learn about?"," Please let me know, and I'll do my best to provide you with useful information and resources."],
    options: ["Math"," Science","AI","Study"],
    url : {
            
    }
},
math: 
{
    title:["Great! Math can be a challenging subject for many people, but with some practice and guidance, it can become much easier to understand. Here are some general tips and resources to help you learn math:","Start with the basics. Make sure you have a solid understanding of the foundational concepts of math, such as addition, subtraction, multiplication, division, fractions, and decimals. You can find resources online that offer math lessons and practice problems.",
    "Practice, practice, practice. Math is a subject that requires practice to improve. Make sure you're regularly practicing what you've learned to reinforce the concepts in your mind.",
    "Seek help, If you're struggling with a particular concept or problem, don't be afraid to seek help from a teacher, tutor, or online resources. There are many resources available, such as Khan Academy, that can provide you with additional support and explanations.",
    ,"Stay organized. Keep a notebook or journal where you can take notes and keep track of important formulas and concepts. This will help you stay organized and make it easier to review your notes later on."
    ,"Stay motivated. Math can be a challenging subject, but try to stay motivated and remind yourself of the reasons why you're learning it. Whether it's for a career goal, personal interest, or academic requirement, stay focused on your goals and remember that with hard work and determination, you can succeed."
    ,"I hope these tips help you in your journey to learn math. Good luck!"],
    options:["Thank You!", "Not Helping!"],
    url : {
            
    }
},
science:
{
    title:["Science is a vast and fascinating subject that covers everything from the smallest subatomic particles to the largest galaxies in the universe. Here are some general tips and resources to help you learn science:",
    "Start with the basics: Science is based on a few fundamental concepts, such as the scientific method, the laws of physics, and the principles of chemistry and biology. Make sure you have a solid understanding of these basics before moving on to more advanced topics.",
    "Conduct experiments: Science is all about experimentation and observation. Try to conduct your own experiments to see how different materials and substances interact with each other. You can find science experiments online that you can easily do at home.",
    "Read science books and articles: Reading science books and articles can help you gain a deeper understanding of scientific concepts and principles. There are many popular science books and magazines available that can make complex ideas more accessible.",
    "Watch science videos: Science videos can help you visualize complex concepts and see how experiments are conducted. YouTube and other online platforms have a wide range of science videos that cover everything from basic physics to cutting-edge research.",
    "Stay curious: Science is all about asking questions and seeking answers. Stay curious and keep asking questions about the world around you. The more you learn, the more you'll want to know.",
    "I hope these tips help you in your journey to learn science. Good luck!"],
    options:["Thank You!", "Not Helping!"],
    url : {
            
    }
},

AI:
{
   title:["Artificial Intelligence (AI) is a rapidly growing field that has revolutionized the way we think about computing, machine learning, and automation. Here are some general tips and resources to help you learn AI:"
   ,"Start with the basics: Make sure you have a solid understanding of the foundational concepts of AI, such as machine learning, deep learning, and natural language processing. You can find resources online that offer AI lessons and tutorials."
   ,"Learn programming: Programming is an essential skill for anyone interested in AI. You can learn programming languages like Python, R, and Java that are commonly used in AI development."
   ,"Participate in online courses: There are many online courses and programs available that teach AI concepts and techniques. Some popular platforms include Udacity, Coursera, and edX."
   ,"Work on projects: Building your own AI projects is a great way to apply what you've learned and gain practical experience. You can start with simple projects like building a chatbot or image recognition system."
   ,"Keep up with the latest research: AI is a rapidly evolving field, and it's important to stay up to date with the latest research and developments. Subscribe to AI research journals, attend conferences, and participate in online communities to stay informed."
   ,"I hope these tips help you in your journey to learn AI. Good luck!"],
   options:["Thank You!"],
   url : {
            
   }
},

movies: 
{
    title:["Thanks for your response, Please Select Category"],
    options:['Hollywood','Bollywood','Web Series','Others'],
    url :{
        
    }
},
    
news: 
{
        title:["Thanks for your response, Please Select Category"],
        options:["The Daily Star","CNN","BBC","Prothom Alo"],
        url : {
            more:"https://www.thedailystar.net/",
            link:["https://edition.cnn.com/","https://www.bbc.com/", "https://www.prothomalo.com/"]
        }
},

shopping: {
        title:["Thanks for your response, Please Select Category"],
        options:['Electronics','Beauty products','Mobiles','Men Fashion','Women fashion'],
        url : {
            
        }
},
   
electronics: {
        title:["Thanks for your response, Please Select Category"],
        options:['Televisions','Cameras','Gaming Consoles','Headphones','Speakers'],
        url : {
            more:"https://www.alibaba.com/Consumer-Electronics_p44?src=sem_ggl&field=UG&from=sem_ggl&cmpgn=9774693808&adgrp=102667200911&fditm=&tgt=kwd-296668616325&locintrst=9070153&locphyscl=9076888&mtchtyp=b&ntwrk=g&device=c&dvcmdl=&creative=637261462740&plcmnt=&plcmntcat=&aceid=&position=&gclid=Cj0KCQjwz6ShBhCMARIsAH9A0qWbTU7ya-6jPUPhnpZvoI0qaKOF1aIbjdx_PQsgfKHqNdlewMJgAKUaApMtEALw_wcB",
            link:["https://www.alibaba.com/Consumer-Electronics_p44?src=sem_ggl&field=UG&from=sem_ggl&cmpgn=9774693808&adgrp=102667200911&fditm=&tgt=kwd-296668616325&locintrst=9070153&locphyscl=9076888&mtchtyp=b&ntwrk=g&device=c&dvcmdl=&creative=637261462740&plcmnt=&plcmntcat=&aceid=&position=&gclid=Cj0KCQjwz6ShBhCMARIsAH9A0qWbTU7ya-6jPUPhnpZvoI0qaKOF1aIbjdx_PQsgfKHqNdlewMJgAKUaApMtEALw_wcB","https://www.alibaba.com/Consumer-Electronics_p44?src=sem_ggl&field=UG&from=sem_ggl&cmpgn=9774693808&adgrp=102667200911&fditm=&tgt=kwd-296668616325&locintrst=9070153&locphyscl=9076888&mtchtyp=b&ntwrk=g&device=c&dvcmdl=&creative=637261462740&plcmnt=&plcmntcat=&aceid=&position=&gclid=Cj0KCQjwz6ShBhCMARIsAH9A0qWbTU7ya-6jPUPhnpZvoI0qaKOF1aIbjdx_PQsgfKHqNdlewMJgAKUaApMtEALw_wcB","https://www.alibaba.com/Consumer-Electronics_p44?src=sem_ggl&field=UG&from=sem_ggl&cmpgn=9774693808&adgrp=102667200911&fditm=&tgt=kwd-296668616325&locintrst=9070153&locphyscl=9076888&mtchtyp=b&ntwrk=g&device=c&dvcmdl=&creative=637261462740&plcmnt=&plcmntcat=&aceid=&position=&gclid=Cj0KCQjwz6ShBhCMARIsAH9A0qWbTU7ya-6jPUPhnpZvoI0qaKOF1aIbjdx_PQsgfKHqNdlewMJgAKUaApMtEALw_wcB","https://www.alibaba.com/Consumer-Electronics_p44?src=sem_ggl&field=UG&from=sem_ggl&cmpgn=9774693808&adgrp=102667200911&fditm=&tgt=kwd-296668616325&locintrst=9070153&locphyscl=9076888&mtchtyp=b&ntwrk=g&device=c&dvcmdl=&creative=637261462740&plcmnt=&plcmntcat=&aceid=&position=&gclid=Cj0KCQjwz6ShBhCMARIsAH9A0qWbTU7ya-6jPUPhnpZvoI0qaKOF1aIbjdx_PQsgfKHqNdlewMJgAKUaApMtEALw_wcB","https://www.alibaba.com/Consumer-Electronics_p44?src=sem_ggl&field=UG&from=sem_ggl&cmpgn=9774693808&adgrp=102667200911&fditm=&tgt=kwd-296668616325&locintrst=9070153&locphyscl=9076888&mtchtyp=b&ntwrk=g&device=c&dvcmdl=&creative=637261462740&plcmnt=&plcmntcat=&aceid=&position=&gclid=Cj0KCQjwz6ShBhCMARIsAH9A0qWbTU7ya-6jPUPhnpZvoI0qaKOF1aIbjdx_PQsgfKHqNdlewMJgAKUaApMtEALw_wcB"]
        }
},

beauty: {
        title:["Thanks for your response, Please Select Category"],
        options:['Makeup','Nails','Skin Care','Fragrance','Hair care'],
        url : {
            more:"https://www.youtube.com/@webhubhttps://hudabeauty.com/us/en_US/home/videos",
            link:["https://www.sheglam.com/","https://fentybeauty.com/","https://www.rarebeauty.com/","https://kyliecosmetics.com/"]
        }
},
mobiles: {
        title:["Thanks for your response, Please Select Category"],
        options:['Mobile Phones','Cases & Covers','Power Banks','Tablets'],
        url : {
            more:"https://www.daraz.com.bd/",
            link:["https://www.daraz.com.bd/","https://www.daraz.com.bd/","https://www.daraz.com.bd/"]
        }
},
    
men: {
        title:["Thanks for your response","These are some results based on your input","Click on it to know more"],
        options:['Clothing','Shirts','T-shirts','Innerwear','Jeans'],
        url : {
            more:"https://www.amazon.com/gp/goldbox?ref_=nav_cs_gb&deals-widget=%257B%2522version%2522%253A1%252C%2522viewIndex%2522%253A0%252C%2522presetId%2522%253A%252233FBCE1DFDB94C58F71E39810D428C43%2522%252C%2522departments%2522%253A%255B%25222102313011%2522%252C%25221040658%2522%255D%252C%2522sorting%2522%253A%2522FEATURED%2522%257D",
            link:["#","#","#","#","#"]
        }
},

women: {
        title:["Thanks for your response","These are some results based on your input","Click on it to know more"],
        options:['Clothing','Western Wear','Ethnic Wear','Top Brands'],
        url : {
            more:"https://gucci.cpm/us/en/ca/women-c-women",
            link:["#","#","#","#"]
        }
},

song: {
        title:["Thanks for your response, Please Select Category<span class='emoji'> &#127925;</span>"],
        options: ["Bangla","Hindi","English","Trending","Olds"],
        url : {
            more:"https://open.spotify.com/artist/6xArchxfpOsC8rvclgSeAl?si=Uqonbr9aS26Y3MWnOXc1qA",
            link:["https://open.spotify.com/artist/4gdMJYnopf2nEUcanAwstx?si=R5k5j6gcS3K-1dlZlQBsfA","https://open.spotify.com/playlist/37i9dQZF1DX4WYpdgoIcn6?si=d932d9fc0e7c465a","https://open.spotify.com/playlist/37i9dQZF1DWVlLVXKTOAYa?si=7f259b39276d4b99","https://open.spotify.com/playlist/3HFb592I7MuJmL1yryzEP6?si=7d7e472a4fb84e43"]
        }
 },

hollywood: {
        title: ["Thanks for your response","Please Select Genre"],
        options: ["Comedy","Horror","Sci-Fi","Action","Drama"],
        url: {
            more:"https://ww1.yesmoviesfree.live/",
            link:["https://ww1.yesmoviesfree.live/movies","https://bflix.gg/genre/horror","https://ww1.yesmoviesfree.live/watch-the-batman-2022-online-free","https://ww1.yesmoviesfree.live/watch-interstellar-2014-online-free"]
        }
},
    
bollywood: {
        title: ["Thanks for your response","Please Select Genre"],
        options: ["Comedy","Sci-Fi","Action","Romance"],
        url: {
            more:"https://www.imdb.com/india/top-rated-indian-movies/",
            link:["https://bflix.gg/movie/watch-phir-hera-pheri-65064","https://bflix.gg/movie/watch-3-idiots-69690","https://bflix.gg/movie/watch-zindagi-na-milegi-dobara-10864","https://bflix.gg/movie/watch-sita-ramam-88327"]
        }
},

web: {
        title: ["Thanks for your response","Please Select Genre"],
        options: ["Comedy","Horror","Sci-Fi","Romance","Action"],
        url: {
            more:"https://bflix.gg/tv-show",
            link:["https://bflix.gg/search/friends","https://bflix.gg/genre/horror","https://bflix.gg/tv/watch-the-big-bang-theory-39508","https://bflix.gg/search/how-i-met-your-mother","https://bflix.gg/search/game-of-thrones"]
        }
},

others: {
        title: ["Oh! Couldn't choose any? Here's Some More Options...."],
        options: ["YouTube","Netflix","Giphy","Hulu","Anime"],
        url: {
            more:"https://www.youtube.com/",
            link:["https://www.netflix.com/bd/","https://giphy.com/","https://www.hulu.com/welcome?orig_referrer=https%3A%2F%2Fwww.google.com%2F","https://zoro.to/"]
        }
},

}
document.getElementById("init").addEventListener("click",showChatBot);
// var cbot= document.getElementById("chat-box");
var cbot= document.getElementById("messages");

var len1= data.chatinit.title.length;

function showChatBot(){
    // console.log(this.innerText);
    if(this.innerText=='Simular Chatbot'){
        document.getElementById('test').style.display='block';
        document.getElementById('init').innerText='Encerrar CHAT';
        initChat();
    }
    else{
        location.reload();
    }
}

function initChat(){
    j=0;
    cbot.innerHTML='';
    for(var i=0;i<len1;i++){
        setTimeout(handleChat,(i*1000));
    }
    setTimeout(function(){
        showOptions(data.chatinit.options)
    },((len1+1)*1000))
}

var j=0;
function handleChat(){
    // console.log(j);
    var elm= document.createElement("p");
    elm.innerHTML= data.chatinit.title[j];
    elm.setAttribute("class","msg");
    cbot.appendChild(elm);
    j++;
    handleScroll();
}

function showOptions(options){
    for(var i=0;i<options.length;i++){
        var opt= document.createElement("span");
        var inp= '<div>'+options[i]+'</div>';
        opt.innerHTML=inp;
        opt.setAttribute("class","opt");
        opt.addEventListener("click", handleOpt);
        cbot.appendChild(opt);
        // console.log(opt);
        handleScroll();
    }
}

function handleOpt(){
    // console.log(this);
    var str= this.innerText;
    var textArr= str.split(" ");
    var findText= textArr[0];
    
    document.querySelectorAll(".opt").forEach(el=>{
        el.remove();
    })
    var elm= document.createElement("p");
    elm.setAttribute("class","test");
    var sp= '<span class="rep">'+this.innerText+'</span>';
    elm.innerHTML= sp;
    cbot.appendChild(elm);

    // console.log(findText.toLowerCase());
    var tempObj= data[findText.toLowerCase()];
    handleResults(tempObj.title,tempObj.options,tempObj.url);
}

function handleDelay(title){
    var elm= document.createElement("p");
        elm.innerHTML= title;
        elm.setAttribute("class","msg");
        cbot.appendChild(elm);
}


function handleResults(title,options,url){
    for(let i=0;i<title.length;i++){
        setTimeout(function(){
            handleDelay(title[i]);
        },i*1000)
        
    }

    const isObjectEmpty= (url)=>{
        return JSON.stringify(url)=== "{}";
    }

    if(isObjectEmpty(url)==true){
        // console.log("having more options");
        setTimeout(function(){
            showOptions(options);
        },title.length*1000)
        
    }
    else{
        // console.log("end result");
        setTimeout(function(){
            handleOptions(options,url);
        },title.length*1000)
        
    }
}
function handleOptions(options,url){
    for(var i=0;i<options.length;i++){
        var opt= document.createElement("span");
        var inp= '<a class="m-link" href="'+url.link[i]+'">'+options[i]+'</a>';
        opt.innerHTML=inp;
        opt.setAttribute("class","opt");
        cbot.appendChild(opt);
    }
    var opt= document.createElement("span");
    var inp= '<a class="m-link" href="'+url.more+'">'+'See more</a>';

    const isObjectEmpty= (url)=>{
        return JSON.stringify(url)=== "{}";
    }

    // console.log(isObjectEmpty(url));
    // console.log(url);
    opt.innerHTML=inp;
    opt.setAttribute("class","opt link");
    cbot.appendChild(opt);
    handleScroll();
}
function handleScroll(){
    var elem= document.getElementById('messages');
    elem.scrollTop= elem.scrollHeight;

    //var elem= document.getElementById('chat-box');
    //elem.scrollTop= elem.scrollHeight;
}