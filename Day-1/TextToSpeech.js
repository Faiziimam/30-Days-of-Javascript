// TO check whether  this is supported by your browser or not
if (`speechSynthesis` in window) {
  console.log('Speech is supported 🪐');
} else {
  console.log('Not Supported 😫');
}

//Here we have created a variable and assigned it to speechSynthesis class
var msg = new SpeechSynthesisUtterance();
//now we are using {text} to convert text into speech 
msg.text = 'Hellow Programmer';
// No this line is letting the browser talk
window.speechSynthesis.speak(msg);
