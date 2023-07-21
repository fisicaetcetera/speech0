// speech104.js:  
// 10.4 Speech Recognition with p5.speech
//
  let lang;
  let speechRec;
  let continuous = true;
  let voice;
  let reply;
  
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
    voice.speak("reply");
     confidence = speechRec.resultConfidence;
     console.log(confidence);
     console.log(objeto);
  if(confidence > 0.3){
     voice.speak("you said: " + objeto);
     console.log(objeto);  //new 1
     objeto = null;
    voice.cancel();
  } else {
     voice.speak("Sorry ?");
     //voice.cancel();  //new 2
     }
  }
function recognize(){
  if (objeto == "who are you"){
    reply = "I am enivaldo's AI";
  } else {
    reply = ":)"
  }

}

 
//"en" for English, "es" for Spanish, "fr" for French, and so on.

