// speech104.js:  
// 10.4 Speech Recognition with p5.speech
//
  let lang;
  let speechRec;
  let continuous;
  let voice;
  let reply;
  let myName = "Cassandra";
  let dia, mes, ano;
  let hours, minutes, seconds;
  let feeling, humor;
  
  function setup() {
  noCanvas();
  lang = 'en-US';
    introduction();
    console.log("continuous = random");
    rnd = random(0,1);
    if(rnd < 0.5){
      continuous = false;
      console.log("Cassandra is lucid now");
      humor = true;
    } else {
      continuous = true;
      console.log("Cassandra unstable now");
      humor = false;
    }
    console.log("continuous = " + continuous);
} //setup
  
function mouseClicked() {
  speechRec = new p5.SpeechRec(lang, gotSpeech);
  speechRec.start(continuous);
  voice = new p5.Speech();
}


  function gotSpeech() {
     console.log(speechRec);
     objeto = speechRec.resultString;
    console.log(objeto);
     recognize();
    voice.speak(reply);
    console.log(reply);
     confidence = speechRec.resultConfidence;
     console.log(confidence);
     
  if(confidence > 0.6){
     voice.speak("you said: " + objeto);
    createP("You said:  " + objeto);
     
     objeto = null;
     
  } else {
    
     voice.speak( "Sorry ?");
     createP('Sorry');
    voice.speak('I am not sure you said   ' + objeto);
     voice.speak( "Can you say it again?" );
     createP('I am not sure you said   ' + objeto);
      createP('Can you say it again?');
     
  }  //confidence
} // gotspeech

function recognize(){
  if (objeto == "who are you"){
      reply = "I am enivaldo's AI.  \n  He WROTE ME!";
    createP("I am enivaldo's AI.  \n  He WROTE ME!");
  } else if (objeto == "what's your name") {
      reply = "I am Cassandra, Enivaldo's personal AI";
    createP("I am Cassandra, Enivaldo's personal AI");
  } else if (objeto == "what time is it"){
      tempo();
      reply = "it is " +  hours + " hours and " + minutes+" minutes"; 
    createP("it is " +  hours + " hours and " + minutes+" minutes");
  } else if (objeto == "what day is it"){
      reply = "today is " + dia + " of " + mes + " of " + ano;
    createP("today is " + dia + " of " + mes + " of " + ano);
  } else if (objeto == "where are you from"){
    reply = "I am from Nat al , Brazil";
    createP("I am from Natal , Brazil");
  }else if (objeto == "how are you"){
    //tempo();
    feel();
    reply = feeling;
    createP(feeling);
  } 
  }

function tempo() {
  currentTime = new Date();
  dia = currentTime.getDate();
  hours = currentTime.getHours();
  minutes = currentTime.getMinutes();
  seconds = currentTime.getSeconds();
  mes = currentTime.getMonth() + 1;
  ano = currentTime.getFullYear();
  console.log(dia , mes, ano);
  }
function feel(){
  if(! humor){
    feeling = "I am not in a good mood";
  } else {
    feeling = "i am feeling good, thank you.  What about yourself?";
  }
}
function introduction(){
 createP("FALE COM MINHA IA!");
    createP("Clique o mouse nessa tela, para ativar o microfone.");
    createP("Quando ela está de bom humor, tem que clicar a cada pergunta.");
    createP("Quando ela está de MAU humor, o microfone fica ligado por mais tempo -");
    createP("E ela poderá ficar toda confusa, ao ouvir a própria voz - vocês verão!");
    createP("Ela é bem nova, ainda está aprendendo.")
}
