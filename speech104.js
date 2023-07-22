// speech104.js:  
// 10.4 Speech Recognition with p5.speech
//
  let lang;
  let speechRec;
  let continuous = true;
  let voice;
  let reply;
  let myName = "Cassandra";
  
  function setup() {
  noCanvas();
  lang = 'en-US';
} //setup
  
function mouseClicked() {
  speechRec = new p5.SpeechRec(lang, gotSpeech);
  speechRec.start(continuous);
  voice = new p5.Speech();
}
  function gotSpeech() {
     console.log(speechRec);
     objeto = speechRec.resultString;
     recognize();
    voice.speak(reply);
    console.log(reply);
     confidence = speechRec.resultConfidence;
     console.log(confidence);
     console.log(objeto);
  if(confidence > 0.3){
     voice.speak("you said: " + objeto);
     console.log(objeto);  //new 1
     objeto = null;
    //voice.cancel();
  } else {
     voice.speak( "Sorry ?");
     voice.speak( "Can you say it again?" )
     }
  }
function recognize(){
  if (objeto == "who are you"){
      reply = "I am enivaldo's AI.  \n  He WROTE ME!";
  } else if (objeto == "what's your name") {
      reply = "I am Cassandra, Enivaldo's personal AI";
  } else if (objeto == "what time is it"){
      tempo();
      reply = "it is " +  hours + "hours and " + minutes+"minutes"; 
  } else if (objeto == "what day is it"){
      reply = "today is " + dia + "of month" + mes + "of " + ano;
  } else {
    reply = "undefined";
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
  }
