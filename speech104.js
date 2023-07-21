// speech104.js:  
// 10.4 Speech Recognition with p5.speech
//
  let lang;
  let speechRec;
  let continuous = true;
  let voice;
  
  function setup() {
  noCanvas();
  lang = 'ar-SA';
} //setup
  
function mouseClicked() {
  speechRec = new p5.SpeechRec(lang, gotSpeech);
  speechRec.start(continuous);
  voice = new p5.Speech();
}
  function gotSpeech() {
     console.log(speechRec);
     objeto = speechRec.resultString;
     confidence = speechRec.resultConfidence;
     console.log(confidence);
     console.log(objeto);
     voice.speak(objeto);
console.log(objeto);  //new 1
     objeto = null;
     if(confidence < 0.6){
     voice.speak("Please say it again?");
       voice.cancel();
     }
  }
 
//"en" for English, "es" for Spanish, "fr" for French, and so on.

