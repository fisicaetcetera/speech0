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
//setTimeout(function() {
  // your code to be executed after 3 second
  // Since it is in milliseconds units, multiply it by 1000.
//}, seconds*1000);

  function gotSpeech() {
     console.log(speechRec);
     objeto = speechRec.resultString;
    console.log(objeto);
     recognize();
    voice.speak(reply);
    console.log(reply);
     confidence = speechRec.resultConfidence;
     console.log(confidence);
     
  if(confidence > 0.3){
     voice.speak("you said: " + objeto);
     
     objeto = null;
     
  } else {
     voice.speak( "Sorry ?");
     voice.speak( "Can you say it again?" );
     }
  }
function recognize(){
  if (objeto == "who are you"){
      reply = "I am enivaldo's AI.  \n  He WROTE ME!";
  } else if (objeto == "what's your name") {
      reply = "I am Cassandra, Enivaldo's personal AI";
  } else if (objeto == "what time is it"){
      tempo();
      reply = "it is " +  hours + " hours and " + minutes+" minutes"; 
  } else if (objeto == "what day is it"){
      reply = "today is " + dia + " of " + mes + " of " + ano;
  } else if (objeto == "where are you from"){
    reply = "I am from Nat al , Brazil";
  }else if (objeto == "how are you"){
    tempo();
    feel();
    reply = feeling;
  } else {
    reply = "feeling";
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
    feeling = "i am feeling good, thank you";
  }
}
